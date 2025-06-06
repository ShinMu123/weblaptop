import HomePage from '../pages/HomePage/HomePage.jsx';
import NotfoundPage from '../pages/NotfoundPage/NotfoundPage.jsx';
import OrderPage from '../pages/OrderPage/OrderPage.jsx';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage.jsx';
import ProductsPage from '../pages/ProductsPage/ProductsPage.jsx';
import SignInPage from '../pages/SignInPage/SignInPage.jsx';
import SignupPage from '../pages/SignupPage/SignupPage.jsx';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage.jsx';
import 'antd/dist/reset.css';


export const routes =[
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
     path: '/order',
     page: OrderPage,
     isShowHeader: true,
    },
    {
     path: '/product',
     page: ProductsPage,
     isShowHeader: true,
    }, 
    {
     path: '/:type',
     page: TypeProductPage,
     isShowHeader: true,
    },
    {
      path: '/sign-in',
      page: SignInPage,
      isShowHeader: true,
    },
    
   {
      path: '/sign-up',
      page:  SignupPage,
      isShowHeader: true,
    },
    
   {
      path: '/products-details',
      page: ProductDetailsPage,
      isShowHeader: true,
},
    
    
    {
        path: '*',
        page: NotfoundPage // Fallback to HomePage for any unmatched routes
    }

]