import {Center, Image} from 'native-base';
import React, {FC} from 'react';
import theme from '../../../config/theme';
import {logo} from '../../../utils/consts';

interface Props {
  image?: string;
}
const FormImage: FC<Props> = ({image}) => {
  return (
    <Center marginY={5}>
      {image ? (
        <Image
          source={{uri: image}}
          alt="avatar"
          size={20}
          width={100}
          height={100}
          backgroundColor={theme.colors.white}
          rounded={'full'}
          borderWidth={1}
          borderColor={theme.colors.orange.dark}
        />
      ) : (
        <Image
          source={logo}
          alt="avatar"
          size={20}
          width={100}
          height={100}
          resizeMode="cover"
          backgroundColor={theme.colors.white}
          rounded={'full'}
          borderWidth={1}
          borderColor={theme.colors.orange.dark}
        />
      )}
    </Center>
  );
};

export default FormImage;
