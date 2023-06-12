import React from "react";
import "./ChapterListCard.css";

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
    <div className="chapterList mb-2 rounded-md p-2 m-5 lg:m-2 lg:ml-3 sm:m-2" style={{ maxHeight: chapterName.length > 100 ? '18rem' : '8rem', overflow: 'hidden' }}>
    <div className="flex flex-row">
      <div className="flex justify-items-start pr-3">
        <h1 className="overflow-hidden">
          {chapterName.length > 100 ? `${chapterName.substring(0, 80)}.....` : chapterName}
        </h1>
      </div>
      <div className="flex flex-grow"></div>
      <div className="flex justify-items-end">BookMark</div>
    </div>
    <div className="flex justify-end mt-3 end-align" onClick={handleClick}>
      Start
    </div>
  </div>
  
  
  
  );
};

export default ChapterListCard;
