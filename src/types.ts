export type HTMLError = {
  extract: string;
  firstColumn: number;
  hiliteLength: number;
  hiliteStart: number;
  lastColumn: number;
  lastLine: number;
  message: string;
  type: "error";
};

export enum MenuItem {
  fileExplorer = "fileExplorer",
  aiAssistant = "aiAssistant",
  experiments = "experiments",
  settings = "settings",
}
