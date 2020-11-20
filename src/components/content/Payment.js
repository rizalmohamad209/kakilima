
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// function refreshPage(){
//     window.location.reload();
// }


export class Payment extends Component {
    
    render() {
        return (
            <div>
                <h2 style={{textAlign: "center"}}>Pembayaran Berhasil</h2>
                <Link   to="/">Lacak Paket</Link>
            </div>
        )
    }
}

export default Payment