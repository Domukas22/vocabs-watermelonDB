//
//
//

interface Dummies {
  name: string;
  id: string;
  vocabs: {
    id: string;
    difficulty: 1 | 2 | 3;
    image: string;
    description: string;
    translations: {
      lang: "en" | "de" | "lt";
      text: string;
      highlights: {
        startIndex: number;
        endIndex: number;
      }[];
    }[];
  }[];
}

export const vocabDummies: Dummies = {
  name: "list1",
  id: "list-id-1",
  vocabs: [
    {
      id: "v1",
      difficulty: 3,
      image: "https://example.com/image1.jpg",
      description: "A type of fruit",
      translations: [
        {
          lang: "en",
          text: "Apple",

          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel Apfel ",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v2",
      difficulty: 2,
      image: "https://example.com/image1.jpg",
      description: "Random thought",
      translations: [
        {
          lang: "en",
          text: "Very easy",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Sehr einfach",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v3",
      difficulty: 1,
      image: "https://example.com/image1.jpg",
      description: "Soem pears",
      translations: [
        {
          lang: "en",
          text: "A pear",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Eine Birne",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v4",
      difficulty: 2,
      image: "https://example.com/image1.jpg",
      description: "Random thought",
      translations: [
        {
          lang: "en",
          text: "Very easy",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Sehr einfach",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v5",
      difficulty: 3,
      image: "https://example.com/image1.jpg",
      description: "A type of fruit",
      translations: [
        {
          lang: "en",
          text: "Apple",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Apfel",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v6",
      difficulty: 2,
      image: "https://example.com/image1.jpg",
      description: "Random thought",
      translations: [
        {
          lang: "en",
          text: "Very easy",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Sehr einfach",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v7",
      difficulty: 3,
      image: "https://example.com/image1.jpg",
      description: "A type of fruit",
      translations: [
        {
          lang: "en",
          text: "Apple",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Apfel",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v8",
      difficulty: 2,
      image: "https://example.com/image1.jpg",
      description: "Random thought",
      translations: [
        {
          lang: "en",
          text: "Very easy",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Sehr einfach",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v9",
      difficulty: 3,
      image: "https://example.com/image1.jpg",
      description: "A type of fruit",
      translations: [
        {
          lang: "en",
          text: "Apple",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Apfel",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v10",
      difficulty: 2,
      image: "https://example.com/image1.jpg",
      description: "Random thought",
      translations: [
        {
          lang: "en",
          text: "Very easy",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Sehr einfach",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v11",
      difficulty: 3,
      image: "https://example.com/image1.jpg",
      description: "A type of fruit",
      translations: [
        {
          lang: "en",
          text: "Apple",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Apfel",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
    {
      id: "v12",
      difficulty: 2,
      image: "https://example.com/image1.jpg",
      description: "Random thought",
      translations: [
        {
          lang: "en",
          text: "Very easy",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
        {
          lang: "de",
          text: "Sehr einfach",
          highlights: [{ startIndex: 0, endIndex: 5 }],
        },
      ],
    },
  ],
};
