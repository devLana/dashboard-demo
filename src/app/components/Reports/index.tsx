import styles from "./Reports.module.css";

const data = [
  { name: "Report 1", date: "2022-10-11", type: "link" },
  { name: "Report 2", date: "2022-10-20", type: "button" },
  { name: "Report 3", date: "2022-12-31", type: "button" },
  { name: "Report 4", date: "2023-02-05", type: "link" },
  { name: "Report 5", date: "2023-05-05", type: "button" },
] as const;

const Reports = () => {
  const reports = data.map(({ date, name, type }) => (
    <div className={styles.report} key={name}>
      <div>
        <p>{name}</p>
        <time dateTime={date}>{new Date(date).toDateString()}</time>
      </div>
      {type === "link" ? (
        <a href="#">Read More...</a>
      ) : (
        <button>Download</button>
      )}
    </div>
  ));

  return (
    <div className={styles.reports}>
      <h3>Reports</h3>
      <div>{reports}</div>
    </div>
  );
};

export default Reports;
