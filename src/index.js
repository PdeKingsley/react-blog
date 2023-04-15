import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    createBrowserRouter, Route,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import Timeline from "./views/timeline";
import Blog from "./views/blog";
import Category from "./views/category";
import Tag from "./views/tag";
import {createStaticRouter, StaticRouterProvider} from "react-router-dom/server";
import * as path from "path";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "react-blog",
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/home",
                element: <App />,
            },
            {
                path: "category",
                element: <Category />,
            },
            {
                path: "category/:category",
                element: <Category />,
            },
            {
                path: "tag",
                element: <Tag />,
            },
            {
                path: "tag/:tag",
                element: <Tag />,
            },
            {
                path: "timeline",
                element: <Timeline />,
            },
            {
                path: "blogs/:title",
                element: <Blog />,
            },
            {
                path: "Contact/Github",
                loader: () => {window.location.replace("https://github.com/PdeKingsley");return "https://github.com/PdeKingsley";},
            },
        ],
    },
],{basename: process.env.PUBLIC_URL,})

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
