import createCache from "@emotion/cache";

export const createEmotionCache = () => {
  return createCache({ key: "lynncss" });
};

// export const myCache = createCache({
//     key: 'my-prefix-key',
//     stylisPlugins: [
//       /* your plugins here */
//     ]
//   })
