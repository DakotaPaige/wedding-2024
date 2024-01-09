import Link from 'next/link';

export type QuestionType = { question: string; answer: string | JSX.Element };

const questions: QuestionType[] = [
  {
    question: 'Where is the wedding taking place?',
    answer:
      'Grouse Mountain in North Vancouver, British Columbia. Come back soon for more info!',
  },
  {
    question: 'How and when do I RSVP?',
    answer: (
      <>
        RSVP is open, please go to the <Link href="/rsvp">RSVP</Link> page. You
        should have received the access code to your email, please contact us if
        there are any errors or you have more questions.
      </>
    ),
  },
  {
    question: 'What is the schedule?',
    answer:
      'We have not finalized the schedule yet, but we are aiming to start the ceremony at 3:00pm. We will send out more information closer to the day regarding the schedule.',
  },
  {
    question: 'Is there a dress code?',
    answer:
      'The dress code is smart casual. Please keep in mind that the ceremony is taking place outdoors, and there is lots to do outside around the mountain.',
  },
  {
    question: 'Will the ceremony be taking place indoors or outdoors?',
    answer: 'The ceremony will be outdoors, weather permitting.',
  },
  {
    question: 'Where can I stay?',
    answer:
      'Vancouver is a world class destination with many places to stay. Stay tuned to our travel tab to learn more soon.',
  },
  {
    question: 'What will the weather be like?',
    answer: `It's summer in Vancouver so fingers crossed for sun.`,
  },
  {
    question: 'Where can I park?',
    answer:
      'There will be parking available at the base of Grouse Mountain. Please enquire with guest services to pick up a parking pass on arrival.',
  },
  {
    question: 'How can I let you know about my dietary requirements?',
    answer: 'We will include an area to note dietary requirements on the RSVP.',
  },
  {
    question: 'Are children invited?',
    answer:
      'Please refer to the RSVP, and contact us directly if you need more information.',
  },
  {
    question:
      'Are there any local places you’d recommend I visit while I’m in town?',
    answer:
      'Vancouver is a beautiful city to visit, with lots to see! Check out the travel page for some of our favourite recommendations.',
  },
  {
    question: 'Is there a wedding hashtag?',
    answer: 'Stay tuned!',
  },
  {
    question: `I still have questions! What's the best way to get in touch?`,
    answer: (
      <>
        Check out the contact page on the website, or send us an email at{' '}
        <a href="mailto:simeone.mauza@gmail.com">simeone.mauza@gmail.com</a>
      </>
    ),
  },
];

export default questions;
