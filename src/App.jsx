import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout.jsx';
import Comedy from './Component/Comedy/Comedy.jsx';
import Home from './Component/Home/Home.jsx';
import Action from './Component/Movies/Movies.jsx';
import Horror from './Component/Horror/Horror.jsx';
import Drink from './Component/Order/Drink.jsx';
let router=createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
      {index:true,element:<Home className="mt-5"/>},
      {path:"comedy",element:<Comedy className="mt-5"/>},
      {path:"action",element:<Action className="mt-5"/>},
      {path:"horror",element:<Horror className="mt-5"/>},
      {path:"order",element:<Drink className="mt-5"/>}
    ]}
])
export default function App() {
  return  <> 
    <RouterProvider router={router}/>
  </>
  
}
