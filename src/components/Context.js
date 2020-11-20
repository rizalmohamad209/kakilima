import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
    
state ={
    products :[
        {
        "_id": "asd1293uasdads1",
        "category": "Terdekat",
        "name": "Sate Aci",
        "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896433/img1_btyr7b.jpg",
        "price": "10000",
        "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
        "rate":4.5,
        "star": "/images/Star.svg",
        "placeholder": "/images/place.svg",
        "count": 1,
        "jarak": "4 km",
        "bahan": "Olahan Daging",
        "promo": true
        },
        {
            "_id": "asd1293uasdads2",
            "name": "Bubur Ayam",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896433/img2_qb0uee.jpg",
            "price": "7000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, ",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "5 km",
            "bahan": "Olahan Bubur",
            "promo": true
        },
        {
            "_id": "asd1293uasdads3",
            "name": "Es Kelapa",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896433/img3_g7qrxm.jpg",
            "price": "9000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "3 km",
            "bahan": "Olahan Kelapa",
            "promo": true
        },
        {
            "_id": "asd1293uasdads4",
            "name": "Batagor",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896433/img4_pluws3.jpg",
            "price": "5000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "1 km",
            "bahan": "Olahan Ika ",
            "promo": true
            
        },
        {
            "_id": "asd1293uasdads5",
            "name": "Olos",
            "category": "Favorit",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896432/img15_sv7gnu.jpg",
            "price": "9000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "2 km",
            "bahan": "olahan Aci",
            "promo": true
        },
        {
            "_id": "asd1293uasdads6",
            "name": "Sempolan",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896432/img14_lbi7ub.jpg",
            "price": "10000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "5 km",
            "bahan": "olahan Ayam",
            "promo": true
        },
        {
            "_id": "asd1293uasdads7",
            "name": "Jus Alpukat",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896431/img13_ax1uyw.jpg",
            "price": "5000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "5 km",
            "bahan": "Oahan Buah",
            "promo": true
        },
        {
            "_id": "asd1293uasdads8",
            "name": "Es Buah",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896432/img18_vucynm.jpg",
            "price": "20000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "5 km",
            "bahan": "Olahan Buah",
            "promo": true
        },
        {
            "_id": "asd1293uasdads9",
            "name": "Seblak",
            "category": "Terlaris",
            "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896432/img17_jy51az.jpg",
            "price": "7000",
            "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
            "rate":4,
            "star": "/images/Star.svg",
            "placeholder": "/images/place.svg",
            "count": 1,
            "jarak": "5 km",
            "bahan": "Olahan Kerupuk",
            "promo": true
            },
            {
                "_id": "asd1293uasdads10",
                "name": "Es Teh",
                "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896433/img11_hdewln.jpg",
                "price": "5000",
                "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
                "rate":4,
                "star": "/images/Star.svg",
                "placeholder": "/images/place.svg",
                "count": 1,
                "jarak": "5 km",
                "bahan": "Olahan Teh",
                "promo": true
            },
            {
                "_id": "asd1293uasdads11",
                "name": "Siomay",
                "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896432/img7_qgtl5n.jpg",
                "price": "15000",
                "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
                "rate":4,
                "star": "/images/Star.svg",
                "placeholder": "/images/place.svg",
                "count": 1,
                "jarak": "5 km",
                "bahan": "Olahan Ikan",
                "promo": true
            },
            {
                "_id": "asd1293uasdads12",
                "name": "Tahu ACi",
                "imageUrl": "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896432/img16_vlqmzy.jpg",
                "price": "8000",
                "description": "The Two Double Cheese Burger features two 100% pure beef pattites seasoned with just a pinch of salt and papper, it's topped with tangy pickles, chopped onions, kethcup, mustrad and two slices of melty American cheese",
                "rate":4,
                "star": "/images/Star.svg",
                "placeholder": "/images/place.svg",
                "count": 1,
                "jarak": "5 km",
                "bahan": "Olahan Tahu",
                "promo": true
            }

    ],
    cart:[],
    total:0
   

};

    

addCart = (id) =>{
    const {products, cart} = this.state;
    const check = cart.every(item =>{
        return item._id !== id
    })
    if(check){
        const data = products.filter(product =>{
            return product._id === id
        })
        this.setState({cart: [...cart,...data]})
    }else{
        alert("The product has been added to cart.")
    }
};

reduction = id =>{
    const { cart } = this.state;
    cart.forEach(item =>{
        if(item._id === id){
            item.count === 1 ? item.count = 1 : item.count -=1;
        }
    })
    this.setState({cart: cart});
    this.getTotal();
};

increase = id =>{
    const { cart } = this.state;
    cart.forEach(item =>{
        if(item._id === id){
            item.count += 1;
        }
    })
    this.setState({cart: cart});
    this.getTotal();
};

removeProduct = id =>{
    if(window.confirm("Do you want to delete this product?")){
        const {cart} = this.state;
        cart.forEach((item, index) =>{
            if(item._id === id){
                cart.splice(index, 1)
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    }
   
};

getTotal = ()=>{
    const{cart} = this.state;
    const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.count);
    },0)
    this.setState({total: res})
};

componentDidUpdate(){
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
};

componentDidMount(){
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if(dataCart !== null){
        this.setState({cart: dataCart});
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if(dataTotal !== null){
        this.setState({total: dataTotal});
    }
}







    render() {
        const {products, cart,  total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider value={{products, addCart, cart, reduction,increase,total, removeProduct, getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
