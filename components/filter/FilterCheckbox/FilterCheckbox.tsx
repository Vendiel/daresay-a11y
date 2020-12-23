import { ChangeEventHandler } from "react";
import styles from "./FilterCheckbox.module.css";

interface Props {
  item: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FilterCheckbox = (props: Props) => {
  const { item, checked, onChange } = props;
  return (
    <li className={styles.checkbox}>
      <input id={item} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={item}>{item}</label>
    </li>
  );
};
