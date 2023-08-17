import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <div className={styles.StoreName}>Magic Collection</div>
      <div className={styles.Tagline}>tea shop</div>
    </div>
  );
}
