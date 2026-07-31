// Shared site metadata + reusable schema.org nodes for JSON-LD structured data.
// The @id values are document fragments (e.g. "#laurence"); because each page emits
// a self-contained @graph, intra-document references resolve correctly per page.

export const siteMeta = {
  name: 'Laurence Salzmann and Ayşe Gürsan-Salzmann Collection',
  shortName: 'Salzmann Collection',
  description:
    'The Laurence Salzmann and Ayşe Gürsan-Salzmann Collection at the University of Pennsylvania ' +
    'Libraries, Kislak Center — five decades of documentary photography of little-known and ' +
    'vanishing communities across four continents.',
};

// University of Pennsylvania Libraries / Kislak Center
export const orgNode = {
  '@type': 'Organization',
  '@id': '#org',
  name: 'University of Pennsylvania Libraries',
  url: 'https://www.library.upenn.edu/',
  department: {
    '@type': 'Organization',
    name: 'Kislak Center for Special Collections, Rare Books and Manuscripts',
  },
  parentOrganization: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Pennsylvania',
    url: 'https://www.upenn.edu/',
  },
};

export const laurenceNode = {
  '@type': 'Person',
  '@id': '#laurence',
  name: 'Laurence Salzmann',
  jobTitle: 'Photographer and filmmaker',
};

export const ayseNode = {
  '@type': 'Person',
  '@id': '#ayse',
  name: 'Ayşe Gürsan-Salzmann',
};

// Normalize a printed year range ("1965–1967", "1974–76", "2005") to an
// ISO 8601 interval for schema.org temporalCoverage ("1965/1967", "1976", …).
export function temporalCoverage(years?: string): string | undefined {
  if (!years) return undefined;
  const parts = years.split(/[–-]/).map((s) => s.trim());
  if (parts.length < 2) return parts[0] || undefined;
  let [start, end] = parts;
  if (end.length === 2 && start.length === 4) end = start.slice(0, 2) + end;
  return `${start}/${end}`;
}
