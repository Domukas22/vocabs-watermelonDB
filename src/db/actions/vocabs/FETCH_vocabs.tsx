//
//
//

// filter.list_id - optional. if provided, fetch vocabs that point to that list_id.
// filter.id - optional. if provided, fetch a single vocab that contains that id. comes after list_id, in case we want to fethc one vocab form specific list.
// filter.has_image - optional, if provided false, fetch vocabs without an image (when image is undefined/null/""), if provided true, fetch vocabs with an image.
// filter.difficulties - if provided, fetch only those vocabs that has a difficulty set to one of the difficulty number provided. For example If diffculty is [1,3], only fetch vocabs that have a difficulty set to 1 or 3.
// filter.isPublic / filter.is_publicly_visible - simple boolean. if provided true, show vocabs with the properties se to ture or the opposite with false.
// sort: must always contain a value. will be set to "shuffle" by default. if "shuffle", then vocabs and displayed in random order, if "byDifficulty", then it sorts by difficulty asdendingly/descendingly according tot he sortDirection. same goes for date created. the sortDirection does not effect the "shuffle" sorting.

import { Q } from "@nozbe/watermelondb";
import { Vocabs_DB } from "../..";

export interface VocabFilter_PROPS {
  filter?: {
    list_id?: string;
    id?: string;
    has_image?: boolean;
    difficulties?: [1 | 2 | 3];
    is_public?: boolean;
    is_publicly_visible?: boolean;
  };
  sort?: {
    type: "shuffle" | "byDifficulty" | "byDateCreated";
    direction?: "ascending" | "descending";
  };
}

const FETCH_vocabs = (props: VocabFilter_PROPS) => {
  // return Vocabs_DB.query().observe();

  const { filter, sort } = props;

  if (!filter?.list_id) {
    throw new Error("List ID is required.");
  }

  // Start with the base query
  let query = Vocabs_DB.query();

  // Add optional filters using Q.and
  const conditions = [];

  if (filter?.list_id) {
    if (filter.list_id !== "all")
      conditions.push(Q.where("list_id", filter.list_id));
  }

  if (filter?.id) {
    conditions.push(Q.where("id", filter.id));
  }

  if (filter.has_image !== undefined) {
    const imageCondition = filter.has_image
      ? Q.where("image", Q.gt(5)) // Adjust the condition if needed based on your data requirements
      : Q.where("image", null);

    conditions.push(imageCondition);
  }

  if (filter.difficulties) {
    conditions.push(Q.where("difficulty", Q.oneOf(filter.difficulties)));
  }

  if (filter.is_public !== undefined) {
    conditions.push(Q.where("is_public", filter.is_public));
  }

  if (filter.is_publicly_visible !== undefined) {
    conditions.push(Q.where("is_publicly_visible", filter.is_publicly_visible));
  }

  // Handle sorting
  switch (sort?.type) {
    // case "shuffle":
    //   query = query.sortBy(Q.random());
    //   conditions.push(Q.where("is_public", filter.is_public));
    //   break;
    case "byDifficulty":
      conditions.push(
        Q.where("difficulty", sort.direction === "ascending" ? Q.asc : Q.desc)
      );
      break;
    case "byDateCreated":
      conditions.push(
        Q.where("date_created", sort.direction === "ascending" ? Q.asc : Q.desc)
      );
      break;
  }

  // Combine all conditions with Q.and
  query = query.extend(Q.and(...conditions));
  return query.observe();
};

export default FETCH_vocabs;
