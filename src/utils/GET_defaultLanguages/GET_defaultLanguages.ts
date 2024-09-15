//
//
//

import languages_ARR, { languagesArr_PROPS } from "@/src/constants/languages";

export default function GET_langs(id_ARR: string[] = ["en", "de"]) {
  return languages_ARR.filter((lang): lang is languagesArr_PROPS => {
    return lang !== undefined && id_ARR.includes(lang.id);
  });
}
