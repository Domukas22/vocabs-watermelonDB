//
//
//

import React from "react";
import db, { Lists_DB, Translations_DB, Vocabs_DB } from "../..";

import {
  List_MODEL,
  Translation_MODEL,
  TranslationCreation_PROPS,
  Vocab_MODEL,
} from "../../models";

export type CreateVocab_PROPS = {
  list: List_MODEL;
  difficulty: 1 | 2 | 3;
  description?: string;
  image?: string;
  is_public?: boolean;
  is_publicly_visible?: boolean;
  translations: TranslationCreation_PROPS[] | null;
};

export default async function CREATE_vocab(content: CreateVocab_PROPS) {
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

  await db.write(async () => {
    // Create a new vocab record
    const newVocab = await Vocabs_DB.create((vocab) => {
      vocab.list.set(list);
      vocab.difficulty = difficulty || 3;
      vocab.description = description || "Dummy description";
      vocab.image = image || "";
      vocab.is_public = is_public || false;
      vocab.is_publicly_visible = is_publicly_visible || false;
    });

    // Create translations and link them to the new vocab
    for (const incomingTR of translations) {
      await Translations_DB.create((tr) => {
        tr.vocab.set(newVocab); // Link the translation to the vocab
        tr.lang_id = incomingTR.lang_id;
        tr.text = incomingTR.text;
        tr.highlights = incomingTR.highlights;
      });
    }
  });
}

export async function CREATE_dummyVocab(list: List_MODEL) {
  if (!list) {
    console.error("🔴 need a list for dummy vocab creation 🔴");
    return;
  }
  await db.write(async () => {
    // Create a new vocab record
    const newVocab = await Vocabs_DB.create((vocab) => {
      vocab.list.set(list);
      vocab.difficulty = GET_random1to(3);
      vocab.description = dummyDescs()[GET_random1to(20)];
      vocab.image = "";
      vocab.is_public = false;
      vocab.is_publicly_visible = false;
    });

    // Create translations and link them to the new vocab
    for (const incomingTR of translations()[GET_random1to(20)]) {
      await Translations_DB.create((tr) => {
        tr.vocab.set(newVocab); // Link the translation to the vocab
        tr.lang_id = incomingTR.lang_id;
        tr.text = incomingTR?.text;
        tr.highlights = incomingTR.highlights;
      });
    }
  });
}

const dummyDescs = () => [
  "A quick brown fox",
  "Lazy dog jumps high",
  "Silent wind at dusk",
  "Whispers in the dark",
  "Shadows on the wall",
  "Sunrise over hills",
  "Raindrops on leaves",
  "Moonlight on water",
  "Echoes in the night",
  "Footsteps in snow",
  "Stars in the sky",
  "Thunder in the distance",
  "Breeze through trees",
  "Waves crashing ashore",
  "Fireflies in the field",
  "Mountains in the mist",
  "Clouds drifting slowly",
  "Fog on the horizon",
  "Candle flickering softly",
  "Birdsong at dawn",
];
const translations = () => [
  [
    { lang_id: "en", text: "Hello", highlights: "0,1,2" },
    { lang_id: "de", text: "Hallo", highlights: "0,1,2" },
  ],
  [
    { lang_id: "en", text: "Goodbye", highlights: "3,4,5" },
    { lang_id: "de", text: "Tschüss", highlights: "3,4,5" },
  ],
  [
    { lang_id: "en", text: "Thank you", highlights: "1,2,3" },
    { lang_id: "de", text: "Danke", highlights: "2,3,4" },
  ],
  [
    { lang_id: "en", text: "Yes", highlights: "1,2" },
    { lang_id: "de", text: "Ja", highlights: "3,4" },
  ],
  [
    { lang_id: "en", text: "No", highlights: "2,3" },
    { lang_id: "de", text: "Nein", highlights: "1,2" },
  ],
  [
    { lang_id: "en", text: "Please", highlights: "1,3" },
    { lang_id: "de", text: "Bitte", highlights: "4,5" },
  ],
  [
    { lang_id: "en", text: "Sorry", highlights: "2,3" },
    { lang_id: "de", text: "Entschuldigung", highlights: "2,3" },
  ],
  [
    { lang_id: "en", text: "Water", highlights: "2,3" },
    { lang_id: "de", text: "Wasser", highlights: "1,2" },
  ],
  [
    { lang_id: "en", text: "Food", highlights: "1,4" },
    { lang_id: "de", text: "Essen", highlights: "1,3" },
  ],
  [
    { lang_id: "en", text: "Car", highlights: "2,3" },
    { lang_id: "de", text: "Auto", highlights: "3,4" },
  ],
  [
    { lang_id: "en", text: "House", highlights: "1" },
    { lang_id: "de", text: "Haus", highlights: "2,3" },
  ],
  [
    { lang_id: "en", text: "Street", highlights: "1,2" },
    { lang_id: "de", text: "Straße", highlights: "2,3" },
  ],
  [
    { lang_id: "en", text: "Friend", highlights: "2,3" },
    { lang_id: "de", text: "Freund", highlights: "2,3" },
  ],
  [
    { lang_id: "en", text: "Day", highlights: "1,2" },
    { lang_id: "de", text: "Tag", highlights: "1,2" },
  ],
  [
    { lang_id: "en", text: "Night", highlights: "1,2" },
    { lang_id: "de", text: "Nacht", highlights: "5" },
  ],
  [
    { lang_id: "en", text: "Morning", highlights: "1,3" },
    { lang_id: "de", text: "Morgen", highlights: "1,4" },
  ],
  [
    { lang_id: "en", text: "Apple", highlights: "2,3" },
    { lang_id: "de", text: "Apfel", highlights: "2,3" },
  ],
  [
    { lang_id: "en", text: "Tree", highlights: "1,2" },
    { lang_id: "de", text: "Baum", highlights: "1,3" },
  ],
  [
    { lang_id: "en", text: "Dog", highlights: "2,4" },
    { lang_id: "de", text: "Hund", highlights: "2,4" },
  ],
  [
    { lang_id: "en", text: "Cat", highlights: "1,4" },
    { lang_id: "de", text: "Katze", highlights: "1,2" },
  ],
];

function GET_random1to(nr: number) {
  return Math.floor(Math.random() * nr) + 1;
}
