import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.notificationsContainer}>
            <h1>Notifications</h1>
            <div className={styles.notificationsList}>
              {/* Add notification items here */}
              <p>No new notifications</p>
            </div>
          </div>
        </main>
        <Rightbar />
      </div>
    </div>
  );
};

export default Notifications; 