export interface NavType {
  to: string;
  text: string;
}
[];

const nav = [
  {
    to: '/',
    text: 'Welcome!',
  },
  {
    to: '/questions',
    text: 'Q & A',
  },
  {
    to: '/travel',
    text: 'Travel & Location',
  },
  {
    to: '/rsvp',
    text: 'RSVP',
  },
  {
    to: '/contact',
    text: 'Contact Us',
  },
  {
    to: '/registry',
    text: 'Registry',
  },
];

export default nav;
