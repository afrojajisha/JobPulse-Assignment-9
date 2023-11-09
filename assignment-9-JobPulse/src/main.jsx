import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import AppliedJobs from './components/AppliedJobs.jsx';
import Statistics from './components/Statistics.jsx';
import Blog from './components/Blog.jsx';
import ErrorPage from './components/ErrorPage.jsx'
import { categoriesAndFeaturedJobs,  fetchJobs } from './loaders/categriesAndFeaturedJobs.js';
import JobDetails from './components/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,   
    children: [
      {
        path: '/',
        element: <Home/>, 
        loader: categoriesAndFeaturedJobs,
        
        // ()=>fetch('categories.json'),
        },
       
        {
          path: 'job-details/:id',
          element: <JobDetails/>,
          loader:({ params }) => {
            const apiUrl = `/jobs.json?id=${params.id}`;
            console.log(apiUrl); // Log the constructed URL to check if it's correct
            return fetch(apiUrl);
          },
          // loader: ({ params }) => fetch(`jobs.json?id=${params.id}`) ,
          // async ({ params }) => {
          //   const response = await fetch(`jobs.json?id=${params.id}`);
          //   const data = await response.json();
          //   return data;
          // }
        
          },
        
     {
        path: '/applied-jobs',
        element: <AppliedJobs/>, 
        loader: categoriesAndFeaturedJobs 
      },
      {
        path: '/statistics',
        element: <Statistics/>, 
      },
      {
        path: '/blog',
        element: <Blog/>, 
      },
    
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />  
  </React.StrictMode>,
)
