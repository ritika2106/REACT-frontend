import { useState, useEffect } from 'react';
import CardFormation from './CardFormation';
import './Card.css'

//get request to the provided endpoint and formatting to json on
//receiving it
const fetchData = async () => {
  const furnitureData = await fetch('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6');
  const procsesedFurnData = await furnitureData.json();
  return procsesedFurnData;
}

const FurnitureData = () => {

  //setting initial states to empty and 0
  const [itemsInCart, setItemsInCart] = useState([]);
  const [allItemsTotal, setItemsTotal] = useState(0);

  const addToCart = (item) => {
    console.log(item, "FORM CART")
    //const updatedCart = itemsInCart.concat(item); 
    //Using spread operator instead of concat to not create a new array every time
    const updatedCart = [...itemsInCart, item];
    const updatedTotal = allItemsTotal + item.retailPrice;
    
    setItemsInCart(updatedCart);
    setItemsTotal(updatedTotal);
    alert(`The cart total now is ${updatedTotal} and there are ${updatedCart.length} item(s) in the cart`)
  }

  const [furnitureData, setFurnitureData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      //make get request to acquire furniture data
      const receivedData = await fetchData();
      //set appropriate product array from the acquired data
      setFurnitureData(receivedData.data.products);
    };
    getData();
  }, []);

  //map through each item to populate cards dynamically
  return (
    <div className='container'>
      <div className="card-list">
        {furnitureData.map((item) => (
          <CardFormation
            imageSrc={item.imageURLs[0]}
            key={item._id}
            addToCart={() => addToCart(item)}
            title={item.fulhausProductName}
            price={item.retailPrice}
          />
        ))}
      </div>
    </div>
  )
};

export default FurnitureData;