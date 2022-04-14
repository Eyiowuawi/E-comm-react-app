import React from 'react'
import { createContext, useReducer, useContext } from 'react'
import {cartReducer} from './Reducer'
import Product1 from '../Assets/Images/image_productblack-bag.png'
import Product2 from '../Assets/Images/image_productfs-nike_air1.png'
import Product3 from '../Assets/Images/image_productfs-nike_air2.png'
import Product4 from '../Assets/Images/products/image_product1.png'
import Product5 from '../Assets/Images/products/imageProduct2.png'
import Product6 from '../Assets/Images/products/imageProduct3.png'
import Product7 from '../Assets/Images/products/imageProduct4.png'
import Product8 from '../Assets/Images/products/imageProduct5.png'
import Product9 from '../Assets/Images/products/imageProduct6.png'
import Product10 from '../Assets/Images/products/image_product1.png'
import Product11 from '../Assets/Images/products/imageProduct2.png'
import Product12 from '../Assets/Images/products/imageProduct3.png'
import Product13 from '../Assets/Images/products/imageProduct4.png'
import Product14 from '../Assets/Images/products/imageProduct5.png'
import Product15 from '../Assets/Images/products/imageProduct6.png'
import Product16 from '../Assets/Images/products/image_product1.png'
import Product17 from '../Assets/Images/products/imageProduct2.png'
import Product18 from '../Assets/Images/products/imageProduct4.png'
import Product19 from '../Assets/Images/products/imageProduct5.png'
import Product20 from '../Assets/Images/products/imageProduct6.png'



const Cart= createContext();

const Context = ({children})=>{
    const products=[{
        id: 1,
        image: Product1,
        productName: 'Nike Air Max 270 React',
        price: '291.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    }, {
        id: 2,
        image: Product2,
        productName: 'Nike Air Max 270 React',
        price: '292.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true,
    
    }, {
        id: 3,
        image: Product3,
        productName: 'Nike Air Max 270 React',
        price: '293.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    }, {
        id: 4,
        image: Product4,
        productName: 'Nike Air Max 270 React',
        price: '294.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    }, {
        id: 5,
        image: Product5,
        productName: 'Nike Air Max 270 React',
        price: '295.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot:false,
    }, {
        id: 6,
        image: Product6,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
    },
    {
        id: 7,
        image: Product6,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    },
    {
        id: 8,
        image: Product8,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    },
    {
        id: 9,
        image: Product9,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
    },
    {
        id: 10,
        image: Product10,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
    },
    {
        id: 11,
        image: Product11,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    },
    {
        id: 12,
        image: Product12,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
    },
    {
        id: 13,
        image: Product13,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    },
    {
        id: 14,
        image: Product14,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
    },
    {
        id: 15,
        image: Product15,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
    },
    {
        id: 16,
        image: Product16,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    },
    {
        id: 17,
        image: Product17,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
    },
    {
        id: 18,
        image: Product18,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    },
    {
        id: 19,
        image: Product19,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    },
    {
        id: 20,
        image: Product20,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    }

];

const [state, dispatch]= useReducer(cartReducer, {
    products: products,
    cart:[]
})
return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
};

// function Context({children}) {
//     return ( 
//     <cart.Provider></cart.Provider>
//     )
// }

export default Context
export const CartState = ()=>{
    return useContext(Cart);
}