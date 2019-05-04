import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItems,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value='https://google.com'
          size={90}
          fgColor='#FFF'
          bgColor='#7428d5'
        />
      </Code>
      <Nav>
        <NavItems>
          <Icon name='help-outline' size={28} color='#FFF' />
          <NavText>Me ajuda</NavText>
          <Icon name='keyboard-arrow-right' size={28} color='#FFF' />
        </NavItems>

        <NavItems>
          <Icon name='person-outline' size={28} color='#FFF' />
          <NavText>Perfil</NavText>
          <Icon name='keyboard-arrow-right' size={28} color='#FFF' />
        </NavItems>

        <NavItems>
          <Icon name='smartphone' size={28} color='#FFF' />
          <NavText>Configurações do app</NavText>
          <Icon name='keyboard-arrow-right' size={28} color='#FFF' />
        </NavItems>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
