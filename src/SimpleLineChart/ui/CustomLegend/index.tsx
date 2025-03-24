import styles from "./CustomLegend.module.css";
import { LEGEND_LINES } from "../../constants";
import { Legend } from "recharts";

const LegendContent = () => {
  return (
    <ul className={styles.legend}>
      {LEGEND_LINES.map((item) => (
        <li className={styles.item} key={item.name}>
          <div className={styles.line} style={{ backgroundColor: item.bg }} />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export const CustomLegend = () => {
  return <Legend content={LegendContent} verticalAlign="bottom" height={36} />;
};
