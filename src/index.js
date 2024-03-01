import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Main Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Main Components/login/Login';
import ConfirmationCode from './Main Components/conCode/ConfirmationCode';
import Forget from './Main Components/forget/Forget';
import SignIn from './Main Components/signin/SignIn';
import CreateAccount from './Main Components/creatAccount/CreateAccount';
import { CardDetail } from './Main Components/PageComponents/caedDetail/CardDetail';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    Loader: () => {
      let posts = fetch ("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.jeson())
      .then((json) => json);
      return posts;
    }
  },

  {
    path: "/newpassword",
    element: <Login/>,
  },

  {
    path: "/confirmationcode",
    element: <ConfirmationCode/>
  },

  {
    path: "/forget",
    element: <Forget/>
  },

  {
    path: "/signin",
    element: <SignIn/>
  },

  {
    path: "/signup",
    element: <CreateAccount/>
  },

  {
    path: "/cardDetail/:cardid",
    element: <CardDetail/>
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


