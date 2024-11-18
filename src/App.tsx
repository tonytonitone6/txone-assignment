import React, {Suspense} from 'react';
import { TonicProvider } from '@tonic-ui/react';

import { RouterProvider, BrowserRouter } from 'react-router-dom';


import CenterLayout from './layout/CenterLayout';

import { structRoutes, mainRoutes } from './route';



const App = () => {
  return (
    <TonicProvider colorMode={{defaultValue: 'dark'}}>
      <CenterLayout>
          <Suspense fallback={<div>loading...</div>}>
            <RouterProvider router={structRoutes(mainRoutes)} />
          </Suspense>
      </CenterLayout>
    </TonicProvider>
  );
};

export default App;