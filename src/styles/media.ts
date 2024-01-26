import appConfig from '@/config/app.conf';

const media = {
  tablet: `(min-width: ${appConfig.mediaQuery.tablet}px)`,
  desktop: `(min-width: ${appConfig.mediaQuery.desktop}px)`,
};

export default media;
