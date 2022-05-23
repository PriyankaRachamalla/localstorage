import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from '../Header';
import {List} from './Medicines';
import './MedicinesList.css';

const MedicineList = ()=>{
  
 function addToCart(name,price){
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  const newItems = JSON.stringify([...items,{name,price}])
  localStorage.setItem("cartItems",newItems);
 }

return <div className={'container'}>
  <Header />
  <h2 className={'productsHeader'}>Products</h2>
  <div className='list'>
    {List.map(item => {
        return <Card style={{ width: '16rem', marginBottom: '16px', marginRight: '16px', textAlign: 'center' }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle>{item.price}</Card.Subtitle>
          <Button onClick={()=> addToCart(item.name,item.price)} style={{marginTop: '16px'}} variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    })}
    </div>
</div>
}

export default MedicineList;