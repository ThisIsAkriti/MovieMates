import { createBrowserRouter} from 'react-router-dom'
import Login from './Login';
import Browse from './Browse'
import WatchTrailer from './WatchTrailer';
import { RouterProvider } from 'react-router-dom'
import React from 'react';

const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path:"/watchTrailer/:id",
            element: <WatchTrailer/>
        },
        {
            path:"/watchTrailer",
            element:<WatchTrailer />
        } 

    ]);


  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  );
};

export default Body;
