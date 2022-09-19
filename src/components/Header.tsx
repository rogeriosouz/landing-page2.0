import { Lock } from 'phosphor-react';
import logo from '../assets/logo.png';

export function Header() {
  return (
    <header className="m-auto mt-10 max-w-7xl flex items-center justify-between">
      <nav
        className="flex items-center h-full gap-11
      "
      >
        <a className="font-medium text-sm">ABOUT</a>
        <a className="font-medium text-sm">HOW IT WORKS</a>
        <a className="font-medium text-sm">CONTACT</a>
      </nav>
      <span>
        <img src={logo} alt="logo" />
      </span>
      <Lock size={35} />
    </header>
  );
}
