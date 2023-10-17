import Intro from '@/components/layout/Intro';

export default function Page() {
  return (
    <main>
      <Intro
        title="Contact"
        text={
          <>
            Email us at{' '}
            <a href="mailto:simeone.mauza@gmail.com">simeone.mauza@gmail.com</a>{' '}
            if you have any questions.
          </>
        }
      />
    </main>
  );
}
