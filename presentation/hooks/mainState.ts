import { Currency } from "../../domain/model/currency";


export interface MainState {
    fromCurrency: Currency;
    toCurrency: Currency;
}

export const initialState: MainState = { //mock 데이터가 들어있음.
    fromCurrency: {
        code: "USD",
        price: "1.0",
        rate: 1.0,
    },
    toCurrency: {
        code: "KRW",
        price: "1300.0",
        rate: 1300.0,
    }
};