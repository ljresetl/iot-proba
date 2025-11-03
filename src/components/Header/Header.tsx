import React from 'react';
import styles from './Header.module.css';

import searchIcon from './SearchIcon.svg';
import filterIcon from './FilterIcon.svg';
import userIcon from './UserIcon.svg';
import cabinetIcon from './CabinetIcon.svg';
import cartIcon from './CartIcon.svg';
import '../../global.css';

const Header: React.FC = () => {
  return (
    <>
      {/* Валюта та мова */}
      <div className={styles.localeSwitcher}>
        <select className={styles.select} aria-label="Валюта">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <select className={styles.select} aria-label="Мова">
          <option value="uk">Українська</option>
          <option value="en">English</option>
          <option value="cs">Čeština</option>
        </select>
      </div>

      <header className={styles.header}>
       <div className={styles.headerContainer}>
          {/* Логотип */}
          <div className={styles.logo}>LOGO</div>
  
          {/* Пошук + фільтр */}
          <div className={styles.searchBlock}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Я шукаю вас..."
                className={styles.searchInput}
              />
              <img src={searchIcon} alt="Пошук" className={styles.searchIcon} />
            </div>
  
            <button className={styles.filter} aria-label="Фільтр">
              <img src={filterIcon} alt="Фільтр" className={styles.filterIcon} />
              <span className={styles.filterText}>Фільтр</span>
            </button>
          </div>
  
          {/* Дії користувача */}
          <div className={styles.userActions}>
            <button className={styles.icon} aria-label="Профіль">
              <img src={userIcon} alt="Профіль" className={styles.iconImage} />
              <span className={styles.iconText}>Увійти</span>
            </button>
  
            <button className={styles.icon_2} aria-label="Мій кабінет">
              <img src={cabinetIcon} alt="Мій кабінет" className={styles.iconImage_2} />
            </button>
  
            <button className={styles.cart} aria-label="Кошик">
              <img src={cartIcon} alt="Кошик" className={styles.cartIcon} />
              <span className={styles.badge}>2</span>
            </button>
          </div>
  
          {/* Навігація */}
          <nav className={styles.navLinks}>
            <a href="#" className={styles.navLink}>IoT Devices</a>
            <a href="#" className={styles.navLink}>About</a>
            <a href="#" className={styles.navLink}>Blog</a>
            <a href="#" className={styles.navLink}>Shop By Brand</a>
            <a href="#" className={styles.navLink}>Shop By Solution</a>
          </nav>
       </div>
      </header>
    </>
  );
};

export default Header;
