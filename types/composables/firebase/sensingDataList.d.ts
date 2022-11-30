import { Timestamp } from "firebase/firestore";

/**
 * アプリ上で扱うセンシングデータのインターフェース
 */
export interface ISensingData {
  id: string
  year: string
  month: string
  day: string
  hour: string
  minute: string
  addedDate: Timestamp
  temperature: number
  waterAmount: number
}

export type sensingDataListType = ISensingData[]
