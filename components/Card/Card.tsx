import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  margin: 16px 0;
  border-radius: 3px;
`;

interface ICardProps {}

const Card: FunctionComponent<ICardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
