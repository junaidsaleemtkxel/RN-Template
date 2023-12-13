import React, {Component} from 'react';
import {Wrapper, Text, Headers} from '../../../components';
import {useHooks} from './hooks';
import { navigate } from '../../../navigation/rootNavigation';
import { routes } from '../../../services';

export default function Index() {
  const {} = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary title={'Post by user one'} showBackArrow />
    </Wrapper>
  );
}
