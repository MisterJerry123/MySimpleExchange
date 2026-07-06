import { Currency } from "../../domain/model/currency";


export interface MainState {
    fromCurrency: Currency;
    toCurrency: Currency;
    isFromCurrencySelected?: boolean;
    isToCurrencySelected?: boolean;
}

export const initialState: MainState = { //mock 데이터가 들어있음.
    fromCurrency: {
        code: "USD",
        price: "1.0",
        rate: 1.1448,
    },
    toCurrency: {
        code: "KRW",
        price: "1300.0",
        rate: 1752.95,
    },
    isFromCurrencySelected: false,
    isToCurrencySelected: false,
};