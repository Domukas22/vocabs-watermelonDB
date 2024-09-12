//
//
//

export type Language_PROPS = {
  id: string;
  lang: {
    en: string;
    de: string;
  };
  country: {
    en: string;
    de: string;
  };
};

const languages_ARR = [
  {
    id: "sq",
    lang: { en: "Albanian", de: "Albanisch" },
    country: { en: "Albania", de: "Albanien" },
    image: require("@/assets/images/flags/sq.png"),
  },
  {
    id: "ar",
    lang: { en: "Arabic", de: "Arabisch" },
    country: { en: "Various", de: "Verschiedene" },
    image: require("@/assets/images/flags/ar.png"),
  },
  {
    id: "hy",
    lang: { en: "Armenian", de: "Armenisch" },
    country: { en: "Armenia", de: "Armenien" },
    image: require("@/assets/images/flags/hy.png"),
  },
  {
    id: "bn",
    lang: { en: "Bengali", de: "Bengalisch" },
    country: { en: "Bangladesh", de: "Bangladesch" },
    image: require("@/assets/images/flags/bn.png"),
  },
  {
    id: "bg",
    lang: { en: "Bulgarian", de: "Bulgarisch" },
    country: { en: "Bulgaria", de: "Bulgarien" },
    image: require("@/assets/images/flags/bg.png"),
  },

  {
    id: "hr",
    lang: { en: "Croatian", de: "Kroatisch" },
    country: { en: "Croatia", de: "Kroatien" },
    image: require("@/assets/images/flags/hr.png"),
  },
  {
    id: "cs",
    lang: { en: "Czech", de: "Tschechisch" },
    country: { en: "Czech Republic", de: "Tschechische Republik" },
    image: require("@/assets/images/flags/cs.png"),
  },
  {
    id: "da",
    lang: { en: "Danish", de: "Dänisch" },
    country: { en: "Denmark", de: "Dänemark" },
    image: require("@/assets/images/flags/da.png"),
  },
  {
    id: "nl",
    lang: { en: "Dutch", de: "Niederländisch" },
    country: { en: "Netherlands", de: "Niederlande" },
    image: require("@/assets/images/flags/nl.png"),
  },
  {
    id: "en",
    lang: { en: "English", de: "Englisch" },
    country: { en: "England", de: "England" },
    image: require("@/assets/images/flags/en.png"),
  },

  {
    id: "et",
    lang: { en: "Estonian", de: "Estnisch" },
    country: { en: "Estonia", de: "Estland" },
    image: require("@/assets/images/flags/et.png"),
  },
  {
    id: "fi",
    lang: { en: "Finnish", de: "Finnisch" },
    country: { en: "Finland", de: "Finnland" },
    image: require("@/assets/images/flags/fi.png"),
  },
  {
    id: "fr",
    lang: { en: "French", de: "Französisch" },
    country: { en: "France", de: "Frankreich" },
    image: require("@/assets/images/flags/fr.png"),
  },
  {
    id: "de",
    lang: { en: "German", de: "Deutsch" },
    country: { en: "Germany", de: "Deutschland" },
    image: require("@/assets/images/flags/de.png"),
  },
  {
    id: "el",
    lang: { en: "Greek", de: "Griechisch" },
    country: { en: "Greece", de: "Griechenland" },
    image: require("@/assets/images/flags/el.png"),
  },
  {
    id: "gu",
    lang: { en: "Gujarati", de: "Gujarati" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/gu.png"),
  },
  {
    id: "he",
    lang: { en: "Hebrew", de: "Hebräisch" },
    country: { en: "Israel", de: "Israel" },
    image: require("@/assets/images/flags/he.png"),
  },
  {
    id: "hi",
    lang: { en: "Hindi", de: "Hindi" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/hi.png"),
  },
  {
    id: "hu",
    lang: { en: "Hungarian", de: "Ungarisch" },
    country: { en: "Hungary", de: "Ungarn" },
    image: require("@/assets/images/flags/hu.png"),
  },
  {
    id: "is",
    lang: { en: "Icelandic", de: "Isländisch" },
    country: { en: "Iceland", de: "Island" },
    image: require("@/assets/images/flags/is.png"),
  },
  {
    id: "ig",
    lang: { en: "Igbo", de: "Igbo" },
    country: { en: "Nigeria", de: "Nigeria" },
    image: require("@/assets/images/flags/ig.png"),
  },
  {
    id: "id",
    lang: { en: "Indonesian", de: "Indonesisch" },
    country: { en: "Indonesia", de: "Indonesien" },
    image: require("@/assets/images/flags/id.png"),
  },
  {
    id: "it",
    lang: { en: "Italian", de: "Italienisch" },
    country: { en: "Italy", de: "Italien" },
    image: require("@/assets/images/flags/it.png"),
  },
  {
    id: "ja",
    lang: { en: "Japanese", de: "Japanisch" },
    country: { en: "Japan", de: "Japan" },
    image: require("@/assets/images/flags/ja.png"),
  },
  {
    id: "jw",
    lang: { en: "Javanese", de: "Javanesisch" },
    country: { en: "Indonesia", de: "Indonesien" },
    image: require("@/assets/images/flags/id.png"),
  },
  {
    id: "kn",
    lang: { en: "Kannada", de: "Kannada" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/kn.png"),
  },
  {
    id: "km",
    lang: { en: "Khmer", de: "Khmer" },
    country: { en: "Cambodia", de: "Kambodscha" },
    image: require("@/assets/images/flags/km.png"),
  },
  {
    id: "ko",
    lang: { en: "Korean", de: "Koreanisch" },
    country: { en: "South Korea", de: "Südkorea" },
    image: require("@/assets/images/flags/ko.png"),
  },
  {
    id: "la",
    lang: { en: "Latin", de: "Latein" },
    country: { en: "Ancient Rome", de: "Antikes Rom" },
    image: require("@/assets/images/flags/la.png"),
  },
  {
    id: "lv",
    lang: { en: "Latvian", de: "Lettisch" },
    country: { en: "Latvia", de: "Lettland" },
    image: require("@/assets/images/flags/lv.png"),
  },
  {
    id: "lt",
    lang: { en: "Lithuanian", de: "Litauisch" },
    country: { en: "Lithuania", de: "Litauen" },
    image: require("@/assets/images/flags/lt.png"),
  },
  {
    id: "lb",
    lang: { en: "Luxembourgish", de: "Luxemburgisch" },
    country: { en: "Luxembourg", de: "Luxemburg" },
    image: require("@/assets/images/flags/lb.png"),
  },
  {
    id: "mk",
    lang: { en: "Macedonian", de: "Mazedonisch" },
    country: { en: "North Macedonia", de: "Nordmazedonien" },
    image: require("@/assets/images/flags/mk.png"),
  },
  {
    id: "mg",
    lang: { en: "Malagasy", de: "Malagasy" },
    country: { en: "Madagascar", de: "Madagaskar" },
    image: require("@/assets/images/flags/mg.png"),
  },
  {
    id: "ms",
    lang: { en: "Malay", de: "Malaiisch" },
    country: { en: "Malaysia", de: "Malaysia" },
    image: require("@/assets/images/flags/ms.png"),
  },
  {
    id: "ml",
    lang: { en: "Malayalam", de: "Malayalam" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/ml.png"),
  },
  {
    id: "mt",
    lang: { en: "Maltese", de: "Maltesisch" },
    country: { en: "Malta", de: "Malta" },
    image: require("@/assets/images/flags/mt.png"),
  },
  {
    id: "mi",
    lang: { en: "Maori", de: "Maori" },
    country: { en: "New Zealand", de: "Neuseeland" },
    image: require("@/assets/images/flags/mi.png"),
  },
  {
    id: "mr",
    lang: { en: "Marathi", de: "Marathi" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/mr.png"),
  },
  {
    id: "my",
    lang: { en: "Myanmar", de: "Myanmar" },
    country: { en: "Myanmar", de: "Myanmar" },
    image: require("@/assets/images/flags/my.png"),
  },
  {
    id: "ne",
    lang: { en: "Nepali", de: "Nepali" },
    country: { en: "Nepal", de: "Nepal" },
    image: require("@/assets/images/flags/ne.png"),
  },
  {
    id: "no",
    lang: { en: "Norwegian", de: "Norwegisch" },
    country: { en: "Norway", de: "Norwegen" },
    image: require("@/assets/images/flags/no.png"),
  },
  {
    id: "or",
    lang: { en: "Odia", de: "Odia" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/or.png"),
  },
  {
    id: "pa",
    lang: { en: "Punjabi", de: "Punjabi" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/pa.png"),
  },
  {
    id: "pl",
    lang: { en: "Polish", de: "Polnisch" },
    country: { en: "Poland", de: "Polen" },
    image: require("@/assets/images/flags/pl.png"),
  },
  {
    id: "pt",
    lang: { en: "Portuguese", de: "Portugiesisch" },
    country: { en: "Portugal", de: "Portugal" },
    image: require("@/assets/images/flags/pt.png"),
  },
  {
    id: "ro",
    lang: { en: "Romanian", de: "Rumänisch" },
    country: { en: "Romania", de: "Rumänien" },
    image: require("@/assets/images/flags/ro.png"),
  },
  {
    id: "ru",
    lang: { en: "Russian", de: "Russisch" },
    country: { en: "Russia", de: "Russland" },
    image: require("@/assets/images/flags/ru.png"),
  },
  {
    id: "sm",
    lang: { en: "Samoan", de: "Samoanisch" },
    country: { en: "Samoa", de: "Samoa" },
    image: require("@/assets/images/flags/sm.png"),
  },
  {
    id: "sn",
    lang: { en: "Shona", de: "Shona" },
    country: { en: "Zimbabwe", de: "Simbabwe" },
    image: require("@/assets/images/flags/sn.png"),
  },
  {
    id: "sd",
    lang: { en: "Sindhi", de: "Sindhi" },
    country: { en: "Pakistan", de: "Pakistan" },
    image: require("@/assets/images/flags/sd.png"),
  },
  {
    id: "si",
    lang: { en: "Sinhala", de: "Singhalesisch" },
    country: { en: "Sri Lanka", de: "Sri Lanka" },
    image: require("@/assets/images/flags/si.png"),
  },
  {
    id: "sk",
    lang: { en: "Slovak", de: "Slowakisch" },
    country: { en: "Slovakia", de: "Slowakei" },
    image: require("@/assets/images/flags/sk.png"),
  },
  {
    id: "sl",
    lang: { en: "Slovenian", de: "Slowenisch" },
    country: { en: "Slovenia", de: "Slowenien" },
    image: require("@/assets/images/flags/sl.png"),
  },
  {
    id: "so",
    lang: { en: "Somali", de: "Somali" },
    country: { en: "Somalia", de: "Somalia" },
    image: require("@/assets/images/flags/so.png"),
  },
  {
    id: "st",
    lang: { en: "Sesotho", de: "Sesotho" },
    country: { en: "Lesotho", de: "Lesotho" },
    image: require("@/assets/images/flags/st.png"),
  },
  {
    id: "es",
    lang: { en: "Spanish", de: "Spanisch" },
    country: { en: "Spain", de: "Spanien" },
    image: require("@/assets/images/flags/es.png"),
  },
  {
    id: "su",
    lang: { en: "Sundanese", de: "Sundanesisch" },
    country: { en: "Indonesia", de: "Indonesien" },
    image: require("@/assets/images/flags/id.png"),
  },
  {
    id: "sw",
    lang: { en: "Swahili", de: "Swahili" },
    country: { en: "Various", de: "Verschiedene" },
    image: require("@/assets/images/flags/sw.png"),
  },
  {
    id: "sv",
    lang: { en: "Swedish", de: "Schwedisch" },
    country: { en: "Sweden", de: "Schweden" },
    image: require("@/assets/images/flags/sv.png"),
  },
  {
    id: "tg",
    lang: { en: "Tajik", de: "Tadschikisch" },
    country: { en: "Tajikistan", de: "Tadschikistan" },
    image: require("@/assets/images/flags/tg.png"),
  },
  {
    id: "ta",
    lang: { en: "Tamil", de: "Tamil" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/ta.png"),
  },
  {
    id: "te",
    lang: { en: "Telugu", de: "Telugu" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/te.png"),
  },
  {
    id: "th",
    lang: { en: "Thai", de: "Thailändisch" },
    country: { en: "Thailand", de: "Thailand" },
    image: require("@/assets/images/flags/th.png"),
  },
  {
    id: "tr",
    lang: { en: "Turkish", de: "Türkisch" },
    country: { en: "Turkey", de: "Türkei" },
    image: require("@/assets/images/flags/tr.png"),
  },
  {
    id: "uk",
    lang: { en: "Ukrainian", de: "Ukrainisch" },
    country: { en: "Ukraine", de: "Ukraine" },
    image: require("@/assets/images/flags/uk.png"),
  },
  {
    id: "ur",
    lang: { en: "Urdu", de: "Urdu" },
    country: { en: "Pakistan", de: "Pakistan" },
    image: require("@/assets/images/flags/ur.png"),
  },
  {
    id: "vi",
    lang: { en: "Vietnamese", de: "Vietnamesisch" },
    country: { en: "Vietnam", de: "Vietnam" },
    image: require("@/assets/images/flags/vi.png"),
  },
  {
    id: "cy",
    lang: { en: "Welsh", de: "Walisisch" },
    country: { en: "Wales", de: "Wales" },
    image: require("@/assets/images/flags/cy.png"),
  },
  {
    id: "xh",
    lang: { en: "Xhosa", de: "Xhosa" },
    country: { en: "South Africa", de: "Südafrika" },
    image: require("@/assets/images/flags/xh.png"),
  },
  {
    id: "yi",
    lang: { en: "Yiddish", de: "Jiddisch" },
    country: { en: "Various", de: "Verschiedene" },
    image: require("@/assets/images/flags/yi.png"),
  },
  {
    id: "zu",
    lang: { en: "Zulu", de: "Zulu" },
    country: { en: "South Africa", de: "Südafrika" },
    image: require("@/assets/images/flags/zu.png"),
  },
];

export default languages_ARR;
