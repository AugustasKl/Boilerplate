import { useMediaQuery } from "react-responsive";


export type Colors = keyof typeof colors;

export type Paddings = keyof typeof padding;


const space = {
		s0: '0rem',
		s4: '0.25rem',
		s8: '0.5rem',
		s16: '1rem',
		s24: '1.5rem',
		s32: '2rem',
		s40: '2.5rem',
		s48: '3rem',
		s64: '4rem',
		s80: '5rem',
		s96: '6rem',
    s128:'8rem',
		s160: '10rem',
    minuss160:'-10rem'
};

const colors = {
  white: "#ffffff",
  black: "#000000",
  heroBackground: "#E7FAFE",
  subscribeBackground: "#E7F9FD",
  mainBackground: "#E5E5E5",
  radioColor: "#ccc",
};
const radii = {
  r0: "0",
  r10: "0.625rem",
  r20: "1.25rem",
  r30: "1.875rem",
  r40: "2.5rem",
  r50: "3.125rem",
};

const padding = {
  padding: "padding",
  paddingTop: "padding-top",
  paddingLeft: "padding-left",
  paddingRight: "padding-right",
  paddingBottom: "padding-bottom",
};

export const theme = {
  colors,
  fontFamily: { primary: "Red Hat Display" },
  fontSizes: {
    fs20: "1.25rem",
    fs18: "1.125rem",
    fs16: "1rem",
  },
  fontWeights: {
    fw900: 900,
    fw700: 700,
    fw600: 600,
    fw500: 500,
    fw400: 400,
  },
  // breakpoints: ['23.75rem', '30rem', '47.9375rem', '64.0625rem', '90rem', '120rem'] as unknown as Breakpoints,
  breakpoints: ["30rem", "47.9375rem", "90rem"] as unknown as Breakpoints,
  typography: {
    h1: {
      color: colors.black,
      fontWeight: 500,
      fonstSize: "5rem",
      lineHeight: "6.5rem",
      fontSizeMobile: "4rem",
      lineHeightMobile: "5.25rem",
    },
    h2: {
      color: colors.black,
      fontWeight: 500,
      fonstSize: "4.5rem",
      lineHeight: "5.875rem",
      fontSizeMobile: "3.5rem",
      lineHeightMobile: "4.5625rem",
    },
    h3: {
      color: colors.black,
      fontWeight: 600,
      fonstSize: "3.5rem",
      lineHeight: "4.5625rem",
      fontSizeMobile: "2.5rem",
      lineHeightMobile: "3.25rem",
    },
    h4: {
      color: colors.black,
      fontWeight: 600,
      fonstSize: "3rem",
      lineHeight: "3.9375rem",
      fontSizeMobile: "2rem",
      lineHeightMobile: "2.625rem",
    },
    h5: {
      color: colors.black,
      fontWeight: 600,
      fonstSize: "2.5rem",
      lineHeight: "3.25rem",
      fontSizeMobile: "1.625rem",
      lineHeightMobile: "2.125rem",
    },
    h6: {
      color: colors.black,
      fontWeight: 600,
      fonstSize: "2rem",
      lineHeight: "2.625rem",
      fontSizeMobile: "1.5rem",
      lineHeightMobile: "2rem",
    },
  },

  zIndices: {
    base: 0,
    upperElement: 1,
    modal: 10,
    loader: 11,
  },
  radii,
  padding,
  space,

  borders: {
    border: `1 px solid ${colors ? colors.black : colors}`,
    borderTop: "border-top",
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.mobile = Breakpoints[0];
Breakpoints.tablet = Breakpoints[1];
// Breakpoints.ltablet = Breakpoints[2];
Breakpoints.desktop = Breakpoints[2];
// Breakpoints.mdesktop = Breakpoints[4];
// Breakpoints.ldesktop = Breakpoints[5];

type Breakpoints<T = string> = {
  _: T;
  tablet: T;
  // ltablet: T;
  desktop: T;
  // mdesktop:T;
  // ldesktop:T;
};

export const mobile = `(max-width:${Breakpoints.mobile})`;
export const tablet = `(max-width:${Breakpoints.tablet})`;
// export const ltablet=`(max-width:${Breakpoints.ltablet})`
export const desktop = `(max-width:${Breakpoints.desktop})`;
// export const mdesktop=`(max-width:${Breakpoints.mdesktop})`
// export const ldesktop=`(max-width:${Breakpoints.ldesktop})`

export const useQuery = () => ({
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
  // islTablet:useMediaQuery({query:ltablet}),
  isDesktop: useMediaQuery({ query: desktop }),
});
