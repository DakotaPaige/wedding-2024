import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { animateScroll } from 'react-scroll';
import { useReCaptcha } from 'next-recaptcha-v3';

import vw from '@/styles/utils';
import Input from './Input';
import Radio from './Radio';
import Access from './sections/Access';
import Success from './sections/Success';
import EmailError from './sections/EmailError';
import UserForm from './sections/UserForm';
import Button from '../Button';

import LoadingGif from 'src/assets/images/bean-eater-1s.gif';
import { User } from './form.types';
import config from '@/config/app.conf';
const { rsvpActivation } = config;

const Form = () => {
  const [activationCode, setActivationCode] = useState<null | boolean>(null);
  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const [hasFormSubmitted, setHasFormSubmitted] = useState(false);
  const [hasAlreadyRSVP, setHasAlreadyRSVP] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState<null | User[]>(null);
  const [loading, setLoading] = useState(false);
  const [plusOne, setPlusOne] = useState(false);
  const [hasKids, setHasKids] = useState(false);
  const [isComing, setIsComing] = useState<boolean | null>(null);

  const $form = useRef<HTMLFormElement>(null);

  const { executeRecaptcha } = useReCaptcha();

  const handleCheckEmail = async (e: any) => {
    e.preventDefault();

    const token = await executeRecaptcha('email_submit');

    if ($form.current) {
      setError(false);
      setLoading(true);
      const data = new FormData($form.current);
      data.append('g-recaptcha-response', token);

      fetch('https://hook.us1.make.com/rhamvf9d1dqlgqglg6u4g74ebwqtntqd', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === false) {
            setLoading(false);
            setError(true);
          } else if (res.user === null) {
            setHasAlreadyRSVP(false);
            setUser(null);
            setLoading(false);
            setHasSubmittedEmail(true);
          } else {
            setHasAlreadyRSVP(false);
            setUser(res);
            setLoading(false);
            setHasSubmittedEmail(true);
            if (res[0]?.RSVP !== null) {
              setHasAlreadyRSVP(true);
            }
          }
        });
    }
  };

  const handleUpdateData = async (e: any) => {
    e.preventDefault();

    const token = await executeRecaptcha('form_submit');

    if ($form.current) {
      setError(false);
      setLoading(true);
      const data = new FormData($form.current);
      data.delete('g-recaptcha-response');

      // Netlify submission
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      }).then((res) => res);

      // recaptcha was causing the netlify submission to fail
      data.append('g-recaptcha-response', token);

      // Google sheet submission
      fetch('https://hook.us1.make.com/2lwub4k9xwwgj9qm1ra2yd5hka83mnus', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          if (res.status.toLowerCase() === 'success') {
            setHasFormSubmitted(true);
            animateScroll.scrollTo(
              $form.current ? $form.current.offsetTop - 200 : 500,
              { smooth: true }
            );
          } else {
            setError(true);
          }
        });
    }
  };

  const handleActivationCode = (val: string) => {
    if (val.toLowerCase() === rsvpActivation) {
      setActivationCode(true);
    } else {
      setActivationCode(false);
    }
  };

  const handlePlusOne = (val: string) => {
    if (val === 'Yes') {
      setPlusOne(true);
    } else {
      setPlusOne(false);
    }
  };

  const handleChildren = (val: string) => {
    if (val === 'Yes') {
      setHasKids(true);
    } else {
      setHasKids(false);
    }
  };

  const handleIsComing = (val: string) => {
    if (val === 'Yes') {
      setIsComing(true);
    } else {
      setIsComing(false);
    }
  };

  console.log(user);

  return (
    <>
      {/* Hacky way to hide the recaptcha badge */}
      <style jsx global>
        {`
          .grecaptcha-badge {
            opacity: 1;
            pointer-events: all;
          }
        `}
      </style>
      <Access
        handleActivation={handleActivationCode}
        active={activationCode === null || activationCode === false}
      />
      <Root
        onSubmit={
          hasSubmittedEmail && user !== null && user!.length > 0
            ? (e) => handleUpdateData(e)
            : (e) => handleCheckEmail(e)
        }
        ref={$form}
        netlify
        data-netlify="true"
        name="rsvp-form"
        style={{
          display:
            activationCode === null || activationCode === false
              ? 'none'
              : 'flex',
        }}
      >
        <input type="hidden" name="form-name" value="rsvp-form" />
        {hasFormSubmitted ? (
          <Success />
        ) : (
          <>
            <Input
              name="email"
              id="email"
              label="Please enter your email"
              type="email"
              disabled={hasSubmittedEmail && user !== null && user!.length > 0}
            />
            {/* Email is submitted but doesn't exist */}
            {hasSubmittedEmail && user?.length === 0 && <EmailError />}
            <div
              style={{
                display: user !== null && user.length >= 1 ? 'block' : 'none',
              }}
            >
              <Container>
                {user !== null && user[0] && (
                  <h3 className="black">
                    Welcome {user[0].firstName}{' '}
                    {user[1]?.firstName && `and ${user[1].firstName}`}!
                  </h3>
                )}
                {hasAlreadyRSVP && (
                  <Wrapper className="black">
                    It looks like you have already RSVP'd for our wedding. If
                    this is a mistake, or you would like to update the
                    information you already sent, please continue to the form.
                    Otherwise please contact us for more information.
                  </Wrapper>
                )}
                <p className="black">
                  Please read through and answer the following questions, and
                  contact us if you have any questions!
                </p>
              </Container>
              <Radio
                name="rsvp"
                id="rsvp"
                required={user !== null && user.length >= 1}
                label="Are you coming to the wedding?"
                options={[
                  { value: 'Yes', label: `Yes, I can't wait!` },
                  {
                    value: 'No',
                    label: `No, but we'll celebrate in spirit!`,
                  },
                ]}
                handleChange={handleIsComing}
              />
              <UserForm
                user={user}
                plusOne={plusOne}
                handleChildren={handleChildren}
                handlePlusOne={handlePlusOne}
                hasKids={hasKids}
                active={isComing !== null && isComing}
                isComing={isComing}
              />
              <div
                style={{
                  display:
                    isComing !== null && isComing === false ? 'block' : 'none',
                }}
              >
                <p>We're going to miss you!</p>
              </div>
            </div>
            {loading && (
              <Loading
                src={LoadingGif}
                alt="Loading"
                width="200"
                height="200"
              />
            )}
            {error && (
              <p>
                Sorry, there seems to be an error with the submission. Please
                refresh and try again, or email us directly at{' '}
                <a href="mailto:simeone.mauza@gmail.com">
                  simeone.mauza@gmail.com
                </a>
              </p>
            )}
            <Button type="submit" disabled={loading} text="Submit" />
            <Required className="small black">* Required field</Required>
          </>
        )}
      </Root>
    </>
  );
};

type RootProps = {
  netlify: boolean;
};

const Root = styled.form<RootProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${vw('padding-top', 40, 80, 160)}
  ${vw('padding-left', 20, 60, 400)}
  ${vw('padding-right', 20, 60, 400)}
  button {
    ${vw('margin-top', 20)}
  }
`;

const Container = styled.div`
  ${vw('margin-bottom', 20, 40)}
  ${vw('margin-top', 20, 0, 40)}
`;

const Wrapper = styled.p`
  ${vw('margin-top', 20)}
  ${vw('margin-bottom', 20)}
`;

const Required = styled.p`
  ${vw('margin-top', 20)}
`;

const Loading = styled(Image)`
  height: auto;
  transition: ${({ theme }) => theme.transition};
  ${vw('width', 50, 80)}
`;

export default Form;
