import { ExchangeInfoDto } from "../dto/exchangeInfoDto";
import { ExchangeDataSource } from "./exchangeDataSource";

const mockData: ExchangeInfoDto = {
  amount: 1.0,
  base: "EUR",
  date: "2026-07-07",
  rates: {
    USD:1.1415,
    EUR:1.0,
    KRW:1747.72,
    JPY:185.31
  }
}


export class MockExchangeDataSourceImpl implements ExchangeDataSource{
    async getAllExchangeInfos(): Promise<ExchangeInfoDto>{
            return mockData
    }
    
}

