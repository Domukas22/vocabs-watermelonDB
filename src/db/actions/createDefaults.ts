//
//
//
import { Q } from "@nozbe/watermelondb";
import db, { Lists_DB, Users_DB, Translations_DB, Vocabs_DB } from "..";
import { List_MODEL, TranslationCreation_PROPS, User_MODEL } from "../models";

// Main function to create defaults
export default async function createDefaults() {
  await db.write(async () => {
    const user = await createUser("Benny", "domassirbike@gmail.com", "12345");
    await createList("Bennies list", user);
  });
}

// Helper function to create user
async function createUser(name: string, email: string, password: string) {
  return await Users_DB.create((user: User_MODEL) => {
    user.name = name;
    user.email = email;
    user.password = password;
    user.is_premium = false;
    user.payment_date = "";
    user.payment_amount = 0;
  });
}

// Helper function to create list
async function createList(name: string, user: User_MODEL) {
  return await Lists_DB.create((newList: List_MODEL) => {
    newList.name = name;
    newList.user.set(user);
  });
}

// Helper function to create vocab
async function createVocab(content: CreateVocab_PROPS) {
  const {
    list,
    difficulty,
    description,
    image,
    is_public,
    is_publicly_visible,
    translations,
  } = content;

  if (!translations || !list) {
    console.log(
      "🔴 Translations and List must be provided for vocab creation 🔴"
    );
    return;
  }

  const newVocab = await Vocabs_DB.create((vocab) => {
    vocab.list.set(list);
    vocab.difficulty = difficulty || 3;
    vocab.description = description || "Dummy description";
    vocab.image = image || "";
    vocab.is_public = is_public || false;
    vocab.is_publicly_visible = is_publicly_visible || false;
  });

  for (const incomingTR of translations) {
    await Translations_DB.create((tr) => {
      tr.vocab.set(newVocab);
      tr.lang_id = incomingTR.lang_id;
      tr.text = incomingTR.text;
      tr.highlights = incomingTR.highlights;
    });
  }
}

export type CreateVocab_PROPS = {
  list: List_MODEL;
  difficulty: 1 | 2 | 3;
  description?: string;
  image?: string;
  is_public?: boolean;
  is_publicly_visible?: boolean;
  translations: TranslationCreation_PROPS[] | null;
};
