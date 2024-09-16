//
//
//

import languages, { languagesArr_PROPS } from "@/src/constants/languages";

export default function GET_langs(id_ARR: string[] = ["en", "de"]) {
  return languages.filter((lang): lang is languagesArr_PROPS => {
    return lang !== undefined && id_ARR.includes(lang.id);
  });
}
