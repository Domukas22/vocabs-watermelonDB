import { Model } from "@nozbe/watermelondb";
import { field, relation, text } from "@nozbe/watermelondb/decorators";
import { Associations } from "@nozbe/watermelondb/Model";

// User Model
export class User_MODEL extends Model {
  static table = "users";

  @text("name") name: string;
  @text("email") email: string;
  @text("password") password: string;
  @field("is_premium") is_premium: boolean;
  @field("payment_date") payment_date: string;
  @field("payment_amount") payment_amount: number;
  @field("created_at") created_at: number;
  @field("updated_at") updated_at: number;

  static associations = {
    lists: { type: "has_many", foreignKey: "user_id" },
  };

  @relation("lists", "user_id") lists; // Relation to the lists table
}
// ---------------------------------------------------------------

// Vocab Model
export class Vocab_MODEL extends Model {
  static table = "vocabs";

  @field("list_id") list_id!: string;
  @field("difficulty") difficulty!: 1 | 2 | 3;
  @text("description") description!: string;
  @field("image") image!: string;

  @field("is_public") is_public!: boolean;
  @field("is_publicly_visible") is_publicly_visible!: boolean;
  @field("created_at") created_at!: number;
  @field("updated_at") updated_at!: number;

  static associations = {
    list: { type: "belongs_to", key: "list_id" },
    translations: { type: "has_many", foreignKey: "vocab_id" },
  };

  @relation("list", "list_id") list!: List_MODEL;
  @relation("translations", "vocab_id") translations!: Translation_MODEL; // Relation to the translations table
}
// ---------------------------------------------------------------

// List Model
export class List_MODEL extends Model {
  static table = "lists";

  @field("user_id") user_id!: string;
  @text("name") name!: string;
  @field("created_at") created_at!: number;
  @field("updated_at") updated_at!: number;

  static associations: Associations = {
    user: { type: "belongs_to", key: "user_id" },
    vocabs: { type: "has_many", foreignKey: "list_id" },
  };

  @relation("user", "user_id") user!: User_MODEL;
  @relation("vocabs", "list_id") vocabs!: Vocab_MODEL; // Relation to the vocabs table
}
// ---------------------------------------------------------------

// Language Model
export class Language_MODEL extends Model {
  static table = "languages";

  @field("slug") slug: string;
  @text("name") name: string;
  @field("image") image: string;
  @field("flag") flag: string;
  @field("created_at") created_at: number;
  @field("updated_at") updated_at: number;
}
// ---------------------------------------------------------------

// Translation Model
export class Translation_MODEL extends Model {
  static table = "translations";

  @field("vocab_id") vocabId: string;
  @field("lang_id") langId: string;
  @text("text") text: string;
  @field("created_at") created_at: number;
  @field("updated_at") updated_at: number;

  static associations = {
    vocab: { type: "belongs_to", key: "vocab_id" },
    highlights: { type: "has_many", foreignKey: "translation_id" },
  };

  @relation("vocab", "vocab_id") vocab;
  @relation("highlights", "translation_id") highlights; // Relation to the highlights table
}
// ---------------------------------------------------------------

// Highlights Model
export class Highlights_MODEL extends Model {
  static table = "highlights";

  @field("translation_id") translation_id: string;
  @field("start_index") start_index: number;
  @field("end_index") end_index: number;
  @field("created_at") created_at: number;
  @field("updated_at") updated_at: number;

  static associations = {
    translation: { type: "belongs_to", key: "translation_id" },
  };

  @relation("translation", "translation_id") translation;
}
