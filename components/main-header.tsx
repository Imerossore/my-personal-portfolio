import Logo from "./logo";
import Nav from "./nav";
import { ThemeSwitch } from "./theme-switch";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between px-3.5 h-16 shadow sticky top-0 z-40 bg-background">
      <Logo />
      <div className="flex items-center space-x-3">
        <Nav />
        <ThemeSwitch />
      </div>
    </header>
  );
}
