import { Link } from "react-router-dom";
import * as C from "./styles";

interface SidebarItemProps {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

function SidebarItem({
  title,
  description,
  icon,
  path,
  active,
}: SidebarItemProps) {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>

        <C.IconArea active={active}> {icon} </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
}

export default SidebarItem;
