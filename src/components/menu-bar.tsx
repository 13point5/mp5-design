import { Button } from "@/components/ui/button";
import { MenuItem } from "@/types";
import {
  BrainIcon,
  FileIcon,
  FlaskConicalIcon,
  SettingsIcon,
} from "lucide-react";

type Props = {
  value: MenuItem;
  onChange: (value: MenuItem) => void;
};

const MenuBar = ({ value, onChange }: Props) => {
  return (
    <div className="h-full border-r-2">
      <div className="h-full w-full flex flex-col gap-4 p-2">
        <MenuItemButton
          onClick={() => onChange(MenuItem.fileExplorer)}
          icon={<FileIcon />}
          active={value === MenuItem.fileExplorer}
        />
        <MenuItemButton
          onClick={() => onChange(MenuItem.aiAssistant)}
          icon={<BrainIcon />}
          active={value === MenuItem.aiAssistant}
        />
        <MenuItemButton
          onClick={() => onChange(MenuItem.experiments)}
          icon={<FlaskConicalIcon />}
          active={value === MenuItem.experiments}
        />
        <MenuItemButton
          onClick={() => onChange(MenuItem.settings)}
          icon={<SettingsIcon />}
          active={value === MenuItem.settings}
        />
      </div>
    </div>
  );
};

export default MenuBar;

const MenuItemButton = ({
  onClick,
  icon,
  active,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  active: boolean;
}) => {
  return (
    <Button
      onClick={onClick}
      size="icon"
      variant={active ? "default" : "ghost"}
    >
      {icon}
    </Button>
  );
};
