//
//
//

export type languagesArr_PROPS = {
  id: string;
  lang: {
    en: string;
    de: string;
  };
  country: {
    en: string;
    de: string;
  };
  image: NodeRequire;
};

const languages = {
  zh: {
    id: "zh",
    lang: { en: "Mandarin Chinese", de: "Mandarin Chinesisch" },
    country: { en: "China", de: "China" },
    image: require("@/assets/images/flags/zh.png"),
  },
  es: {
    id: "es",
    lang: { en: "Spanish", de: "Spanisch" },
    country: { en: "Spain", de: "Spanien" },
    image: require("@/assets/images/flags/es.png"),
  },
  en: {
    id: "en",
    lang: { en: "English", de: "Englisch" },
    country: { en: "England", de: "England" },
    image: require("@/assets/images/flags/en.png"),
  },
  hi: {
    id: "hi",
    lang: { en: "Hindi", de: "Hindi" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/hi.png"),
  },
  ar: {
    id: "ar",
    lang: { en: "Arabic", de: "Arabisch" },
    country: { en: "Arab World", de: "Arabische Welt" },
    image: require("@/assets/images/flags/ar.png"),
  },
  bn: {
    id: "bn",
    lang: { en: "Bengali", de: "Bengalisch" },
    country: { en: "Bangladesh", de: "Bangladesch" },
    image: require("@/assets/images/flags/bn.png"),
  },
  pt: {
    id: "pt",
    lang: { en: "Portuguese", de: "Portugiesisch" },
    country: { en: "Portugal", de: "Portugal" },
    image: require("@/assets/images/flags/pt.png"),
  },
  ru: {
    id: "ru",
    lang: { en: "Russian", de: "Russisch" },
    country: { en: "Russia", de: "Russland" },
    image: require("@/assets/images/flags/ru.png"),
  },
  ja: {
    id: "ja",
    lang: { en: "Japanese", de: "Japanisch" },
    country: { en: "Japan", de: "Japan" },
    image: require("@/assets/images/flags/ja.png"),
  },
  pa: {
    id: "pa",
    lang: { en: "Punjabi", de: "Panjabi" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/pa.png"),
  },
  de: {
    id: "de",
    lang: { en: "German", de: "Deutsch" },
    country: { en: "Germany", de: "Deutschland" },
    image: require("@/assets/images/flags/de.png"),
  },
  ko: {
    id: "ko",
    lang: { en: "Korean", de: "Koreanisch" },
    country: { en: "South Korea", de: "Südkorea" },
    image: require("@/assets/images/flags/ko.png"),
  },
  fr: {
    id: "fr",
    lang: { en: "French", de: "Französisch" },
    country: { en: "France", de: "Frankreich" },
    image: require("@/assets/images/flags/fr.png"),
  },
  te: {
    id: "te",
    lang: { en: "Telugu", de: "Telugu" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/te.png"),
  },
  vi: {
    id: "vi",
    lang: { en: "Vietnamese", de: "Vietnamesisch" },
    country: { en: "Vietnam", de: "Vietnam" },
    image: require("@/assets/images/flags/vi.png"),
  },

  mr: {
    id: "mr",
    lang: { en: "Marathi", de: "Marathi" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/mr.png"),
  },
  ta: {
    id: "ta",
    lang: { en: "Tamil", de: "Tamil" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/ta.png"),
  },
  ur: {
    id: "ur",
    lang: { en: "Urdu", de: "Urdu" },
    country: { en: "Pakistan", de: "Pakistan" },
    image: require("@/assets/images/flags/ur.png"),
  },
  tr: {
    id: "tr",
    lang: { en: "Turkish", de: "Türkisch" },
    country: { en: "Turkey", de: "Türkei" },
    image: require("@/assets/images/flags/tr.png"),
  },
  it: {
    id: "it",
    lang: { en: "Italian", de: "Italienisch" },
    country: { en: "Italy", de: "Italien" },
    image: require("@/assets/images/flags/it.png"),
  },
  th: {
    id: "th",
    lang: { en: "Thai", de: "Thailändisch" },
    country: { en: "Thailand", de: "Thailand" },
    image: require("@/assets/images/flags/th.png"),
  },
  pl: {
    id: "pl",
    lang: { en: "Polish", de: "Polnisch" },
    country: { en: "Poland", de: "Polen" },
    image: require("@/assets/images/flags/pl.png"),
  },
  fa: {
    id: "fa",
    lang: { en: "Persian", de: "Persisch" },
    country: { en: "Iran", de: "Iran" },
    image: require("@/assets/images/flags/fa.png"),
  },
  uk: {
    id: "uk",
    lang: { en: "Ukrainian", de: "Ukrainisch" },
    country: { en: "Ukraine", de: "Ukraine" },
    image: require("@/assets/images/flags/uk.png"),
  },
  ro: {
    id: "ro",
    lang: { en: "Romanian", de: "Rumänisch" },
    country: { en: "Romania", de: "Rumänien" },
    image: require("@/assets/images/flags/ro.png"),
  },
  hu: {
    id: "hu",
    lang: { en: "Hungarian", de: "Ungarisch" },
    country: { en: "Hungary", de: "Ungarn" },
    image: require("@/assets/images/flags/hu.png"),
  },
  nl: {
    id: "nl",
    lang: { en: "Dutch", de: "Niederländisch" },
    country: { en: "Netherlands", de: "Niederlande" },
    image: require("@/assets/images/flags/nl.png"),
  },
  el: {
    id: "el",
    lang: { en: "Greek", de: "Griechisch" },
    country: { en: "Greece", de: "Griechenland" },
    image: require("@/assets/images/flags/el.png"),
  },
  sv: {
    id: "sv",
    lang: { en: "Swedish", de: "Schwedisch" },
    country: { en: "Sweden", de: "Schweden" },
    image: require("@/assets/images/flags/sv.png"),
  },
  cs: {
    id: "cs",
    lang: { en: "Czech", de: "Tschechisch" },
    country: { en: "Czech Republic", de: "Tschechische Republik" },
    image: require("@/assets/images/flags/cs.png"),
  },
  da: {
    id: "da",
    lang: { en: "Danish", de: "Dänisch" },
    country: { en: "Denmark", de: "Dänemark" },
    image: require("@/assets/images/flags/da.png"),
  },
  no: {
    id: "no",
    lang: { en: "Norwegian", de: "Norwegisch" },
    country: { en: "Norway", de: "Norwegen" },
    image: require("@/assets/images/flags/no.png"),
  },
  fi: {
    id: "fi",
    lang: { en: "Finnish", de: "Finnisch" },
    country: { en: "Finland", de: "Finnland" },
    image: require("@/assets/images/flags/fi.png"),
  },
  lt: {
    id: "lt",
    lang: { en: "Lithuanian", de: "Litauisch" },
    country: { en: "Lithuania", de: "Litauen" },
    image: require("@/assets/images/flags/lt.png"),
  },

  lv: {
    id: "lv",
    lang: { en: "Latvian", de: "Lettisch" },
    country: { en: "Latvia", de: "Lettland" },
    image: require("@/assets/images/flags/lv.png"),
  },
  et: {
    id: "et",
    lang: { en: "Estonian", de: "Estnisch" },
    country: { en: "Estonia", de: "Estland" },
    image: require("@/assets/images/flags/et.png"),
  },
  sk: {
    id: "sk",
    lang: { en: "Slovak", de: "Slowakisch" },
    country: { en: "Slovakia", de: "Slowakei" },
    image: require("@/assets/images/flags/sk.png"),
  },
  sl: {
    id: "sl",
    lang: { en: "Slovenian", de: "Slowenisch" },
    country: { en: "Slovenia", de: "Slowenien" },
    image: require("@/assets/images/flags/sl.png"),
  },
  bg: {
    id: "bg",
    lang: { en: "Bulgarian", de: "Bulgarisch" },
    country: { en: "Bulgaria", de: "Bulgarien" },
    image: require("@/assets/images/flags/bg.png"),
  },
  hr: {
    id: "hr",
    lang: { en: "Croatian", de: "Kroatisch" },
    country: { en: "Croatia", de: "Kroatien" },
    image: require("@/assets/images/flags/hr.png"),
  },
  sr: {
    id: "sr",
    lang: { en: "Serbian", de: "Serbisch" },
    country: { en: "Serbia", de: "Serbien" },
    image: require("@/assets/images/flags/sr.png"),
  },
  he: {
    id: "he",
    lang: { en: "Hebrew", de: "Hebräisch" },
    country: { en: "Israel", de: "Israel" },
    image: require("@/assets/images/flags/he.png"),
  },
  ms: {
    id: "ms",
    lang: { en: "Malay", de: "Malaiisch" },
    country: { en: "Malaysia", de: "Malaysia" },
    image: require("@/assets/images/flags/ms.png"),
  },
  kn: {
    id: "kn",
    lang: { en: "Kannada", de: "Kannada" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/kn.png"),
  },
  ml: {
    id: "ml",
    lang: { en: "Malayalam", de: "Malayalam" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/ml.png"),
  },
  gu: {
    id: "gu",
    lang: { en: "Gujarati", de: "Gujarati" },
    country: { en: "India", de: "Indien" },
    image: require("@/assets/images/flags/gu.png"),
  },
  ne: {
    id: "ne",
    lang: { en: "Nepali", de: "Nepali" },
    country: { en: "Nepal", de: "Nepal" },
    image: require("@/assets/images/flags/ne.png"),
  },
  si: {
    id: "si",
    lang: { en: "Sinhala", de: "Singhalesisch" },
    country: { en: "Sri Lanka", de: "Sri Lanka" },
    image: require("@/assets/images/flags/si.png"),
  },
  lo: {
    id: "lo",
    lang: { en: "Lao", de: "Lao" },
    country: { en: "Laos", de: "Laos" },
    image: require("@/assets/images/flags/lo.png"),
  },
  km: {
    id: "km",
    lang: { en: "Khmer", de: "Khmer" },
    country: { en: "Cambodia", de: "Kambodscha" },
    image: require("@/assets/images/flags/km.png"),
  },
  am: {
    id: "am",
    lang: { en: "Amharic", de: "Amharisch" },
    country: { en: "Ethiopia", de: "Äthiopien" },
    image: require("@/assets/images/flags/am.png"),
  },
  sw: {
    id: "sw",
    lang: { en: "Swahili", de: "Swahili" },
    country: { en: "Tanzania", de: "Tansania" },
    image: require("@/assets/images/flags/sw.png"),
  },
  zu: {
    id: "zu",
    lang: { en: "Zulu", de: "Zulu" },
    country: { en: "South Africa", de: "Südafrika" },
    image: require("@/assets/images/flags/zu.png"),
  },
  xh: {
    id: "xh",
    lang: { en: "Xhosa", de: "Xhosa" },
    country: { en: "South Africa", de: "Südafrika" },
    image: require("@/assets/images/flags/xh.png"),
  },

  yo: {
    id: "yo",
    lang: { en: "Yoruba", de: "Yoruba" },
    country: { en: "Nigeria", de: "Nigeria" },
    image: require("@/assets/images/flags/yo.png"),
  },
  ig: {
    id: "ig",
    lang: { en: "Igbo", de: "Igbo" },
    country: { en: "Nigeria", de: "Nigeria" },
    image: require("@/assets/images/flags/ig.png"),
  },
  ha: {
    id: "ha",
    lang: { en: "Hausa", de: "Hausa" },
    country: { en: "Nigeria", de: "Nigeria" },
    image: require("@/assets/images/flags/ha.png"),
  },
  so: {
    id: "so",
    lang: { en: "Somali", de: "Somali" },
    country: { en: "Somalia", de: "Somalia" },
    image: require("@/assets/images/flags/so.png"),
  },
  rw: {
    id: "rw",
    lang: { en: "Kinyarwanda", de: "Kinyarwanda" },
    country: { en: "Rwanda", de: "Ruanda" },
    image: require("@/assets/images/flags/rw.png"),
  },
  ny: {
    id: "ny",
    lang: { en: "Chichewa", de: "Chichewa" },
    country: { en: "Malawi", de: "Malawi" },
    image: require("@/assets/images/flags/ny.png"),
  },
  sn: {
    id: "sn",
    lang: { en: "Shona", de: "Shona" },
    country: { en: "Zimbabwe", de: "Simbabwe" },
    image: require("@/assets/images/flags/sn.png"),
  },
  kg: {
    id: "kg",
    lang: { en: "Kongo", de: "Kongo" },
    country: {
      en: "Democratic Republic of the Congo",
      de: "Demokratische Republik Kongo",
    },
    image: require("@/assets/images/flags/lg.png"),
  },
  ln: {
    id: "ln",
    lang: { en: "Lingala", de: "Lingala" },
    country: {
      en: "Democratic Republic of the Congo",
      de: "Demokratische Republik Kongo",
    },
    image: require("@/assets/images/flags/lg.png"),
  },
  om: {
    id: "om",
    lang: { en: "Oromo", de: "Oromo" },
    country: { en: "Ethiopia", de: "Äthiopien" },
    image: require("@/assets/images/flags/om.png"),
  },
  sq: {
    id: "sq",
    lang: { en: "Albanian", de: "Albanisch" },
    country: { en: "Albania", de: "Albanien" },
    image: require("@/assets/images/flags/sq.png"),
  },
  is: {
    id: "is",
    lang: { en: "Icelandic", de: "Isländisch" },
    country: { en: "Iceland", de: "Island" },
    image: require("@/assets/images/flags/is.png"),
  },
  hy: {
    id: "hy",
    lang: { en: "Armenian", de: "Armenisch" },
    country: { en: "Armenia", de: "Armenien" },
    image: require("@/assets/images/flags/hy.png"),
  },
  kk: {
    id: "kk",
    lang: { en: "Kazakh", de: "Kasachisch" },
    country: { en: "Kazakhstan", de: "Kasachstan" },
    image: require("@/assets/images/flags/kk.png"),
  },
  uz: {
    id: "uz",
    lang: { en: "Uzbek", de: "Usbekisch" },
    country: { en: "Uzbekistan", de: "Usbekistan" },
    image: require("@/assets/images/flags/uz.png"),
  },
};

export default languages;
