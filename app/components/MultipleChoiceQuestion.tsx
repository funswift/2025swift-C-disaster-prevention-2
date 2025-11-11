"use client";
import { useState } from "react";

interface MultipleChoiceQuestionProps {
  text: string;
  options: { label: string; value: string }[];
  callback: (value: string[]) => void;
}

export default function MultipleChoiceQuestion({
  text,
  options,
  callback,
}: MultipleChoiceQuestionProps) {
  const baseClasses = "px-8 py-4 rounded transition-colors duration-200";
  const selectedClasses = "bg-[#FEAF71] border-3 border-[#CCBFA7]";
  const unselectedClasses = "bg-[#FFFFFF] border-3 border-[#CCBFA7]";
  const [choices, setChoices] = useState<number[]>([]);

  return (
    <div className="my-6 p-4 rounded flex flex-col">
      <p className="text-3xl p-4">{text}</p>
      <div className="p-4 flex flex-row gap-2">
        {options.map((option, index) => (
          <button
            key={index}
                className={`${baseClasses} ${choices.includes(index) ? selectedClasses : unselectedClasses} rounded-lg !text-2xl`}
            onClick={() => {
              const tmp = choices.includes(index)
                ? choices.filter((i) => i !== index)
                : [...choices, index];
              setChoices(tmp);
              callback(tmp.map((i) => options[i].value));
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
