import { Currency } from "../../domain/model/currency";


export interface MainState {
    baseDate:string
    fromCurrency: Currency;
    toCurrency: Currency;
    isFromCurrencySelected?: boolean;
    isToCurrencySelected?: boolean;
    currencies:Currency[],
    fromPrice:string,
    toPrice:string
}

export const initialState: MainState = { //mock 데이터가 들어있음.
    baseDate:"test",
    fromCurrency: {
        code: "USD",
        rate: 1.1448,
    },
    toCurrency: {
        code: "KRW",
        rate: 1752.95,
    },
    isFromCurrencySelected: false,
    isToCurrencySelected: false,
    currencies:[],
    fromPrice:"0",
    toPrice:"0"
};