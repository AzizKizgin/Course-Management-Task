import React, {useMemo, useState} from 'react';
import {Box, Card, Icon, Image, Text, VStack} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {mortarBoardOutline} from '../../utils/consts';
import theme from '../../config/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {useLocalization} from '../../contexts/LocalizationContext';

const Home = () => {
  const [studentCount, setStudentCount] = useState(200);
  const {strings} = useLocalization();
  const items = useMemo(
    () => [
      {
        id: 0,
        title: strings.students,
        icon: (
          <Icon
            as={
              <Image
                source={mortarBoardOutline}
                alt="Mortarboard"
                tintColor={theme.colors.blue[400]}
              />
            }
            size={31}
            marginRight={5}
          />
        ),
        text: studentCount,
        color: theme.colors.blue[200],
      },
      {
        id: 1,
        title: strings.courses,
        icon: (
          <Icon
            as={Ionicons}
            name={'bookmark-outline'}
            size={29}
            color={theme.colors.pink[400]}
          />
        ),
        text: '243',
        color: theme.colors.pink[200],
      },
      {
        id: 2,
        title: strings.payments,
        icon: (
          <Icon
            as={Ionicons}
            name={'ios-logo-usd'}
            size={29}
            color={theme.colors.yellow[400]}
            marginRight={5}
          />
        ),
        text: '556.000₺',
        color: theme.colors.yellow[200],
      },
      {
        id: 3,
        title: strings.users,
        icon: (
          <Icon
            as={Ionicons}
            name={'person-outline'}
            size={29}
            color={theme.colors.white}
          />
        ),
        text: '3',
        color: theme.colors.orange.dark,
      },
    ],
    [strings, studentCount],
  );
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
      }}>
      {items.map(item => (
        <Card
          key={item.id}
          marginY={2}
          width="90%"
          borderRadius={10}
          justifyContent="center"
          backgroundColor={item.color}>
          <VStack space={6}>
            <Box>
              {item.icon}
              <Text color={theme.colors.black} fontSize={24}>
                {item.title}
              </Text>
            </Box>
            <Text
              color={theme.colors.black}
              fontSize={24}
              fontWeight="bold"
              textAlign={'right'}>
              {item.text}
            </Text>
          </VStack>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Home;
