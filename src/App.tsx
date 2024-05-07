import CodeView from "@/CodeView";
import AIAssistant from "@/components/ai-assistant";
import ExperimentsList from "@/components/experiments-list";
import FileExplorer from "@/components/file-explorer";
import MenuBar from "@/components/menu-bar";
import Settings from "@/components/settings";
import { MenuItem } from "@/types";
import { useState } from "react";

function App() {
  const [menuItem, setMenuItem] = useState<MenuItem>(MenuItem.fileExplorer);

  return (
    <div className="w-screen h-screen max-h-screen overflow-hidden flex">
      <MenuBar value={menuItem} onChange={setMenuItem} />

      {menuItem === MenuItem.fileExplorer && <FileExplorer />}
      {menuItem === MenuItem.aiAssistant && <AIAssistant />}
      {menuItem === MenuItem.experiments && <ExperimentsList />}
      {menuItem === MenuItem.settings && <Settings />}

      <CodeView />
    </div>
  );
}

export default App;
