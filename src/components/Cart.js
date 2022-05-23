import { Button, Container } from 'react-bootstrap';
import React from 'react';
import Header from '../components/Header';
import './Cart.css';

const CartItems = ()=> {
    const [cartItems,setCartItems] = React.useState(JSON.parse(localStorage.getItem("cartItems")));

    function removeItem(name,price){
        const newCart = cartItems.filter(( obj ) => {
            return obj.name !== name;
        });
        const newItems = JSON.stringify(newCart)
        localStorage.setItem("cartItems",newItems);
    }

    React.useEffect(()=>{
        const newCart = JSON.parse(localStorage.getItem("cartItems"));
        setCartItems(newCart);
    },[cartItems])

return <div>
    <Header />
    <Container>
        <div className='cartContainer'>
    {cartItems.map(item => {
        return <div className='cart'>
            <div>{item.name}</div>
            <div>
                {item.price}
                <Button onClick={()=> removeItem(item.name,item.price)}>Delete</Button>
            </div>
        </div>
    })}
    </div>
    </Container>
</div>
}

export default CartItems;