import type { LazyExoticComponent, ReactNode } from 'react';

export type RouteConfig = {
  exact?: boolean;
  path: string | undefined;
  // component: ((props: any) => JSX.Element) | LazyExoticComponent<(props: any) => JSX.Element>;
  component: ReactNode
  routes?: RouteConfig[];
}