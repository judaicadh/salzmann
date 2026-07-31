// Front-page hero images, served via the Penn Digital Collections IIIF Image API (v3, level2).
// Each entry: the Digital Collections item id (for the link) + its IIIF image-service base.
// To add/remove a hero image, drop in its item id + service id from the item's IIIF manifest
// (manifest → items[0] → items[0] → items[0] → body.service[0].id).

export interface HeroImage {
  itemId: string; // digitalcollections.library.upenn.edu/items/{itemId}
  service: string; // IIIF Image API base
  label: string; // raw manifest label
}

export const heroImages: HeroImage[] = [
  {
    itemId: 'eb2e7042-7553-4129-ba5a-cd8d19edadb1',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/725a27e4-18c5-490f-8feb-877a05cf4594',
    label: '[Rittenhouse Square; 1992; photograph 0043]',
  },
  {
    itemId: 'd82a2be9-308b-4d58-97f6-0dfc914925ee',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/517b2abd-6518-45eb-aafd-ce3e3aa4e09c',
    label: '[Tlaxcalan Sketches; 1969-1971; photograph 0035]',
  },
  {
    itemId: '1e7486a7-b636-4625-9d7d-97a6b3b1d4c3',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/5987d825-f94e-49f1-b2d0-0b3e6287cbe7',
    label: '[Souvenirs of a Recent Time; 1974-1976; photograph 0011]',
  },
  {
    itemId: '791622e0-eb88-464d-bad1-fe4aab2129e4',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/bf7b704d-f9aa-4c79-a580-1247b5bbed88',
    label: '[The City 2; 1971; photograph 0092]',
  },
  {
    itemId: '3b73681f-8f98-4e46-8440-a7a4d17e8f85',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/fe8d1e3d-6115-4867-8afe-fdb5c0ee7ee4',
    label: '[Miorița; 1981-1982; photograph 0005]',
  },
  {
    itemId: '03a06814-fd1b-4c3c-9604-fe2abced527c',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/0f66bd22-9454-452e-b91c-082ccfdea0e6',
    label: '[Last Jews of Rădăuți; 1974; photograph 0001]',
  },
  {
    itemId: '1e518181-6e64-44bb-9889-cee36a65fb31',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/d99ada98-b20f-4c70-9d13-d51c2df43ba5',
    label: '[Souvenirs of a Recent Time; 1974-1976; photograph 0031]',
  },
  {
    itemId: 'b44fbab2-bf66-433b-84c6-6ef386a24f1e',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/259c927a-1d63-48e0-9738-26c0dc13868d',
    label: '[The City 2; 1971; photograph 0088]',
  },
  {
    itemId: '9e903349-8614-4470-9cf6-d046be617258',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/498f29a9-dedc-4980-8a48-d519b768c0d8',
    label: '[Echele Ganas; 2007; photograph 0246]',
  },
  {
    itemId: '1fd54e77-1e8b-4491-aca5-a8e687885787',
    service: 'https://iiif-images.library.upenn.edu/iiif/3/0292101d-1b80-4668-91d1-a9b1ca38b5a7',
    label: '[Turkey; photograph 0837]',
  },
];

// A centered square crop at the given pixel size (IIIF `square` region, level2).
export const iiifSquare = (service: string, size: number) =>
  `${service}/square/${size},${size}/0/default.jpg`;

export const itemUrl = (itemId: string) =>
  `https://digitalcollections.library.upenn.edu/items/${itemId}`;

// "[Rittenhouse Square; 1992; photograph 0043]" -> "Rittenhouse Square, 1992, photograph 0043"
export const cleanLabel = (label: string) => label.replace(/^\[|\]$/g, '').replace(/;\s*/g, ', ');
