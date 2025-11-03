import React, { useEffect, useState } from "react";
import styles from "./ShopByCategories.module.css";
import type { Category } from "./type";

const ShopByCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://marketplace.tc.com/api/v1/home")
      .then((res) => {
        if (!res.ok) throw new Error("Помилка запиту");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка завантаження категорій:", err);
        setError("Не вдалося завантажити категорії");
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Shop by Categories</h2>

      {loading && <p className={styles.message}>Завантаження категорій...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && categories.length === 0 && (
        <p className={styles.message}>Категорії не знайдено.</p>
      )}

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
