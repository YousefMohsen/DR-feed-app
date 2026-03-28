export const NEWS_FEEDS = {
  latest: {
    label: "Seneste nyt",
    url: "https://www.dr.dk/nyheder/service/feeds/senestenyt",
  },
  indland: {
    label: "Indland",
    url: "https://www.dr.dk/nyheder/service/feeds/indland",
  },
  udland: {
    label: "Udland",
    url: "https://www.dr.dk/nyheder/service/feeds/udland",
  },
  penge: {
    label: "Penge",
    url: "https://www.dr.dk/nyheder/service/feeds/penge",
  },
  politik: {
    label: "Politik",
    url: "https://www.dr.dk/nyheder/service/feeds/politik",
  },
  sporten: {
    label: "Sporten",
    url: "https://www.dr.dk/nyheder/service/feeds/sporten",
  },
  latestSport: {
    label: "Seneste sport",
    url: "https://www.dr.dk/nyheder/service/feeds/senestesport",
  },
  viden: {
    label: "Viden",
    url: "https://www.dr.dk/nyheder/service/feeds/viden",
  },
  kultur: {
    label: "Kultur",
    url: "https://www.dr.dk/nyheder/service/feeds/kultur",
  },
  musik: {
    label: "Musik",
    url: "https://www.dr.dk/nyheder/service/feeds/musik",
  },
  vejret: {
    label: "Vejret",
    url: "https://www.dr.dk/nyheder/service/feeds/vejret",
  },
  regionale: {
    label: "Regionale",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale",
  },
} as const;

export const REGIONALE_FEEDS = {
  kbh: {
    label: "DR Hovedstadsområdet",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/kbh",
  },
  bornholm: {
    label: "DR Bornholm",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/bornholm",
  },
  syd: {
    label: "DR Syd og Sønderjylland",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/syd",
  },
  fyn: {
    label: "DR Fyn",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/fyn",
  },
  vest: {
    label: "DR Midt- og Vestjylland",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/vest",
  },
  nord: {
    label: "DR Nordjylland",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/nord",
  },
  trekanten: {
    label: "DR Trekantområdet",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/trekanten",
  },
  sjaelland: {
    label: "DR Sjælland",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/sjaelland",
  },
  oestjylland: {
    label: "DR Østjylland",
    url: "https://www.dr.dk/nyheder/service/feeds/regionale/oestjylland",
  },
};

export type NewsFeedKey = keyof typeof NEWS_FEEDS;
