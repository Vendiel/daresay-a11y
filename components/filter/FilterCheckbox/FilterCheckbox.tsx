import { ChangeEventHandler } from "react";

interface Props {
  item: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FilterCheckbox = (props: Props) => {
  const { item, checked, onChange } = props;
  return (
    <li>
      <input id={item} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={item}>{item}</label>
    </li>
  );
};
