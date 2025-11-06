import React, { useRef } from "react";
import styles from "./ShopByCategories.module.css";
import shopIcon from "./shopIcon.svg";
import ArrowLeftIcon from "./svg/left.svg";
import ArrowRightIcon from "./svg/rigth.svg";


const categories = [
  "Smart home",
  "Wearables",
  "Sensors",
  "Security",
  "Lighting",
  "Energy",
  "Health",
  "Robotics"
];

const ShopByCategories: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className={styles.categories}>
      <div className={styles.container_categories}>
        <h2 className={styles.heading}>Shop by Categories</h2>

        <div className={styles.carouselWrapper}>

          <div className={styles.carousel} ref={carouselRef}>
            {categories.map((category, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.image}>
                  <img
                    src={`/src/components/ShopByCategories/foto/foto.png`}
                    alt={category}
                  />
                </div>
                <div className={styles.p_b}>
                  <p className={styles.categoryName}>{category}</p>
                  <button className={styles.shopButton}>
                    <img src={shopIcon} alt="Shop icon" className={styles.shopIcon} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.arrowLeft} onClick={scrollLeft}><img src={ArrowLeftIcon} alt="Left arrow" /></button>

          <button className={styles.arrowRight} onClick={scrollRight}><img src={ArrowRightIcon} alt="Right arrow" /></button>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
