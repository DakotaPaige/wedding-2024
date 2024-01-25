import styled from 'styled-components';
import dynamic from 'next/dynamic';

import Intro from '@/components/layout/Intro';
import TitleText from '@/components/layout/TitleText';
import FullImage from '@/components/layout/FullImage';
import Section from '@/components/layout/Section';
import GoogleMap from '@/components/travel/GoogleMap';
import Favourites from '@/components/travel/Favourites';

import vw from '@/styles/utils';

// Hotels contains an iframe which was causing issues
const HotelsNoSSR = dynamic(() => import('@/components/travel/Hotels'), {
  ssr: false,
});

export default function Page() {
  return (
    <main>
      <Intro
        title="Travel"
        text="We're excited to welcome you in beautiful BC!"
      />
      <TitleText
        title="Grouse Mountain, North Vancouver, BC"
        text={
          <>
            We are delighted to invite you to our wedding at the stunning Grouse
            Mountain, the peak of Vancouver. Our love for the mountains has been
            a significant part of our journey together, and we're excited to
            celebrate this special occasion in the midst of such scenic beauty.
            It means a lot to us to share this moment with you in a place that
            holds great significance in our lives.
            <br />
            <br />
            For your convenience, we've put together a location map featuring
            essential sites, including hotel and flight booking options.
            Additionally, we've curated a selection of our favorite local spots
            to help you make the most of your visit. Whether you're seeking
            adventure or relaxation, we hope you'll find delight in the charms
            of Vancouver just as we do!
          </>
        }
      />
      <Section lessTopPadding>
        <Wrapper>
          <GoogleMap />
          <HotelsNoSSR />
        </Wrapper>
      </Section>
      <TitleText
        title="Our Favourite Spots"
        text="We've curated a list of some of our favourite spots around the city. If you have extra time while you're here, check some of them out!"
        noLine
      />
      <Favourites />
      <FullImage
        img={{
          src: require('@/assets/images/grouse-mountain.jpg'),
          alt: 'Grouse Mountain, North Vancouver',
        }}
        caption="On the chairlift looking onto Vancouver at Grouse Mountain, BC."
      />
    </main>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  ${vw('flex-direction', 'column', 'column', 'row')}
`;
