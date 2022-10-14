import { CardPostResponse } from "../models/postCard";

export interface CardGateway {
  createCard(): Promise<CardPostResponse>;
}
