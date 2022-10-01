import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/NotFound';
import UserDetail from './Pages/UserDetail/UserDetail';
import Users from './Pages/users/Users';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound />,
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <PageNotFound />,
    },
    {
        path: 'users',
        element: <Users />,
        errorElement: <PageNotFound />,
    },
    {
        path: 'user/:userId',
        element: <UserDetail />,
        errorElement: <PageNotFound />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
