import { ChangeEventHandler } from "react";

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
    <li>
      <input type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};
