// import "../../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";

import { createEmotionCache } from "../utils/create_emotion_cache";
import { theme } from "../theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const router = useRouter();
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const usedefaultSettings = router.pathname.startsWith("/test/");
  const getLayout = Component.getLayout ?? ((page) => page);

  if (usedefaultSettings) {
    return <Component {...pageProps} />;
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>lynn practices</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
