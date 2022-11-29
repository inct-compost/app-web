import { Timestamp } from "firebase/firestore";

/**
 * アプリ上で扱うセンシングデータのインターフェース
 */
export interface ISensingData {
  id: string
  yaer: string
  mounth: string
  day: string
  hour: string
  min: string
  addedDate: Timestamp
  temperature: number
  waterAmount: number
}

export type sensingDataListType = ISensingData[]
