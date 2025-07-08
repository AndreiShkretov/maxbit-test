import { MenuList } from "features/menu/ui/MenuList";
import "./Layout.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="layout">
    <div className="sidebar">
      <MenuList />
    </div>
    <div className="content">{children}</div>
  </div>
);
