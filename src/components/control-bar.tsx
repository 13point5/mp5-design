import { Button } from "@/components/ui/button";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ControlBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPause = () => {
    if (progress >= 100) {
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            intervalRef.current && clearInterval(intervalRef.current);
            setIsPlaying(false);
            return 100;
          }
          return prevProgress + 10; // Increments by 10% every second
        });
      }, 1000);
    } else {
      intervalRef.current && clearInterval(intervalRef.current);
    }

    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="w-full px-2 py-1 flex gap-2 items-center justify-between">
      <Button size="icon" onClick={handlePlayPause} variant="ghost">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
      <div className="flex-1 w-full bg-gray-300 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ControlBar;
