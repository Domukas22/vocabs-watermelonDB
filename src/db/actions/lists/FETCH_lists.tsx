//
//
//

import { Lists_DB } from "../..";

export default function FETCH_lists(id?: string) {
  if (id && id !== "") return Lists_DB.find(id);
  return Lists_DB.query();
}
