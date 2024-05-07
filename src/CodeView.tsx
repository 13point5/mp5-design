import CodeEditor from "@/components/code-editor";
import ControlBar from "@/components/control-bar";
import ValidationErrorList from "@/components/error-messages";
import LivePreview from "@/components/live-preview";
import { Button } from "@/components/ui/button";
import { HTMLError } from "@/types";
import axios from "axios";
import { BlocksIcon, CodeIcon, PlayIcon } from "lucide-react";
import { useState } from "react";
import BlockModeImg from "@/assets/edublocks.png";

const initialState = {
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <p>This is a sample HTML to validate.</p>
  </body>
  </html>
  `,
  css: "",
  js: "",
};

const CodeView = () => {
  const [latestCode, setLatestCode] = useState(initialState);

  const [lastCode, setLastCode] = useState(initialState);

  const [htmlErrors, setHtmlErrors] = useState<HTMLError[]>([]);

  const [showConsole, setShowConsole] = useState(false);

  const [blockMode, setBlockMode] = useState(false);

  const handleChangeLatestCode = (lang: string, value: string) => {
    setLatestCode((prev) => ({ ...prev, [lang]: value }));
  };

  const handleRun = async () => {
    setLastCode({ ...latestCode });

    try {
      const response = await axios({
        method: "post",
        url: "https://validator.w3.org/nu/?out=json",
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
        data: latestCode.html,
      });

      setHtmlErrors(response.data.messages);
      setShowConsole(true);

      console.log("response", response);
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <div className="flex-1 h-full w-full flex">
        {blockMode ? (
          <img
            src={BlockModeImg}
            alt="Block Mode"
            className="max-w-[450px] max-h-full"
          />
        ) : (
          <CodeEditor
            lang="html"
            value={latestCode.html}
            onChange={(value) => handleChangeLatestCode("html", value)}
          />
        )}

        <div className="flex flex-col gap-2 w-full p-2 pb-0">
          <h3 className="text-lg font-bold">Preview</h3>
          <div className="flex gap-2 items-center w-fit">
            <Button
              size="sm"
              className="bg-green-600 py-1 px-2 h-fit"
              onClick={handleRun}
            >
              <PlayIcon className="w-4 h-4 mr-1" />
              Run
            </Button>

            <Button
              onClick={() => setBlockMode((prev) => !prev)}
              size="sm"
              className="bg-blue-500 py-1 px-2 h-fit"
            >
              {!blockMode ? (
                <BlocksIcon className="w-4 h-4 mr-1" />
              ) : (
                <CodeIcon className="w-4 h-4 mr-1" />
              )}
              {!blockMode ? "Block Mode" : "Code Mode"}
            </Button>

            <Button
              onClick={() => setShowConsole((prev) => !prev)}
              size="sm"
              variant="outline"
              className="py-1 px-2 h-fit"
            >
              Console
            </Button>
          </div>

          <div className="flex-1 border-2 rounded-md">
            <div className="px-2 py-2 flex items-center gap-2 bg-slate-200">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <LivePreview
              html={lastCode.html}
              css={lastCode.css}
              js={lastCode.js}
            />
          </div>
        </div>
      </div>

      <ControlBar />

      {showConsole && (
        <div className="flex flex-col gap-2 p-2 h-full overflow-auto border-t-2">
          <span className="text-sm font-medium">Console</span>
          <ValidationErrorList errors={htmlErrors} />
        </div>
      )}
    </div>
  );
};

export default CodeView;
