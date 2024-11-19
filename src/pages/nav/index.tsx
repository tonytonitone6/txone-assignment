import React from 'react';
import { NavLink as RouterLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Box } from '@tonic-ui/react';

const naviList = [
  {
    path: '/menu',
    text: 'menu',
  },
  {
    path: '/table',
    text: 'table',
  },
];

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Nav = () => {
  return (
      <Box display="flex" flexDirection="column" height={100}>
        <Box display="flex" justifyContent="center" gap={10}>
          {naviList.map((item) => (
            <RouterLink to={item.path} key={item.path}>
              <Button variant="primary" minWidth={100}>{item.text}</Button>
            </RouterLink>
          ))}
        </Box>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Box>
  );
};

export default Nav;
