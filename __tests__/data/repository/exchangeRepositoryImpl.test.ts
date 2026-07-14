import { ExchangeDataSource } from "../../../data/data_source/exchangeDataSource"
import { ExchangeInfoDto } from "../../../data/dto/exchangeInfoDto"
import { ExchangeRepositoryImpl } from "../../../data/repository/exchangeRepositoryImpl"
import { ExchangeRepository } from "../../../domain/repository/exchangeRepository"

describe("ExchangeRepositoryImpl 단위 테스트", () => {
    test("getCurrencies는 DataSource로부터 DTO를 성공적으로 받아와 Currency 도메인 배열로 올바르게 반환해야 한다", async () => {
        //given
        const mockDto: ExchangeInfoDto = {
            amount: 1.0,
            base: "EUR",
            date: "2026-07-15",
            rates: {
                USD: 1.15,
                KRW: 1750.0,
                JPY: 185.0
            }
        }

        const mockDataSource: ExchangeDataSource = {
            getAllExchangeInfos: jest.fn().mockResolvedValue(mockDto)
        }
        const mockRepository: ExchangeRepository = new ExchangeRepositoryImpl(mockDataSource)

        //when
        const result = await mockRepository.getCurrencies()
        
        //then
        expect(result.length).toBe(3)


    })

})