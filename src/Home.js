import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.etsystatic.com/18000923/r/il/8ba314/1751045623/il_794xN.1751045623_hnmc.jpg"
          alt=""
        />
      
      <div className="home__row">
          <Product
            id="12321341"
            title="Exclusive Kashmiri Art Papier Mache Clutch Bag"
            price={11.96}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/2675/7366/products/Exclusive_20Kashmiri_20Art_20Papier_20Mache_20Clutch_20Bag_20-_20Floral_20Statement_20-_20KCC84T_400x400.jpg?v=1675096092"
          />
          <Product
            id="49538094"
            title="Blue Pottery Blue & Indigo Blue Decorative Wall Plate"
            price={239.0}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/2675/7366/products/Blue_20Pottery_20Blue_20_26_20Indigo_20Blue_20Decorative_20Wall_20Plate_20_28Set_20of_202_29_20-_20Indigo_20Blue_20Lotus_20-_20BPOT16_400x400.jpg?v=1669533862"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Exclusive Handwoven Kilim Rug"
            price={199.99}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/2675/7366/products/DHSKRLE_400x400.jpg?v=1579728642"
          />
          <Product
            id="23445930"
            title="Marble Inlay Round Plate Curio with Stand"
            price={98.99}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/2675/7366/products/MarbleInlayRoundPlateCuriowithStand-AN07TB_400x400.jpg?v=1601572054"
          />
          <Product
            id="3254354345"
            title="Bidri Craft Curio - Jug"
            price={598.99}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/2675/7366/products/BidriCraftCurio-Jug-C3801V_360x.jpg?v=1631650134"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="The India Craft House Bastar Tribal Bird Figurine"
            price={1094.98}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/2675/7366/products/TheIndiaCraftHouseBastarTribalBirdFigurine_Setof2_-SVC02B_400x400.jpg?v=1618294143"
          />
        </div>
    </div>
    </div>
  );
  
}

export default Home;

/*https://i.etsystatic.com/18000923/r/il/8ba314/1751045623/il_794xN.1751045623_hnmc.jpg*/