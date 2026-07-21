import { useContext, useEffect, useState } from "react";
import { initialState, MainState } from "./mainState";
import { Currency } from "../../domain/model/currency";
import { diContext } from "../../core/di/diContext";



export function useCurrencyViewModel() {
    const { exchangeRepository } = useContext(diContext)
    const [state, setState] = useState<MainState>(initialState);
    useEffect(() => {
        const fetchCurrencies = async () => {
            const result = await exchangeRepository.getCurrencies()

            setState(prevState => ({
                ...prevState,
                currencies: result.currencies,
                baseDate: result.baseDate
            }))
            console.log("mainviewmodel", result);

        }
        fetchCurrencies()

    }, [])




    const selectFromCurrency = (currency: Currency) => {
        console.log("selectFromCurrency1", currency);

        setState(prevState => ({
            ...prevState,
            fromCurrency: currency,
            toCurrency: {
                ...prevState.toCurrency,
            },
            toPrice: (parseFloat(prevState.fromPrice) * (prevState.toCurrency.rate / currency.rate))
                .toLocaleString('ko-KR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
        }
        )
        );


    }
    const selectToCurrency = (currency: Currency) => {
        setState(prevState => ({
            ...prevState,
            toCurrency: currency,
            fromCurrency: {
                ...prevState.fromCurrency,
            },
            fromPrice: (parseFloat(prevState.toPrice) * (prevState.fromCurrency.rate) / currency.rate).toLocaleString('ko-KR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        }));
    }



    const swapCurrencies = () => {
        setState(prevState => ({
            ...prevState,
            fromCurrency: prevState.toCurrency,
            toCurrency: prevState.fromCurrency,
            toPrice: prevState.fromPrice,
            fromPrice: prevState.toPrice
        }));
    };

    const openCurrencySelection = (isFromCurrency: boolean) => {
        if (isFromCurrency) {
            setState(prevState => ({
                ...prevState,
                isFromCurrencySelected: true
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                isToCurrencySelected: true
            }));
        }
    };

    const closeCurrencySelection = (isFromCurrency: boolean) => {
        if (isFromCurrency) {
            setState(prevState => ({
                ...prevState,
                isFromCurrencySelected: false
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                isToCurrencySelected: false
            }));
        }
    };

    const changeFromPrice = (text: string) => {
        setState(prevState => ({
            ...prevState,
            fromPrice: text,
            toPrice: (parseFloat(text) * (prevState.toCurrency.rate / prevState.fromCurrency.rate))
                .toLocaleString('ko-KR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
        }))
    }

    const changeToPrice = (text: string) => {
        setState(prevState => ({
            ...prevState,
            toPrice: text,
            fromPrice: (parseFloat(text) * (prevState.fromCurrency.rate / prevState.toCurrency.rate))
                .toLocaleString('ko-KR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
        }))
    }



    return {
        ...state,
        selectFromCurrency,
        selectToCurrency,
        swapCurrencies,
        openCurrencySelection,
        closeCurrencySelection,
        changeFromPrice,
        changeToPrice
    };

}