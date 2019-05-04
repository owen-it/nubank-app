import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Balance from '~/components/Balance';
import Menu from '~/components/Menu';

import { Container, Content } from './styles';

export default function() {
  return (
    <Container>
      <Header />
      <Content>
        <Balance />
        <Menu />
      </Content>
      <Tabs />
    </Container>
  );
}
