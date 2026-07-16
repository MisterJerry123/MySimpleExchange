import React from "react";
import { renderHook, act, waitFor } from "@testing-library/react-native";
import { useCurrencyViewModel } from "../../../presentation/hooks/mainViewModel";
import { diContext } from "../../../core/di/diContext";
import { Currency } from "../../../domain/model/currency";
import { ExchangeRepository } from "../../../domain/repository/exchangeRepository";

describe("mainViewModel 유닛 테스트", () => {
    const mockCurrencies: Currency[] = [
        { code: "USD", rate: 1.0 },
        { code: "KRW", rate: 1300.0 }
    ];

    const mockExchangeRepository: ExchangeRepository = {
        getCurrencies: jest.fn().mockResolvedValue(mockCurrencies)
    };
    const wrapper = ({ children }: { children: React.ReactNode }) => 
        React.createElement(diContext.Provider, { value: { exchangeRepository: mockExchangeRepository } }, children);

    test("swapCurrencies를 하면 보내는 부분과 받는 부분의 금액과 통화가 서로 바뀌어야 한다.", async () => {
        //given
        const { result } = await renderHook(() => useCurrencyViewModel(), { wrapper });

        await waitFor(() => {
            expect(result.current.currencies.length).toBeGreaterThan(0);
        });

        await act(async () => {
            result.current.selectFromCurrency(mockCurrencies[0]);
        });

        await act(async () => {
            result.current.selectToCurrency(mockCurrencies[1]);
        });

        await act(async () => {
            result.current.changeFromPrice("10");
        });

        //swap전 상태
        const originalFromCurrency = result.current.fromCurrency;
        const originalToCurrency = result.current.toCurrency;
        const originalFromPrice = result.current.fromPrice;
        const originalToPrice = result.current.toPrice;

        //when
        await act(async () => {
            result.current.swapCurrencies();
        });

        //then
        expect(result.current.fromCurrency).toEqual(originalToCurrency);
        expect(result.current.toCurrency).toEqual(originalFromCurrency);
        expect(result.current.fromPrice).toBe(originalToPrice);
        expect(result.current.toPrice).toBe(originalFromPrice);
    });
});
