import { ExchangeInfoDto } from "../../../data/dto/exchangeInfoDto"
import { convertDto2ExchangeInfo } from "../../../data/mapper/exchangeInfoMapper"

describe("ExchangeInfoMapper 단위 테스트", () => {
    test("ExchangeInfoDto객체를 ExchangeInfo 객체로 올바르게 변환해야 한다.", () => {
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
        const result = convertDto2ExchangeInfo(mockDto)

        //then
        expect(3).toBe (result.currencies.length)
        expect("2026-07-07").toBe(result.baseDate)

    })
})