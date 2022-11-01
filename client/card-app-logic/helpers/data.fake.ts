import { ICard } from "../hexagon/models/Card";

export const fakeCardList: ICard[] = [
  {
    id: "9D5F08536-3191-4143-8C57-2D05F6E73C09",
    createdBy: "user@ggmail.oik",
    createdAt: "2022-10-14T15:32:28.652Z",
    updateAt: "2022-10-14T15:32:28.652Z",
    question: "Qu’est ce qu’un Layer 2 ?",
    answer: "Je ne sais pas",
    level: 1,
    vote: 1,
    isActive: true,
    tag: ["ETH", "Solidity"],
    category: [],
  },
  {
    id: "9bb53266-002a-47c7-9b66-cc13bc4cf991",
    createdBy: "user@ggmail.oik",
    createdAt: "2022-10-14T15:32:28.652Z",
    updateAt: "2022-10-14T15:32:28.652Z",
    question: "Comment marche les modules ?",
    answer: "answer",
    level: 1,
    vote: 1,
    isActive: true,
    tag: ["ETH", "Solidity", "module"],
    category: [],
  },
  {
    id: "5e449877-f94b-4698-a521-e791cc66c503",
    createdBy: "user@ggmail.oik",
    createdAt: "2022-10-14T19:29:52.704Z",
    updateAt: "2022-10-14T19:29:52.704Z",
    question: "Qu’est ce que le Result enum ?",
    answer: "answer",
    level: 1,
    vote: 1,
    isActive: true,
    tag: ["ETH", "dev"],
    category: [],
  },
];

export const fakepostCardReturn = {
  identifiers: [
    {
      id: "9bb53266-002a-47c7-9b66-cc13bc4cf991",
    },
  ],
};
