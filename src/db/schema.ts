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
        { name: "is_premium", type: "boolean" },
        { name: "payment_date", type: "string" },
        { name: "payment_amount", type: "number" },
      ],
    }),
    tableSchema({
      name: "vocabs",
      columns: [
        { name: "user_id", type: "string", isIndexed: true },
        { name: "list_id", type: "string", isIndexed: true },
        { name: "difficulty", type: "number" },
        { name: "description", type: "string" },
        { name: "image", type: "string" },
        { name: "is_public", type: "boolean" },
        { name: "is_publicly_visible", type: "boolean" },
      ],
    }),
    tableSchema({
      name: "translations",
      columns: [
        { name: "vocab_id", type: "string", isIndexed: true },
        { name: "lang_id", type: "string", isIndexed: true },
        { name: "text", type: "string" },
      ],
    }),
    tableSchema({
      name: "highlights",
      columns: [
        { name: "translation_id", type: "string", isIndexed: true },
        { name: "start_index", type: "number" },
        { name: "end_index", type: "number" },
      ],
    }),
    tableSchema({
      name: "languages",
      columns: [
        { name: "slug", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "image", type: "string" },
        { name: "flag", type: "string" },
      ],
    }),
    tableSchema({
      name: "lists",
      columns: [
        { name: "user_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
      ],
    }),
  ],
});
