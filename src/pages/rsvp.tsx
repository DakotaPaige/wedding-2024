import Intro from '@/components/layout/Intro';
import Form from '@/components/form/Form';

export default function Page() {
  return (
    <main>
      <Intro
        title="RSVP"
        text="We're so excited to see you! Please RSVP below"
      />
      <Form />
    </main>
  );
}
