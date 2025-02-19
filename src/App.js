import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

import Home from './pages/Home';
import RootLayout from './pages/Root'
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />}/>
//     <Route path='products' element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />},
      { path: 'products', element: <Products />},
      { path: '/products/:id', element: <ProductDetail />}
    ],
    errorElement: <ErrorPage />
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
