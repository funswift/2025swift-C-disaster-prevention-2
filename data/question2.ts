// questions2.ts
export type Option = {
  label: string;
  value: string;
};

export type Question = {
  id: string;
  type: "radio" | "checkbox"; // ラジオ or 複数選択
  name: string;
  text: string;
  options: Option[];
};

export const questions2: Question[] = [
  
   {
     id: "q6",
     type: "checkbox",
     name: "stockpile-items",
     text: "災害に備えて備蓄しているものを選択してください（複数選択可）",
     options: [
       { label: "食料", value: "food" },
       { label: "水", value: "water" },
       { label: "簡易トイレ", value: "toilet" },
       { label: "医薬品", value: "medicine" },
       { label: "モバイルバッテリー", value: "battery" },
     ],
   },
];

// export interface Question {
//   id: string;
//   type: "radio" | "checkbox";
//   name: string;
//   text: string;
//   options: { label: string; value: string }[];
// }

// export const questions: Question[] = [
//   {
//     id: "q1",
//     type: "radio",
//     name: "contact-method",
//     text: "非常時の家族との連絡手段を決めていますか？",
//     options: [
//       { label: "はい", value: "yes" },
//       { label: "いいえ", value: "no" },
//     ],
//   },
//   // ...残りの質問
// ];