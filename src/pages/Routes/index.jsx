import React from 'react';
import {useRoutes} from 'react-router-dom'
import Home from '../Home';
import Login from '../Login';
import Hogar from '../Hogar';
import Inspiracion from '../Inspiracion';
import Habitacion from '../Habitacion';
import Jardin from '../Jardin';

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/Login', element: <Login/>},
        {path: '/Hogar', element: <Hogar/>},
        {path: '/Habitacion', element: <Habitacion/>},
        {path: '/Inspiracion', element: <Inspiracion/>},
        {path: '/Jardin', element: <Jardin/>},
    ])
    
    return routes;
}

export default AppRoutes;