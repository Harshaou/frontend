import '../styles/global.css';

import type { MantineThemeOverride } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

const myTheme: MantineThemeOverride = {
  colorScheme: 'light',
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
    <Component {...pageProps} />
  </MantineProvider>
);

export default MyApp;
