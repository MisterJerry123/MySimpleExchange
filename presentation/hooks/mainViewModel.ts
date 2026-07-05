import { useState } from "react";
import { initialState, MainState } from "./mainState";
import { Currency } from "../../domain/model/currency";

export function useCurrencyViewModel() {

    const [state, setState] = useState<MainState>(initialState);


    const selectFromCurrency = (currency: Currency) => {
        console.log("selectFromCurrency1", currency);

        setState(prevState => ({
            ...prevState,
            fromCurrency: currency,
            toCurrency: {
                ...prevState.toCurrency,
                price: (parseFloat(currency.price) * (prevState.toCurrency.rate / currency.rate))
                    .toLocaleString('ko-KR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })
            },

        }));

    }
    const selectToCurrency = (currency: Currency) => {
        setState(prevState => ({
            ...prevState,
            toCurrency: currency,
            fromCurrency: {
                ...prevState.fromCurrency,
                price: (parseFloat(currency.price) * (prevState.fromCurrency.rate) / currency.rate).toLocaleString('ko-KR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })
            }
        }));
    }



    const swapCurrencies = () => {
        setState(prevState => ({
            ...prevState,
            fromCurrency: prevState.toCurrency,
            toCurrency: prevState.fromCurrency
        }));
    };

    // const changeFromPrice = (amount: string) => {
    //     const { fromCurrency, toCurrency } = state;
    //     const exchangeRate = toCurrency.rate / fromCurrency.rate;
    //     setState(prevState => ({
    //         ...prevState,
    //         price: parseFloat(amount) * exchangeRate
    //     }));
    // }

    return {
        fromCurrency: state.fromCurrency,
        toCurrency: state.toCurrency,
        selectFromCurrency,
        selectToCurrency,
        swapCurrencies,
        //changeFromPrice
    };

}