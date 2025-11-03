import React from "react";
import styles from "./Banner.module.css";
import AI_Chat_Bot from "./AI_Chat_Bot.svg";
import shopIcon from "./shopIcon.svg";
import '../../global.css';
import diagonalLine from "./diagonalLine.svg";
import diagonalLine_two from "./diagonalLine_two.svg";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
          <div className={styles.bannerContainer}>
              <img src={diagonalLine} alt="Diagonal line" className={styles.diagonalLine} />
              <img src={diagonalLine_two} alt="Diagonal line" className={styles.diagonalLine_two} />
        <h1 className={styles.title}>Lorem ipsum eget magna orci</h1>

        <button className={styles.shopButton}>
  Shop now
  <img src={shopIcon} alt="Shop icon" className={styles.shopIcon} />
</button>


        <button className={styles.chatButton} aria-label="AI Chat Bot">
          <img src={AI_Chat_Bot} alt="AI Chat Bot" className={styles.chatIcon} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
