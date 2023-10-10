import { ArticleEditPage } from "../../Pages/ArticleEdit";
import { ArticlesSite } from "../../Pages/Articles";
import {  ArcitlesForm } from "../../Pages/ArticlesForm";
import { Home } from "../../Pages/Home";
import { StartPage } from "../../Pages/StartPage";
import { articleIdLoader } from "../../Pages/ArticleEdit";


export const paths = [
    {
        path: '/',
        element: <Home />,
        children: [
            { 
                index: true,
                element: <StartPage />
              },
            {
                path: '/newarticle',
                element: <ArcitlesForm />
            },
            {
                path: '/articles',
                element: <ArticlesSite />,
                id: "articles",
            },
            {
                path: '/article/:id',
                element: <ArticleEditPage />,
                loader: articleIdLoader,
            },  
        ]
    },
]