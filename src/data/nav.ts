// Single source of truth for the primary navigation.
// Mirrors the original site, with one addition: the Map.

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Laurence Salzmann',
    href: '/laurencesalzmann',
    children: [
      { label: 'Introduction', href: '/biography' },
      { label: 'Life & Works 1944–1965', href: '/bio4465' },
      { label: 'Life & Works 1966–1979', href: '/bio6679' },
      { label: 'Life & Works 1980–2020', href: '/bio8020' },
      { label: 'Projects', href: '/projects' },
      { label: 'Photographic Awards and Honors', href: '/honors' },
      { label: 'Selected Exhibits', href: '/selected-exhibits' },
      { label: 'Publications and Films', href: '/publications' },
    ],
  },
  {
    label: 'Penn Collection',
    href: '/penncoll',
    children: [
      { label: 'Introduction', href: '/penncollintro' },
      { label: 'Online Photos 1967–1976', href: '/photos-1967-1976' },
      { label: 'Online Photos 1976–1991', href: '/photos-1976-1991' },
      { label: 'Online Photos 1995–2009', href: '/photos-1995-2009' },
    ],
  },
  { label: 'Map', href: '/map' },
  {
    label: 'About',
    href: '/aboutthecollection',
    children: [
      { label: 'The Website and the Collection', href: '/website' },
      { label: 'Acknowledgments', href: '/acknowledgments' },
      { label: 'Using the Images', href: '/fairuse' },
      { label: 'Processing the Collection', href: '/processing' },
      { label: 'External Links', href: '/links' },
    ],
  }
];
