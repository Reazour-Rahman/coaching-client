import Header from 'pages/shared/header/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = () => {
    return (
        <div sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <Outlet></Outlet>
            <p>This is footer</p>
            <p>This is footer</p>
            <p>This is footer</p>
            <p>This is footer</p>
        </div>
    );
};

export default HomeLayout;
