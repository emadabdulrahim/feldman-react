import { css } from 'styled-components'
import { rgba } from 'polished'
import media from 'styled-media-query'

export const colors = {
  blue: {
    lightest: '#F2F6FB',
    light: '#A3C9FF',
    base: '#3D61CE',
    dark: '#102E88',
    darkest: '#0F1628',
  },
  red: {
    lightest: '#FAF2F2',
    light: '#FB9797',
    base: '#DA2326',
    dark: '#9A0B0D',
    darkest: '#2C1112',
  },
  gray: {
    g100: '#FAF2F2',
    g200: '#E9ECF0',
    g300: '#D8DDE3',
    g400: '#BCC4CC',
    g500: '#919AA4',
    g600: '#748088',
    g700: '#4C555A',
    g800: '#262A2F',
  },
  white: '#fff',
  black: '#000',
}

const fontSizes = {
  f110: '3.375rem', // 54px
  f100: '3rem', //     48px
  f90: '2.625rem', //  42px
  f80: '2.25rem', //   36px
  f70: '2rem', //      32px
  f60: '1.75rem', //   28px
  f50: '1.5rem', //    24px
  f40: '1.25rem', //   20px
  f30: '1.125rem', //  18px
  f20: '1rem', //      16px
  f10: '0.875rem', //  14px
  f5: '0.75rem', //    12px
  f0: '0.5rem', //     10px
}

const fontWeight = {
  light: 300,
  normal: 400,
  semi: 600,
  bold: 700,
}

const space = {
  s2: '2px',
  s4: '4px',
  s8: '8px',
  s12: '12px',
  s16: '16px',
  s20: '20px',
  s24: '24px',
  s32: '32px',
  s40: '40px',
  s48: '48px',
  s56: '56px',
  s64: '64px',
  s80: '80px',
}

const layout = {
  l16: '16px',
  l24: '24px',
  l32: '32px',
  l48: '48px',
  l64: '64px',
  l96: '96px',
  l160: '160px',
}

// {
//   huge: '1440px',
//   large: '1170px',
//   medium: '768px',
//   small: '450px',
// }

const elevation = {
  '0': 'none',
  '1': `0 0px 2px 0 ${rgba(colors.blue.darkest, 0.1)};`,
  '2': `0 2px 8px 0 ${rgba(colors.blue.darkest, 0.1)};`,
  '3': `0 6px 12px 0 ${rgba(colors.blue.darkest, 0.1)};`,
  '4': `0 8px 16px 0 ${rgba(colors.blue.darkest, 0.1)};`,
}

export default css`
  --text-darkest: ${colors.blue.darkest};
  --text-dark: ${colors.gray.g700};
  --text-medium: ${colors.gray.g600};
  --text-semi: ${colors.gray.g500};
  --text-light: ${colors.gray.g400};
  --text-lightest: ${colors.blue.lightest};

  --color-main: ${colors.blue.base};
  --color-accent: ${colors.red.base};

  --bgColor-main-lightest: ${colors.blue.lightest};
  --bgColor-main-light: ${colors.gray.g200};
  --bgColor-main-medium: ${colors.gray.g300};
  --bgColor-main-dark: ${colors.gray.g800};
  --bgColor-main-darkest: ${colors.blue.darkest};

  --bgColor-accent-lightest: ${colors.red.lightest};
  --bgColor-accent-light: ${colors.red.light};
  --bgColor-accent-medium: ${colors.red.base};
  --bgColor-accent-dark: ${colors.red.dark};
  --bgColor-accent-darkest: ${colors.red.darkest};

  --white: ${colors.white};
  --black: ${colors.black};

  --font-hero: ${fontSizes.f110};
  --font-super: ${fontSizes.f100};
  --font-big: ${fontSizes.f80};
  --font-heading: ${fontSizes.f60};
  --font-title: ${fontSizes.f50};
  --font-subtitle: ${fontSizes.f40};
  --font-paragraph: ${fontSizes.f30};
  --font-default: ${fontSizes.f20};
  --font-small: ${fontSizes.f10};
  --font-tiny: ${fontSizes.f5};

  --max-width: 1080px;

  --space-2: ${space.s2};
  --space-4: ${space.s4};
  --space-8: ${space.s8};
  --space-12: ${space.s12};
  --space-16: ${space.s16};
  --space-20: ${space.s20};
  --space-24: ${space.s24};
  --space-32: ${space.s32};
  --space-40: ${space.s40};
  --space-48: ${space.s48};
  --space-56: ${space.s56};
  --space-64: ${space.s64};
  --space-80: ${space.s80};

  --layout-16: ${layout.l16};
  --layout-24: ${layout.l24};
  --layout-32: ${layout.l32};
  --layout-48: ${layout.l48};
  --layout-64: ${layout.l64};
  --layout-96: ${layout.l96};
  --layout-160: ${layout.l160};

  --gutter: ${space.s16};

  ${media.lessThan('large')`
    --font-hero: ${fontSizes.f100};
    --font-super: ${fontSizes.f90};
    --font-big: ${fontSizes.f70};
    --font-heading: ${fontSizes.f50};
    --font-title: ${fontSizes.f40};
    --font-subtitle: ${fontSizes.f30};
    --font-paragraph: ${fontSizes.f20};
    --font-default: ${fontSizes.f20};
    --font-small: ${fontSizes.f5};
    --font-tiny: ${fontSizes.f5};
  `};

  ${media.lessThan('medium')`
    --font-hero: ${fontSizes.f70};
    --font-super: ${fontSizes.f80};
    --font-big: ${fontSizes.f60};
    --font-heading: ${fontSizes.f40};
    --font-title: ${fontSizes.f30};
    --font-subtitle: ${fontSizes.f20};
    --font-paragraph: ${fontSizes.f10};
    --font-default: ${fontSizes.f10};
    --font-small: ${fontSizes.f5};
    --font-tiny: ${fontSizes.f5};
  `};

  ${media.lessThan('small')`
    --font-hero: ${fontSizes.f60};
    --font-super: ${fontSizes.f50};
    --font-big: ${fontSizes.f50};
    --font-heading: ${fontSizes.f30};
    --font-title: ${fontSizes.f20};
    --font-subtitle: ${fontSizes.f10};
    --font-paragraph: ${fontSizes.f5};
    --font-default: ${fontSizes.f5};
    --font-small: ${fontSizes.f5};
    --font-tiny: ${fontSizes.f5};
  `};

  --serif: 'garamond-premier-pro', serif;
  --sans: 'gill-sans-nova', -apple-system, BlinkMacSystemFont, San Francisco,
    Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;

  --radius: 3px;
  --spring: cubic-bezier(0.19, 1, 0.22, 1);
  --spoof: cubic-bezier(0.77, 0, 0.175, 1) 0.05s;
  --trans-short: 150ms;
  --trans-default: 400ms;

  --shadow-s1: ${elevation['1']};
  --shadow-s2: ${elevation['2']};
  --shadow-s3: ${elevation['3']};
  --shadow-s4: ${elevation['4']};
`
