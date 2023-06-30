import {extendTheme} from 'native-base';

const themeColors = {
  orange: {
    dark: '#FEAF00',
    light: '#F8D442',
  },
};

const theme = extendTheme({
  colors: {
    orange: themeColors.orange,
  },
  space: {
    xxs: 2,
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    xxxl: 48,
  },
  components: {
    Input: {
      baseStyle: {
        _focus: {
          _android: {
            selectionColor: 'orange.dark',
          },
          _ios: {
            selectionColor: 'orange.dark',
          },
          borderColor: 'orange.dark',
          selectionColor: 'orange.dark',
          backgroundColor: 'transparent',
        },
        borderRadius: 8,
        borderColor: 'orange.dark',
        selectionColor: 'orange.dark',
      },
    },
    Pressable: {
      baseStyle: {
        _pressed: {
          opacity: 0.8,
        },
      },
    },
  },
});

type CustomThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
export default theme;
