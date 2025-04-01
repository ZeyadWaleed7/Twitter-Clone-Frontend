import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import styles from "./Premium.module.css";

const Premium = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.premiumContainer}>
            <h1>Premium</h1>
            <div className={styles.premiumContent}>
              <h2>Upgrade to Premium</h2>
              <p>Get access to exclusive features and content</p>
              <button className={styles.upgradeButton}>Upgrade Now</button>
            </div>
          </div>
        </main>
        <Rightbar />
      </div>
    </div>
  );
};

export default Premium; 