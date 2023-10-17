import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const browserRouter = createBrowserRouter(routes);

export const App = () => <RouterProvider router={browserRouter} />;
