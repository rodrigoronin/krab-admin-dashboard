import { FaBug, FaCirclePlay, FaUserPlus } from "react-icons/fa6";
import style from "@styles/SidebarRight.module.css";

const notifications = [
  { icon: FaBug, text: "You fixed a bug.", time: "Just now" },
  { icon: FaUserPlus, text: "New user registered.", time: "59 minutes ago" },
  { icon: FaBug, text: "You fixed a bug.", time: "12 hours ago" },
  { icon: FaCirclePlay, text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
];

const activities = [
  "Changed the style.",
  "Released a new version.",
  "Submitted a bug.",
  "Modified data in Page X.",
  "Deleted a page in Project X.",
];

const contacts = [
  "Natali Craig",
  "Drew Cano",
  "Andi Lane",
  "Koray Okumus",
  "Kate Morrison",
  "Melody Macy",
];

const SidebarRight = () => {
  return (
    <aside className={style.container}>
      <section className={style.section}>
        <h2 className={style.title}>Notifications</h2>
        <div className={style.list}>
          {notifications.map(({ icon: Icon, text, time }) => (
            <div key={`${text}-${time}`} className={style.item}>
              <span className={style.icon}>
                <Icon size={12} />
              </span>
              <div>
                <p className={style.text}>{text}</p>
                <span className={style.meta}>{time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={style.section}>
        <h2 className={style.title}>Activities</h2>
        <div className={style.list}>
          {activities.map((item, index) => (
            <div key={item} className={style.item}>
              <span className={`${style.avatar} ${style[`avatar-${index % 5}`]}`}></span>
              <div>
                <p className={style.text}>{item}</p>
                <span className={style.meta}>{index === 4 ? "Feb 2, 2026" : "Just now"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={style.section}>
        <h2 className={style.title}>Contacts</h2>
        <div className={style.list}>
          {contacts.map((item, index) => (
            <div key={item} className={style["contact-item"]}>
              <span className={`${style.avatar} ${style[`avatar-${index % 5}`]}`}></span>
              <span className={style.text}>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default SidebarRight;
