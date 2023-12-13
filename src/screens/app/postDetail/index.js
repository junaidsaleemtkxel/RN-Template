import React, {Component} from 'react';
import {Wrapper, Text, Headers} from '../../../components';
import {useHooks} from './hooks';
import {goBack, navigate} from '../../../navigation/rootNavigation';
import {routes} from '../../../services';
import useUserStore from '../../../zustandStore/store';

export default function Index() {
  const {} = useHooks();
  const {setUser} = useUserStore();
  return (
    <Wrapper isMain>
      <Headers.Primary
        title={'Post by user one'}
        showBackArrow
        onBackPress={() => {
          setUser({
            email: 'test',
          });
          goBack();
        }}
      />
    </Wrapper>
  );
}
