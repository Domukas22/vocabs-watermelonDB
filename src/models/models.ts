import { Model } from "@nozbe/watermelondb";
import { field, relation, text } from "@nozbe/watermelondb/decorators";

// User Model
export class User_MODEL extends Model {
  static table = "users";

  @text("name") name: string = "";
  @text("email") email: string = "";
  @text("password") password: string = "";
  @field("is_premium") isPremium: boolean = false;
  @field("payment_date") paymentDate: string = "";
  @field("payment_amount") paymentAmount: number = 0;
  @field("created_at") createdAt: number = Date.now();
  @field("updated_at") updatedAt: number = Date.now();

  static associations = {
    lists: { type: "has_many", foreignKey: "user_id" },
  };

  @relation("lists", "user_id") lists; // Relation to the lists table
}
// ---------------------------------------------------------------

// Vocab Model
export class Vocab_MODEL extends Model {
  static table = "vocabs";

  @field("list_id") listId: string = "";
  @field("difficulty") difficulty: number = 0;
  @text("description") description: string = "";
  @field("image") image: string = "";
  @field("is_public") isPublic: boolean = false;
  @field("is_publicly_visible") isPubliclyVisible: boolean = false;
  @field("created_at") createdAt: number = Date.now();
  @field("updated_at") updatedAt: number = Date.now();

  static associations = {
    list: { type: "belongs_to", key: "list_id" },
    translations: { type: "has_many", foreignKey: "vocab_id" },
  };

  @relation("list", "list_id") list;
  @relation("translations", "vocab_id") translations; // Relation to the translations table
}
// ---------------------------------------------------------------

// List Model
export class List_MODEL extends Model {
  static table = "lists";

  @field("user_id") userId: string = "";
  @text("name") name: string = "";
  @field("created_at") createdAt: number = Date.now();
  @field("updated_at") updatedAt: number = Date.now();

  static associations = {
    user: { type: "belongs_to", key: "user_id" },
    vocabs: { type: "has_many", foreignKey: "list_id" },
  };

  @relation("user", "user_id") user;
  @relation("vocabs", "list_id") vocabs; // Relation to the vocabs table
}
// ---------------------------------------------------------------

// Language Model
export class Language_MODEL extends Model {
  static table = "languages";

  @field("slug") slug: string = "";
  @text("name") name: string = "";
  @field("image") image: string = "";
  @field("flag") flag: string = "";
  @field("created_at") createdAt: number = Date.now();
  @field("updated_at") updatedAt: number = Date.now();
}
// ---------------------------------------------------------------

// Translation Model
export class Translation_MODEL extends Model {
  static table = "translations";

  @field("vocab_id") vocabId: string = "";
  @field("lang_id") langId: string = "";
  @text("text") text: string = "";
  @field("created_at") createdAt: number = Date.now();
  @field("updated_at") updatedAt: number = Date.now();

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

  @field("translation_id") translationId: string = "";
  @field("start_index") startIndex: number = 0;
  @field("end_index") endIndex: number = 0;
  @field("created_at") createdAt: number = Date.now();
  @field("updated_at") updatedAt: number = Date.now();

  static associations = {
    translation: { type: "belongs_to", key: "translation_id" },
  };

  @relation("translation", "translation_id") translation;
}
