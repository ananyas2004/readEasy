import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider
    domain="dev-tyllflk4tc4v3qcg.us.auth0.com"
    clientId="IW80oN286PT9cZE3i5UeoIiKlx271FdZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >


  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// import About from './Pages/About';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App />,
//   },
//   {
//     path:"/About",
//     element: <About />,
//   },
// ]);


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );