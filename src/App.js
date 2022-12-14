import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './contexts/User'
import Login from './pages/Login'
import MessagesSent from './pages/MessagesSent'
import Product from './pages/Product'
import CreateProduct from './pages/CreateProduct'
import CreateMessage from './pages/CreateMessage'
import ProductMessages from './pages/ProductMessages'
import Home from './pages/Home'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import User from './pages/User'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/create-product" element={<CreateProduct />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="user/message-sent"
                        element={<MessagesSent />}
                    />
                    <Route
                        path="/products/:id/messages"
                        element={<CreateMessage />}
                    />
                    <Route
                        path="/product-messages"
                        element={<ProductMessages />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/not-found" element={<NotFound />} />
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    )
}
export default App
