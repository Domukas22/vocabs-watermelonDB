//
//
//

import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "users",
      columns: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
        { name: "password", type: "string" },
        { name: "hasPremium", type: "boolean" },
        { name: "paymentDate", type: "string" },
        { name: "paymentAmount", type: "number" },
      ],
    }),
    tableSchema({
      name: "vocabs",
      columns: [
        { name: "user_id", type: "string" }, // Foreign key to users
        { name: "list_id", type: "string" },
        { name: "difficulty", type: "number" },
        { name: "description", type: "string" },
        { name: "image", type: "string" },
        { name: "public", type: "boolean" },
        { name: "visibleInPublic", type: "boolean" },
      ],
    }),
    tableSchema({
      name: "translations",
      columns: [
        { name: "vocab_id", type: "string" }, // Foreign key to vocabs
        { name: "lang_id", type: "string" },
        { name: " ", type: "string" },
      ],
    }),
    tableSchema({
      name: "highlights",
      columns: [
        { name: "translation_id", type: "string" }, // Foreign key to translations
        { name: "startIndex", type: "number" },
        { name: "endIndex", type: "number" },
      ],
    }),
    tableSchema({
      name: "languages",
      columns: [
        { name: "slug", type: "string" },
        { name: "name", type: "string" },
        { name: "image", type: "string" },
        { name: "flag", type: "string" },
      ],
    }),
    tableSchema({
      name: "lists",
      columns: [
        { name: "user_id", type: "string" },
        { name: "name", type: "string" },
      ],
    }),
  ],
});
