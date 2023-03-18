import { useState, useEffect } from 'react';
import CardFormation from './CardFormation.js';
import './Card.css'

const fetchData = async () => {
  const furnitureData = await fetch('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6');
  const procsesedFurnData = await furnitureData.json();
  return procsesedFurnData;
}

const FurnitureData = () => {
  const [furnitureData, setFurnitureData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const receivedData = await fetchData();
      console.log(receivedData.data.products, "received data")
      setFurnitureData(receivedData.data.products);
    };
    getData();
  }, []);
  return (
      <div className="card-list">
        {furnitureData.map((item) => (
          <CardFormation
          imageSrc={item.imageURLs[0]}
          key={item._id}
          title={item.fulhausProductName}
          price={item.retailPrice}          />
        
        ))}
    </div>
  )
};

export default FurnitureData;