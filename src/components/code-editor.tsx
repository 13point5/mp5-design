import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { useSettingsStore } from "@/lib/settings-store";

type Props = {
  lang: string;
  value: string;
  onChange: (value: string) => void;
};

function CodeEditor({ lang, value, onChange }: Props) {
  const { fontSize, fontFamily } = useSettingsStore();

  return (
    <AceEditor
      mode={lang}
      theme="monokai"
      value={value}
      onChange={onChange}
      name={`editor_${lang}`}
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="100%"
      fontSize={parseInt(fontSize, 10)}
      style={{
        fontFamily:
          fontFamily === "monospace" ? "Ubuntu Sans Mono" : fontFamily,
      }}
    />
  );
}

export default CodeEditor;
