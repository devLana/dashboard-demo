import LineChart from "./components/LineChart";
import DashboardLayout from "./components/DashboardLayout";
import NewStaff from "./components/NewStaff";
import Reports from "./components/Reports";
import Stats from "./components/Stats";
import Feeds from "./components/Feeds";
import styles from "./page.module.css";

const Dashboard = () => (
  <DashboardLayout>
    <main className={styles.main}>
      <Stats />
      <section className={styles.analytics}>
        <LineChart />
        <Feeds />
      </section>
      <section className={styles.staff_reports}>
        <NewStaff />
        <Reports />
      </section>
    </main>
  </DashboardLayout>
);

export default Dashboard;

