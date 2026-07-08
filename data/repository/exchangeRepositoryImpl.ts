import { Currency } from "../../domain/model/currency";
import { ExchangeRepository } from "../../domain/repository/exchangeRepository";
import { ExchangeDataSource } from "../data_source/exchangeDataSource";
import { convertDto2CurrencyList } from "../mapper/exchangeInfoMapper";

export class ExchangeRepositoryImpl implements ExchangeRepository{

    constructor(private exchangeDataSource:ExchangeDataSource){} 
    async getCurrencies(): Promise<Currency[]> {
        const dto = await this.exchangeDataSource.getAllExchangeInfos();
        console.log("dto", dto)
        console.log("return", convertDto2CurrencyList(dto))

        
        return convertDto2CurrencyList(dto)
    }

}