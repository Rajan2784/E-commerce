import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homePage/HomePage'
import Cart from '../customer/components/cart/Cart'
import Navigation from '../customer/components/navigation/Navigation.jsx'
import Footer from '../customer/components/footer/Footer.jsx'
import Product from '../customer/components/product/Product.jsx'
import ProductDetails from '../customer/components/productDetails/ProductDetails.jsx'
import Checkout from '../customer/components/checkout/Checkout.jsx'
import Order from '../customer/components/orderPage/Order.jsx'
import OrderDetails from '../customer/components/orderPage/OrderDetails.jsx'

const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation />
        </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account/order' element={<Order />} />
        <Route path='/account/order/:orderID' element={<OrderDetails />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRoutes
