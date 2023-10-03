import { Arcitles } from "../../Pages/Articles";
import { Home } from "../../Pages/Home";


export const paths = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/articles',
        element: <Arcitles />
    }
]