import HomeLayout from 'layout/HomeLayout/index';
import AuthLogin from 'pages/authentication/auth-forms/AuthLogin';
import AuthRegister from 'pages/authentication/auth-forms/AuthRegister';
import Home from 'pages/home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Loadable from 'components/Loadable';
import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import DisplayError from 'pages/error/DisplayError';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <AuthLogin></AuthLogin>
            },
            {
                path: '/register',
                element: <AuthRegister></AuthRegister>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <MainLayout></MainLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardDefault></DashboardDefault>
            },
            {
                path: '/dashboard/sample-page',
                element: <SamplePage></SamplePage>
            },
            {
                path: '/dashboard/color',
                element: <Color />
            },
            {
                path: '/dashboard/shadow',
                element: <Shadow />
            },
            {
                path: '/dashboard/typography',
                element: <Typography />
            },
            {
                path: '/dashboard/icons/ant',
                element: <AntIcons />
            }
        ]
    }
]);

export default router;
