import styles from "./ShopByCategories.module.css";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: "/icons/electronics.png",
  },
  {
    id: 2,
    name: "Fashion",
    icon: "/icons/fashion.png",
  },
  {
    id: 3,
    name: "Home & Garden",
    icon: "/icons/home-garden.png",
  },
  {
    id: 4,
    name: "Sports",
    icon: "/icons/sports.png",
  },
];

const ShopByCategories = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Shop by Categories</h2>

      <div className={styles.carousel}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card}>
            <div className={styles.image}>
              <img src={category.icon} alt={category.name} />
            </div>
            <div className={styles.label}>
              {category.name}
              <span className={styles.arrow}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategories;
