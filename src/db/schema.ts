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
        { name: "payment_date", type: "string", isOptional: true },
        { name: "payment_amount", type: "number", isOptional: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "vocabs",
      columns: [
        { name: "list_id", type: "string", isIndexed: true },
        { name: "difficulty", type: "number" },
        { name: "description", type: "string", isOptional: true },
        { name: "image", type: "string", isOptional: true },
        { name: "is_public", type: "boolean" },
        { name: "is_publicly_visible", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "translations",
      columns: [
        { name: "vocab_id", type: "string", isIndexed: true },
        { name: "lang_id", type: "string", isIndexed: true },
        { name: "text", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "highlights",
      columns: [
        { name: "translation_id", type: "string", isIndexed: true },
        { name: "start_index", type: "number" },
        { name: "end_index", type: "number" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "lists",
      columns: [
        { name: "user_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
  ],
});
