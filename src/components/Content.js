import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Products from './content/Products'
import Details from './content/Details'
import Cart from './content/Cart'
import Profile from './content/Akun'
import Payment from './content/Payment'
import Deliver from './content/Deliver'
import Histori from './content/Histori'
import Rekening from './content/Rekening'
import Lelang from './driver/Lelang'
import Lacak from './driver/Lacak'
import Pedagang from './pedagang/Pedagang'
import Pesanan from './pedagang/Pesanan'
import Pengiriman from './pedagang/Pengiriman'
import Login from './Login'
import Signup from './Signup'
import Produk from './pedagang/Produk'
import Keuangan from './pedagang/Keuangan'
import Toko from './pedagang/Toko'
import {Route} from "react-router-dom"
import HistoriDriver from './driver/Histori'
import Akun from './driver/Akun'
import Target from './driver/Target'

export class Content extends Component {
    render() {
        return (
            <>

                <Route path="/" component={Login} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} exact />
                <Route path="/histori" component={Histori} exact/>
                <Route path="/cart" component={Cart} exact/>
                <Route path="/deliver" component={Deliver} exact/>
                <Route path="/profile" component={Profile} exact/>  
                <Route path="/rekening" component={Rekening} exact/>              
                <Route path="/akun" component={Akun} exact/>
                <Route path="/target" component={Target} exact/>
                <Route path="/Lelang" component={Lelang} exact/>
                <Route path="/historidriver" component={HistoriDriver} exact/>
                <Route path="/lacak" component={Lacak} exact/>
                <Route path="/pesanan" component={Pesanan} exact/>
                <Route path="/pengiriman" component={Pengiriman} exact/>
                <Route path="/pedagang" component={Pedagang} exact/>
                <Route path="/produk" component={Produk} exact />
                <Route path="/toko" component={Toko} exact />
                <Route path="/keuangan" component={Keuangan} exact />
                <Route path="/payment" component={Payment} exact/>

                

            </>
        )
    }
}

export default Content
