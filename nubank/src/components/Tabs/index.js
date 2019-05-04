import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabContainer, TabItem, TabText } from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabContainer>
        <TabItem>
          <Icon name='person-add' size={24} color='#ffff' />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name='chat-bubble-outline' size={24} color='#ffff' />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name='arrow-downward' size={24} color='#ffff' />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name='arrow-upward' size={24} color='#ffff' />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <Icon name='lock' size={24} color='#ffff' />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabContainer>
    </Container>
  );
}
