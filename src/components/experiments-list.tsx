const ExperimentsList = () => {
  return (
    <div className="h-full border-r-2 flex flex-col gap-4 w-[400px] px-2 py-4">
      <span className="text-lg font-bold">Experiments</span>

      <div className="rounded-md bg-slate-100 p-2 flex items-center gap-2">
        <div className="bg-blue-200 rounded-md w-8 h-8"></div>
        <div className="flex flex-col">
          <span className="text-md truncate">
            Large border radius and shadow
          </span>
          <span className="text-xs text-gray-500">1 hour ago</span>
        </div>
      </div>

      <div className="rounded-md bg-slate-100 p-2 flex items-center gap-2">
        <div className="bg-red-200 rounded-md w-8 h-8"></div>
        <div className="flex flex-col">
          <span className="text-md truncate">Dynamic BG for cards</span>
          <span className="text-xs text-gray-500">3 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default ExperimentsList;
