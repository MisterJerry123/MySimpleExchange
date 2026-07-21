import axios from "axios"
import { ExchangeInfoDto } from "../../../data/dto/exchangeInfoDto"
import { RemoteExchangeDataSourceImpl } from "../../../data/data_source/remoteExchangeDataSourceImpl"

//jest가 axios를 제어
jest.mock("axios")
const mockAxios = axios as jest.Mocked<typeof axios>

describe("data Source 단위 테스트", () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("getAllExchangeInfos는 API 서버로부터 데이터를 성공적으로 조회하여 DTO로 변환해야한다", async()  => {
        //given
        const mockDto: ExchangeInfoDto = {
            amount: 1.0,
            base: "EUR",
            date: "2026-07-15",
            rates: {
                USD: 1.15,
                KRW: 1750.0
            }
        }
        mockAxios.get.mockResolvedValue({data:mockDto}) //axios.get 호출 시 mockDto를 리턴하도록 설정
        const dataSource = new RemoteExchangeDataSourceImpl()

        //when
        const result = await dataSource.getAllExchangeInfos()

        //then
        expect(result).toEqual(mockDto)
    })
})