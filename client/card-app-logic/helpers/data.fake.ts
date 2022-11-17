import { ICard, ITag } from "../hexagon/models/Card";
import { CardPost } from "../hexagon/models/CardPost";

export const fakeTagList: ITag[] = [
  {
    id: 1,
    name: "web3",
    color: "red",
  },
  {
    id: 2,
    name: "clean code",
    color: "green",
  },
  {
    id: 3,
    name: "test",
    color: "blue",
  },
  {
    id: 4,
    name: "solidity",
    color: "yellow",
  },
];

export const fakeLevelList = [
  {
    id: 1,
    niveau: "Ultra facile",
    color: "",
    isActive: true,
  },
  {
    id: 2,
    niveau: "Très facile",
    color: "",
    isActive: false,
  },
  {
    id: 3,
    niveau: "Assez facile",
    color: "",
    isActive: false,
  },
  {
    id: 4,
    niveau: "Facile",
    color: "",
    isActive: false,
  },
  {
    id: 5,
    niveau: "Moins facile",
    color: "",
    isActive: false,
  },
  {
    id: 6,
    niveau: "Moyen",
    color: "",
    isActive: false,
  },
  {
    id: 7,
    niveau: "Moyen +",
    color: "",
  },
  {
    id: 8,
    niveau: "Difficile",
    color: "",
    isActive: false,
  },
  {
    id: 9,
    niveau: "Très difficile",
    color: "",
    isActive: false,
  },
  {
    id: 10,
    niveau: "Master Level",
    color: "",
    isActive: false,
  },
];

export const fakeCardList: ICard[] = [
  {
    id: "9D5F08536-3191-4143-8C57-2D05F6E73C09",
    createdBy: "user@ggmail.oik",
    createdAt: "2022-10-14T15:32:28.652Z",
    updateAt: "2022-10-14T15:32:28.652Z",
    question: "Qu’est ce qu’un Layer 2 ?",
    answer: "Je ne sais pas",
    level: fakeLevelList[0],
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
    level: fakeLevelList[1],
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
    level: fakeLevelList[2],
    vote: 1,
    isActive: true,
    tag: ["ETH", "dev"],
    category: [],
  },
];

export const fakepostNewCard: CardPost = {
  question: "Qu’est ce que le Result enum ?",
  answer: "answer",
  level: fakeLevelList[2],

  tag: ["ETH", "dev"],
  category: [],
};

export const fakepostCardReturn = {
  identifiers: [
    {
      id: "9bb53266-002a-47c7-9b66-cc13bc4cf991",
    },
  ],
};
