import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = () => {
    return (
        <div sx={{ display: 'flex', width: '100%' }}>
            <p>This is Nav Bar</p>
            <p>This is Nav Bar</p>
            <p>This is Nav Bar</p>
            <Outlet></Outlet>
            <p>This is footer</p>
            <p>This is footer</p>
            <p>This is footer</p>
            <p>This is footer</p>
        </div>
    );
};

export default HomeLayout;
