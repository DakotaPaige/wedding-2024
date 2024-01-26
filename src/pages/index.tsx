import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import TitleText from '@/components/layout/TitleText';

export default function Page() {
  return (
    <main>
      <Hero />
      <Intro />
      <TitleText
        title={
          <>
            Welcome to
            <br className="mobile-only" /> our wedding website!
          </>
        }
        text={
          <>
            We are getting married!
            <br />
            <br />
            We are on cloud nine and we want to share our excitement with you.
            <br />
            <br />
            In anticipation of the big day, we have created this wedding website
            to keep you up-to-date on the details of our wedding and to share
            information about ourselves with you.
            <br />
            <br />
            Please RSVP in the attendance section as soon as possible, so we
            know whether to expect you at our wedding.
            <br />
            <br />
            Enjoy the site and see you soon!
          </>
        }
      />
    </main>
  );
}
