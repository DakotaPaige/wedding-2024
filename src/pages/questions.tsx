import Intro from '@/components/layout/Intro';
import Section from '@/components/layout/Section';
import List from '@/components/questions/List';

export default function Page() {
  return (
    <main>
      <Intro
        title="Q & A"
        text="Any questions? See the list below or contact us if you have more! "
      />
      <Section>
        <List />
      </Section>
    </main>
  );
}
