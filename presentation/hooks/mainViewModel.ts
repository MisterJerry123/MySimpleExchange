import { useState } from "react";
import { Currency } from "../../domain/model/Currency";
import { initialState, MainState } from "./mainState";

export function useCurrencyViewModel() {

    const [state, setState] = useState<MainState>(initialState);


    const selectFromCurrency = (currency: Currency) => {
        setState(prevState => ({
            ...prevState,
            fromCurrency: currency
        }));
    }
    const selectToCurrency = (currency: Currency) => {
        setState(prevState => ({
            ...prevState,
            toCurrency: currency
        }));
    }



    const swapCurrencies = () => {
        setState(prevState => ({
            ...prevState,
            fromCurrency: prevState.toCurrency,
            toCurrency: prevState.fromCurrency
        }));
    };

    return {
        fromCurrency: state.fromCurrency,
        toCurrency: state.toCurrency,
        selectFromCurrency,
        selectToCurrency,
        swapCurrencies
    };

}