import React from "react";
import "./ChapterListCard.css";
import StartButton from "@/components/ReusableComponents/StartBtn/StartButton";

interface ChapterListCardProps {
  chapterName: string;
  onClick: (chapterName: string) => void;
}

const ChapterListCard: React.FC<ChapterListCardProps> = ({
  chapterName,
  onClick,
}) => {
  const handleClick = () => {
    onClick(chapterName);
  };

  return (
    <div className="chapterList mb-2 rounded-md p-2 m-5 lg:m-2 lg:ml-3 sm:m-4 overflow-hidden" >
    <div className="flex flex-row">
      <div className="flex justify-items-start pr-3">
        <h1 className="overflow-hidden">
          {chapterName.length > 100 ? `${chapterName.substring(0, 100)}.....` : chapterName}
        </h1>
      </div>
    </div>
    <div className=" flex justify-end mt-3 end-align" onClick={handleClick}>
      <StartButton/>
    </div>
  </div>
  
  
  
  );
};

export default ChapterListCard;
