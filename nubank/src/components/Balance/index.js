import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from './styles';

export default function() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Icon name='attach-money' size={24} color='#555' />
          <Icon name='visibility-off' size={24} color='#555' />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$ 232.334,90</Description>
        </CardContent>
        <CardFooter>
          <Icon name='attach-money' size={24} color='#555' />
          <Annotation>
            Compra em Restaurante Reserva de R$ 23,00 no débito terça
          </Annotation>
          <Icon name='keyboard-arrow-right' size={24} color='#555' />
        </CardFooter>
      </Card>
    </Container>
  );
}
