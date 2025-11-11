// questions.ts
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

export const questions: Question[] = [
  {
    id: "q1",
    type: "radio",
    name: "contact-method",
    text: "非常時の家族との連絡手段を決めていますか？",
    options: [
      { label: "はい", value: "yes" },
      { label: "いいえ", value: "no" },
    ],
  },
  {
    id: "q2",
    type: "radio",
    name: "document-storage",
    text: "マイナンバーカード・通帳などの大切な書類の保管場所を家族と共有していますか？",
    options: [
      { label: "はい", value: "yes" },
      { label: "いいえ", value: "no" },
    ],
  },
  {
    id: "q3",
    type: "radio",
    name: "evacuation-route",
    text: "災害の種類ごとの避難所とそこまでの経路を確認していますか？",
    options: [
      { label: "はい", value: "yes" },
      { label: "いいえ", value: "no" },
    ],
  },
  {
    id: "q4",
    type: "radio",
    name: "gathering-place",
    text: "連絡手段が断たれていた時の集合場所を決めていますか？",
    options: [
      { label: "はい", value: "yes" },
      { label: "いいえ", value: "no" },
    ],
  },
  {
    id: "q5",
    type: "radio",
    name: "stock-items",
    text: "水と食料を備蓄できていますか？",
    options: [
      { label: "できている", value: "yes" },
      { label: "できているがどれだけ必要かわからない", value: "no" },
      { label: "できていない", value: "no" },
      { label: "4", value: "no" },
      { label: "5", value: "no" }
    ],
  },
  
  // {
  //   id: "q5",
  //   type: "checkbox",
  //   name: "stockpile-items",
  //   text: "災害に備えて備蓄しているものを選択してください（複数選択可）",
  //   options: [
  //     { label: "食料", value: "food" },
  //     { label: "水", value: "water" },
  //     { label: "簡易トイレ", value: "toilet" },
  //     { label: "医薬品", value: "medicine" },
  //     { label: "モバイルバッテリー", value: "battery" },
  //   ],
  // },
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