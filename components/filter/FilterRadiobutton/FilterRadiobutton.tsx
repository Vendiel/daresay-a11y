import { ChangeEventHandler } from "react";
import styles from "./FilterRadiobutton.module.css";

interface Props {
  label: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FilterRadiobutton = (props: Props) => {
  const { label, id, name, value, checked, onChange } = props;

  return (
    <>
      <div className={styles.radiobutton}>
        <input type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
};
