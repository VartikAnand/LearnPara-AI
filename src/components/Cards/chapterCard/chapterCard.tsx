import Link from "next/link";
import React from "react";
import { BsBodyText } from "react-icons/bs";

interface Chapter {
  id: number;
  color: string;
  title: string;
  chapter: string;
  text_response: string;
}

interface ChapterCardProps {
  chapterData: Chapter[];
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapterData }) => {
  const visibleChapters = chapterData.slice(0, -1); // Exclude the last index

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-20">
      {visibleChapters.map((chapter, index) => (
        <div className="card" key={chapter.id}>
          <Link href={`/modules/[chapters]?chapters=${encodeURIComponent(chapter)}`}>
            <div className="flex flex-col items-center justify-center">
              <div className={`flex rounded-full w-12 h-12 text-3xl text-green-600 justify-center align-middle items-center`}>
                <BsBodyText />
              </div>
              <h1>Module {index + 1}</h1>
              <p className="px-5">
                {chapter.replace(/^\d+(?:\.\s*)?/, "") ?? ""}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ChapterCard;
