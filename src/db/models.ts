import { Model, Q } from "@nozbe/watermelondb";
import {
  children,
  date,
  field,
  immutableRelation,
  reader,
  readonly,
  relation,
  text,
  writer,
} from "@nozbe/watermelondb/decorators";
import { Associations } from "@nozbe/watermelondb/Model";
import db from ".";
import { CreateVocab_PROPS } from "./actions/vocabs/CREATE_vocab";

// User Model
export class User_MODEL extends Model {
  static table = "users";

  static associations: Associations = {
    lists: { type: "has_many", foreignKey: "user_id" },
  };
  @children("lists") lists!: List_MODEL[];

  @text("name") name!: string;
  @text("email") email!: string;
  @text("password") password!: string;
  @field("is_premium") is_premium!: boolean;
  @field("payment_date") payment_date!: string;
  @field("payment_amount") payment_amount!: number;
  @readonly @date("created_at") created_at!: number;
  @readonly @date("updated_at") updated_at!: number;
}
// ---------------------------------------------------------------

// List Model
export class List_MODEL extends Model {
  static table = "lists";
  static associations: Associations = {
    user: { type: "belongs_to", key: "user_id" },
    vocabs: { type: "has_many", foreignKey: "list_id" },
  };
  @children("vocabs") vocabs!: Vocab_MODEL[];

  @immutableRelation("users", "user_id") user!: User_MODEL;
  @text("name") name!: string;
  @readonly @date("created_at") created_at!: number;
  @readonly @date("updated_at") updated_at!: number;

  @reader async GET_vocabCounts(list_id: string) {
    const vocabs = (await this.collections
      .get("vocabs")
      .query(Q.where("list_id", list_id))
      .fetch()) as Vocab_MODEL[];

    // Count vocabs by difficulty
    return vocabs.reduce(
      (counts, vocab) => {
        if (vocab.difficulty === 1) {
          counts.difficulty_1 += 1;
        } else if (vocab.difficulty === 2) {
          counts.difficulty_2 += 1;
        } else if (vocab.difficulty === 3) {
          counts.difficulty_3 += 1;
        }
        counts.total += 1;
        return counts;
      },
      {
        total: 0,
        difficulty_1: 0,
        difficulty_2: 0,
        difficulty_3: 0,
      }
    );
  }
}
export type NormalList_MODEL = {
  id: string;
  user: string;
  name: string;
  created_at: number;
  updated_at: number;
};
// ---------------------------------------------------------------

// Vocab Model
export class Vocab_MODEL extends Model {
  static table = "vocabs";

  static associations: Associations = {
    list: { type: "belongs_to", key: "list_id" },
    translations: { type: "has_many", foreignKey: "vocab_id" },
  };
  @children("translations") translations!: Translation_MODEL[];

  @relation("lists", "list_id") list!: List_MODEL;
  @field("difficulty") difficulty!: 1 | 2 | 3;
  @text("description") description!: string;
  @field("image") image!: string;
  @field("is_public") is_public!: boolean;
  @field("is_publicly_visible") is_publicly_visible!: boolean;
  @readonly @date("created_at") created_at!: number;
  @readonly @date("updated_at") updated_at!: number;
}
// ---------------------------------------------------------------

// Translation Model
export class Translation_MODEL extends Model {
  static table = "translations";

  static associations: Associations = {
    vocab: { type: "belongs_to", key: "vocab_id" },
    highlights: { type: "has_many", foreignKey: "translation_id" },
  };
  @children("highlights") highlights!: Highlights_MODEL[];

  @immutableRelation("vocabs", "vocab_id") vocab!: Vocab_MODEL;
  @field("lang_id") lang_id!: string;
  @text("text") text!: string;
  @readonly @date("created_at") created_at!: number;
  @readonly @date("updated_at") updated_at!: number;
}
// ---------------------------------------------------------------

// Highlights Model
export class Highlights_MODEL extends Model {
  static table = "highlights";
  static associations: Associations = {
    translation: { type: "belongs_to", key: "translation_id" },
  };

  @immutableRelation("translation", "translation_id")
  translation!: Translation_MODEL;
  @field("start_index") start_index!: number;
  @field("end_index") end_index!: number;
  @readonly @date("created_at") created_at!: number;
  @readonly @date("updated_at") updated_at!: number;
}
