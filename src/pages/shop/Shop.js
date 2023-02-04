import './Shop.css';
import { useState } from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SampleData from "../../SampleData";
import ProductItem from '../../components/product-item/ProductItem';

const Shop = () => {

  const [games, setGames] = useState(SampleData.games);

  return (
    <div className="shop-page">
      <Header />
      <div className='shop-content'>
        <div className='shop-content-left'>
        
        </div>
        <div className='shop-content-right'>
          {games.map((game) => {
            return <ProductItem game={game} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop;