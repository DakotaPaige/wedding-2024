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
    text: 'Travel',
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
export interface NavType {
  to: string;
  text: string;
}
[];
