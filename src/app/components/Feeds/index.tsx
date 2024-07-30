import styles from "./Feeds.module.css";

const data = [
  {
    title: "Feed Title 1",
    excerpt:
      "Feed Title 1. Feed Title 1. Feed Title 1. Feed Title 1. Feed Title 1. Feed Title 1. Feed Title 1. Feed Title 1. Feed Title 1",
    createdAt: "2 hours ago",
  },
  {
    title: "Feed Title 2. Feed Title 2. Feed Title 2. Feed Title 2.",
    excerpt:
      "Feed Title 2. Feed Title 2. Feed Title 2. Feed Title 2. Feed Title 2. Feed Title 2. Feed Title 2. Feed Title 2. Feed Title 2",
    createdAt: "2 days ago",
  },
  {
    title: "Feed Title 3. Feed Title 3. Feed Title 3. Feed Title 3.",
    excerpt:
      "Feed Title 3. Feed Title 3. Feed Title 3. Feed Title 3. Feed Title 3. Feed Title 3. Feed Title 3. Feed Title 3. Feed Title 3",
    createdAt: "5 days ago",
  },
  {
    title: "Feed Title 4. Feed Title 4.",
    excerpt:
      "Feed Title 4. Feed Title 4. Feed Title 4. Feed Title 4. Feed Title 4. Feed Title 4. Feed Title 4. Feed Title 4. Feed Title 4",
    createdAt: "2 weeks ago",
  },
] as const;

const Feeds = () => {
  return (
    <div className={styles.feeds}>
      <h3>Feeds</h3>
      <div className={styles.feedsWrapper}>
        {data.map(({ createdAt, excerpt, title }, index) => (
          <div key={index} className={styles.feed}>
            <div>
              <p>{title}</p>
              <p>{createdAt}</p>
            </div>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
