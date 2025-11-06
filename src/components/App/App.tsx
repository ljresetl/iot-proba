import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import ShopByCategories from '../ShopByCategories/ShopByCategories';


const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <ShopByCategories />
    </div>
  );
};

export default App;
