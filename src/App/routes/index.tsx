import { QueryClient } from '@tanstack/react-query';

import { articleLoader } from '../../Pages/Articles/queries';

import { Home } from '../../Pages/Home/Home';
import { StartPage } from '../../Pages/StartPage/StartPage';
import { ArticleEditPage } from '../../Pages/Articles/ArticleEdit';
import { ArticlesSite } from '../../Pages/Articles/Articles';
import { ArcitlesForm } from '../../Pages/Articles/ArticlesForm';

const queryClient = new QueryClient();
export const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <StartPage />,
        id: 'start',
      },
      {
        path: '/newarticle',
        element: <ArcitlesForm />,
        id: 'newarticle',
      },
      {
        path: '/articles',
        element: <ArticlesSite />,
        id: 'articles',
      },
      {
        path: '/article/:id',
        element: <ArticleEditPage />,
        loader: articleLoader(queryClient),
      },
    ],
  },
];
