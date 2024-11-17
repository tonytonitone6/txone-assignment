import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterLayout: FC<PropsWithChildren> = ({children}) => {
  return <Container>{children}</Container>
}

export default CenterLayout;