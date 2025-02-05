import {useDispatch, useSelector} from "react-redux"
import { img_cdn } from "./config";
import { clearCart } from "../../utils/cartSlice";
import MenuItems from "./MenuItems";
const Cart=()=>{
    
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const clearItem=()=>{   
        dispatch(clearCart())
        
    }
    return(
        <div id="cart-page">
            <h1>Cart</h1>
            <button id="clear-cart" onClick={clearItem}>Clear Cart</button>
           
           <div id="cart-items"> {cartItems.length!=0?<MenuItems props={cartItems}/>:<h2>Cart  is empty. Add items to cart</h2> }</div>
        </div>
    )
}
export default Cart;