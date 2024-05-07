import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettingsStore } from "@/lib/settings-store";

const fontSizes = [10, 12, 14, 16, 18, 20, 24];
const fontStyles = ["monospace", "opendyslexic", "sans-serif", "serif"];

const Settings = () => {
  const { fontSize, setFontSize, fontFamily, setFontFamily } =
    useSettingsStore();

  return (
    <div className="h-screen border-r-2 px-4 py-2 flex flex-col gap-4">
      <span className="text-lg font-bold">Settings</span>

      <div className="space-y-1">
        <span className="text-sm">Font Size</span>
        <Select value={fontSize} onValueChange={setFontSize}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Font Size" />
          </SelectTrigger>
          <SelectContent>
            {fontSizes.map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <span className="text-sm">Font Style</span>
        <Select value={fontFamily} onValueChange={setFontFamily}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Font Style" />
          </SelectTrigger>
          <SelectContent>
            {fontStyles.map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Settings;
