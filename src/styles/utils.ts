import appConfig from '../config/app.conf';
const { stage } = appConfig;

const vw = (
  property: string,
  wMobile: string | number,
  wTablet?: string | number,
  wDesktop?: string | number
) => {
  if (typeof wTablet === 'undefined') {
    wTablet = wMobile;
  }

  if (typeof wDesktop === 'undefined') {
    wDesktop = wTablet;
  }

  return `${property}: ${
    typeof wMobile === 'string' ? wMobile : vwMobile(wMobile)
  };
    @media (min-width: ${appConfig.mediaQuery.tablet}px) {
      ${property}: ${typeof wTablet === 'string' ? wTablet : vwTablet(wTablet)};
    }
    @media (min-width: ${appConfig.mediaQuery.desktop}px) {
      ${property}: ${
    typeof wDesktop === 'string' ? wDesktop : vwDesktop(wDesktop)
  };
    }
  `;
};

export default vw;

export const vwMobile = (width: number) => {
  return `${(width / stage.mobile) * 100}vw`;
};

export const vwTablet = (width: number) => {
  return `${(width / stage.tablet) * 100}vw`;
};

export const vwDesktop = (width: number) => {
  return `${(width / stage.desktop) * 100}vw`;
};
