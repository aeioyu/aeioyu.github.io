import * as React from 'react';
import styled from 'styled-components';


const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

interface IContainerProps {
  children: any
}

function Container ({ children, ...rest }: IContainerProps) {
  return (
    <ContainerWrapper {...rest}>
      {children}
    </ContainerWrapper>
  );
}

export default styled(Container)``;