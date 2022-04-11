import React from 'react'
import { createContext, useReducer, useContext } from 'react'
import {cartReducer} from './Reducer'
import Product1 from '../Assets/Images/image_productblack-bag.png'
import Product2 from '../Assets/Images/image_productfs-nike_air1.png'
import Product3 from '../Assets/Images/image_productfs-nike_air2.png'
import { arrray } from '../Components/Constant'

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
        image: Product1,
        productName: 'Nike Air Max 270 React',
        price: '294.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: true
    }, {
        id: 5,
        image: Product2,
        productName: 'Nike Air Max 270 React',
        price: '295.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot:false,
    }, {
        id: 6,
        image: Product2,
        productName: 'Nike Air Max 270 React',
        price: '296.43',
        initialPrice:'534.33',
        percentageOff:'24% Off',
        amount:1,
        hot: false
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