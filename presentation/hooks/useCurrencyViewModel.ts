import { useState } from "react";
import { Currency } from "../../domain/model/Currency";

export function useCurrencyViewModel() {
    //mock
    const [fromCurrency, setFromCurrency] = useState<Currency>({
        code: "USD",
        rate: 1.0,
    });

    const [toCurrency, setToCurrency] = useState<Currency>({
        code: "KRW",
        rate: 1400.0,
    });

    const selectFromCurrency = (currency: Currency) => {
        setFromCurrency(currency);
    }

    const swapCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    }

    return {
        fromCurrency,
        toCurrency,
        selectFromCurrency,
    };

}