//
//
//

import db, { Vocabs_DB } from "../..";
import { Vocab_MODEL } from "../../models";

export default async function UPDATE_vocab(
  id: string,
  updates: Partial<Vocab_MODEL>
) {
  await db.write(async () => {
    const vocab = await Vocabs_DB.find(id);

    if (vocab) {
      await vocab.update(() => {
        Object.assign(vocab, updates);
        vocab.updated_at = Date.now();
      });
    }
  });
}
