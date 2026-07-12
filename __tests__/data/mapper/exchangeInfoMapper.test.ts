import { ExchangeInfoDto } from "../../../data/dto/exchangeInfoDto"
import { convertDto2CurrencyList } from "../../../data/mapper/exchangeInfoMapper"

describe("ExchangeInfoMapper 단위 테스트", () => {
    test("DTO의 rates객체를 Currency 배열로 올바르게 변환해야 한다.", () => {
        //given
        const mockDto: ExchangeInfoDto = {
            amount: 1.0,
            base: "EUR",
            date: "2026-07-07",
            rates: {
                USD: 1.15,
                KRW: 1750.0,
                JPY: 185.0
            }
        }
        //when
        const result = convertDto2CurrencyList(mockDto)

        //then
        expect(3).toBe (result.length)

    })
})