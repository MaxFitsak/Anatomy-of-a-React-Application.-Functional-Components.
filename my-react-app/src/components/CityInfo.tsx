import styles from "./CityInfo.module.css";

export default function CityInfo() {
  return (
    <section className={styles.cityInfo}>
      <h1 className={styles.title}>Івано-Франківськ</h1>
      <p className={styles.text}><strong>Країна:</strong> Україна</p>
      <p className={styles.text}><strong>Рік заснування:</strong> 1662 р.</p>
      <p className={styles.description}>
        Івано-Франківськ — важливий економічний і культурний центр на заході України, 
        історичне серце Прикарпаття та затишна брама до українських Карпат.
      </p>
    </section>
  );
}