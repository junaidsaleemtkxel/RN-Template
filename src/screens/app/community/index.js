import React, {Component} from 'react';
import {Wrapper, Text, Headers} from '../../../components';
import {useHooks} from './hooks';
import PeopleList from './PeopleList';
import {SafeAreaView} from 'react-native';

export default function Index() {
  const {} = useHooks();
  return (
    <SafeAreaView style={{flex:1}}>
      <Wrapper isMain>
        <Text isLargeTitle>Community</Text>
        <PeopleList />
      </Wrapper>
    </SafeAreaView>
  );
}
