import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {
  Text,
  TextInputs,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
} from '../../../components';
import {
  responsiveFontSize,
  responsiveHeight,
  routes,
  appSvgs,
  responsiveWidth,
  sizes,
} from '../../../services';
import {useHooks} from './hooks';
export default function Index(props) {
  const {navigate} = props.navigation;

  const {handleLogin} = useHooks();
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [password, setPassword] = useState('123456');
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Auth />
        <Wrapper>
          <Spacer isDoubleBase />
          <Text
            isTinyTitle
            alignTextCenter
            style={{fontSize: responsiveFontSize(24)}}>
            Login to your account
          </Text>
          <Spacer isMedium />
          <TextInputs.Underlined
            title={'Email'}
            value={email}
            onChangeText={setEmail}
          />
          <Spacer isMedium />
          <TextInputs.Underlined
            title={'Password'}
            value={password}
            onChangeText={setPassword}
            iconNameRight="eye"
            iconTypeRight={'feather'}
            secureTextEntry
          />
          <Spacer isMedium />
          <Wrapper marginHorizontalBase>
            <Text
              isRegular
              isBoldFont
              alignTextRight
              onPress={() => navigate(routes.resetPassword)}>
              Forgot Password?
            </Text>
          </Wrapper>
          <Spacer isMedium />
          <Buttons.Colored
            text="Login"
            onPress={() => {
              handleLogin(email);
            }}
          />
          <Spacer height={responsiveHeight(10)} />
          <Text
            isRegular
            isBoldFont
            alignTextCenter
            onPress={() => navigate(routes.resetPassword)}>
            Don't have an account yet?
          </Text>
          <Spacer isBasic />
          <Buttons.Bordered
            text={'Create an account'}
            onPress={() => navigate(routes.createAccount)}
          />
          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
