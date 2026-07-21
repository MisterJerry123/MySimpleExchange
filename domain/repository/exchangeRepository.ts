import { Currency } from "../model/currency";
import { ExchangeInfo } from "../model/exchangeInfo";

export interface ExchangeRepository{
    getCurrencies():Promise<ExchangeInfo>
}