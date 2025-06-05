import Logo from "./logo";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import { ThemeSwitch } from "./theme-switch";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 md:px-24 xl:px-24 h-16 sm:h-18 md:h-16  shadow sticky top-0 z-40 bg-background">
      <Logo />
      <div className="flex items-center space-x-3.5">
        <Nav />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
}
