import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import styles from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.messagesContainer}>
            <h1>Messages</h1>
            <div className={styles.messagesList}>
              {/* Add message items here */}
              <p>No messages yet</p>
            </div>
          </div>
        </main>
        <Rightbar />
      </div>
    </div>
  );
};

export default Messages; 