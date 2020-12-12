import { ChangeEventHandler } from "react";

interface Props {
  item: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FilterRadiobutton = (props: Props) => {
  const { item, checked, onChange } = props;
  return (
    <li>
      <input id={item} type="radio" checked={checked} onChange={onChange} />
      <label htmlFor={item}>{item}</label>
    </li>
  );
};
