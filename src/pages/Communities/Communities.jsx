import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import styles from "./Communities.module.css";

const Communities = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.communitiesContainer}>
            <h1>Communities</h1>
            <div className={styles.communitiesList}>
              {/* Add community items here */}
              <p>No communities yet</p>
            </div>
          </div>
        </main>
        <Rightbar />
      </div>
    </div>
  );
};

export default Communities; 