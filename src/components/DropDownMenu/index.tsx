import { useState } from 'react';

interface Iprops {
  title: string;
}

const DropDownMenu = ({ title }: Iprops) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return <button onClick={openMenu}>{title}</button>;
};

export default DropDownMenu;
