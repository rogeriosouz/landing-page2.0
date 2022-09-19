import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="w-full min-h-[175px] flex items-center justify-center">
      <div className="max-w-[10810px] mx-auto h-[117px] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex gap-12">
            <a className="font-medium trext-[14px] text-[#404041]">ABOUT</a>
            <a className="font-medium trext-[14px] text-[#404041]">
              HOW IT WORKS
            </a>
            <a className="font-medium trext-[14px] text-[#404041]">CONTACT</a>
          </div>
          <img src={logo} alt="logo" />
          <div className="flex items-center">
            <div className="flex gap-12 mr-[61px]">
              <a className="font-bold trext-[14px] text-[#404041]">Signup</a>
              <a className="font-bold trext-[14px] text-[#404041]">Login</a>
            </div>
            <div className="flex gap-7">
              <FacebookLogo size={23} weight="thin" />
              <InstagramLogo size={23} weight="thin" />
              <YoutubeLogo size={23} weight="thin" />
            </div>
          </div>
        </div>
        <div className="flex gap-16 justify-between items-center">
          <p className="font-medium text-[14px] text-[#1b1b1b7c]">
            Copyright © 2020.Besnik creative
          </p>
          <div className="w-[661px] h-[1px] bg-[#565B58]"></div>
          <p className="font-medium text-[14px] text-[#1b1b1b7c]">
            Designed by Besnik
          </p>
        </div>
      </div>
    </footer>
  );
}
