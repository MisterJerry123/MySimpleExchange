import { ExchangeInfoDto } from "../dto/exchangeInfoDto";

export interface ExchangeDataSource{
    getAllExchangeInfos():Promise<ExchangeInfoDto>
} 