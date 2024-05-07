const FileExplorer = () => {
  return (
    <div className="h-screen flex flex-col gap-4 py-4 px-2 border-r-2">
      <span className="text-lg font-bold">Files</span>

      <FileItem active={true}>index.html</FileItem>
      <FileItem active={false}>styles.css</FileItem>
    </div>
  );
};

export default FileExplorer;

type FileItemProps = {
  children: React.ReactNode;
  active: boolean;
};

const FileItem = ({ children, active }: FileItemProps) => {
  return (
    <div
      className={`cursor-pointer rounded-md border-2 border-transparent px-2 py-1 hover:bg-slate-100 ${
        active && "border-blue-500 bg-slate-200 hover:bg-slate-300"
      } `}
    >
      {children}
    </div>
  );
};
