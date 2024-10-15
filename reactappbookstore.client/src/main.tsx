import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Books } from './pages/product/BooksPage.tsx';
import { Games } from './pages/product/GamesPage.tsx';
import { Stationery } from './pages/product/StationeryPage.tsx';
import { Music } from './pages/product/MusicPage.tsx';
import { Layout } from './layout/Layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Description } from './pages/product/DescriptionPage.tsx';
import { ShoppingCart } from './pages/product/ShoppingCartPage.tsx';
import { SignInFormik } from './pages/account/SignInPageFormik.tsx';
import { SignUpFormik } from './pages/account/SignUpPageFormik.tsx';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/books' element={<Layout />}>
                    <Route index element={<Books />} />
                </Route>
                <Route path='/games' element={<Layout />}>
                    <Route index element={<Games />} />
                </Route>
                <Route path='/stationery' element={<Layout />}>
                    <Route index element={<Stationery />} />
                </Route>
                <Route path='/music' element={<Layout />}>
                    <Route index element={<Music />} />
                </Route>
                <Route path='/description' element={<Layout />}>
                    <Route index element={<Description />} />
                </Route>
                <Route path='/shoppingcart' element={<Layout />}>
                    <Route index element={<ShoppingCart />} />
                </Route>

                <Route path='/signinformik' element={<Layout />}>
                    <Route index element={<SignInFormik />} />
                </Route>
                <Route path='/signupformik' element={<Layout />}>
                    <Route index element={<SignUpFormik />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
