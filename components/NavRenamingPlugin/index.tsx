import {useEffect} from 'react';

const NameMap = {
  'Zhen Wen': 'Home'
};

export const NavRenamingPlugin = () => {
  useEffect(() => {
    const h1 = document.querySelector('h1');
    const nav = h1.nextElementSibling.firstElementChild;
      console.log(nav.childNodes);
    nav.childNodes.forEach((node) => {
      const navName = node.textContent;
      if (navName in NameMap) {
        node.textContent = NameMap[navName];
      }
    });
  });
  return <></>;
};

export default NavRenamingPlugin;