//
//
//

import { Translations_DB } from "../..";

export default function FETCH_translations(id?: string) {
  if (id && id !== "") return Translations_DB.find(id);
  return Translations_DB.query();
}
