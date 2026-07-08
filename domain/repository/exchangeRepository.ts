import { Currency } from "../model/currency";

export interface ExchangeRepository{
    getCurrencies():Promise<Currency[]>
}