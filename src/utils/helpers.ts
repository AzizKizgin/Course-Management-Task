import theme from '../config/theme';

export const getItemColor = (index: number) => {
  const numberOfColor = index % 5;
  switch (numberOfColor) {
    case 0:
      return theme.colors.yellow[300];
    case 1:
      return theme.colors.red[300];
    case 2:
      return theme.colors.blue[300];
    case 3:
      return theme.colors.orange[300];
    case 4:
      return theme.colors.green[300];
  }
};
