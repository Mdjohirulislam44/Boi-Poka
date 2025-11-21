import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetails from './BookDetails/BookDetails';
import ListedBooks from './ListedBooks/ListedBooks';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
   children: [
  {
    path: "",
    element: <Home></Home>
  },
  {
   path:'books/:bookId',
   element:<BookDetails></BookDetails>,
   loader: async () => {
    
    const res = await fetch('/booksData.json'); 
    return res.json();  
  }
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path:'listedBooks',
    element:<ListedBooks></ListedBooks>,
    loader:()=>fetch('/bookData.json')
  }
]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>,
)
