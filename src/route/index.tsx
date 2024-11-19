import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouteObject } from 'react-router-dom';

import type { RouteConfig } from './types';

import Nav from '../pages/nav';
const Lobby = lazy(() => import('../pages/lobby'));
const Table = lazy(() => import('../pages/table'));

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: 'menu',
        element: <Lobby />,
      },
      {
        path: 'table',
        element: <Table />
      }
    ]
  }
];

function renderRoutes(routes: RouteObject[]) {
  return routes.map(route => {
    return <Route key={route.path} path={route.path} element={route.element}>
      {route.children ? renderRoutes(route.children) : null}
    </Route>
  })
}

export function structRoutes(routes: RouteObject[]) {
  return createBrowserRouter(createRoutesFromElements(renderRoutes(routes)));
}