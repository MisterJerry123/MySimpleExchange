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
        // 💡 기존 객체의 값을 알맹이만 쏙 빼서 '새로운 객체'로 복사합니다. (주소값이 완전히 달라짐)
        const currentFrom = { ...fromCurrency };
        const currentTo = { ...toCurrency };

        // 💡 완전히 새로 생성된 객체를 찔러넣어 주어야 리액트가 "어? 데이터가 바뀌었네!" 하고 UI를 다시 그립니다.
        setFromCurrency(currentTo);
        setToCurrency(currentFrom);
    };

    return {
        fromCurrency,
        toCurrency,
        selectFromCurrency,
        swapCurrencies
    };

}