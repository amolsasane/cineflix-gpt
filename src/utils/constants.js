export const bgImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // eslint-disable-next-line no-undef
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const poster_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
  { identifier: "sanskrit", name: "Sanskrit" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "german", name: "German" },
  { identifier: "french", name: "French" },
  { identifier: "chinese", name: "Chinese" },
  { identifier: "japanese", name: "Japanese" },
];
