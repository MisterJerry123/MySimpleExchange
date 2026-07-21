import { Currency } from "../../domain/model/currency";
import { ExchangeInfo } from "../../domain/model/exchangeInfo";
import { ExchangeRepository } from "../../domain/repository/exchangeRepository";
import { ExchangeDataSource } from "../data_source/exchangeDataSource";
import { convertDto2ExchangeInfo } from "../mapper/exchangeInfoMapper";

export class ExchangeRepositoryImpl implements ExchangeRepository{

    constructor(private exchangeDataSource:ExchangeDataSource){} 

    async getCurrencies(): Promise<ExchangeInfo> {
        const dto = await this.exchangeDataSource.getAllExchangeInfos();
        console.log("dto", dto)
        console.log("return", convertDto2ExchangeInfo(dto))

        
        return convertDto2ExchangeInfo(dto)
    }

}