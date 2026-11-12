import styles from "./CityGallery.module.css";

export default function CityGallery() {
  return (
    <section className={styles.cityGallery}>
      <h2 className={styles.heading}>Визначні місця</h2>
      <div className={styles.galleryGrid}>
        <div className={styles.card}>
          <img 
            className={styles.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMsPH_beGIa2b21FP1Kn332lebQtqN0pUDrGD5Ypx2Q&s=10" 
            alt="Вовчинецькі гори" 
          />
          <p className={styles.caption}>Вовчинецькі гори — оглядовий майданчик</p>
        </div>

        <div className={styles.card}>
          <img 
            className={styles.image}
            src="https://upload.wikimedia.org/wikipedia/commons/3/37/Townhall_ivano-frankivsk.jpg" 
            alt="Ратуша" 
          />
          <p className={styles.caption}>Ратуша</p>
        </div>

        <div className={styles.card}>
          <img 
            className={styles.image}
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B5_%D0%BE%D0%B7%D0%B5%D1%80%D0%BE_%28%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%29.jpg/960px-%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B5_%D0%BE%D0%B7%D0%B5%D1%80%D0%BE_%28%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%29.jpg" 
            alt="Міське Озеро" 
          />
          <p className={styles.caption}>Міське Озеро</p>
        </div>
      </div>
    </section>
  );
}