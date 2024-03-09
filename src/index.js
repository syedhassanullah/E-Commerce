import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';


import { router } from './App';
import UserState from './ContextWork/Context/UserState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <UserState>
    <RouterProvider router={router} />
    </UserState>
  </React.StrictMode>
);


