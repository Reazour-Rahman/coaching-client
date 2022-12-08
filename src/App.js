// project import
// import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { RouterProvider } from 'react-router-dom';
import router from './routes/HomeRoutes';
import './styles/home.css';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <RouterProvider router={router}></RouterProvider>
    </ThemeCustomization>
);

export default App;
