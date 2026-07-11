import { createContext } from "react";
import { RemoteExchangeDataSourceImpl } from "../../data/data_source/remoteExchangeDataSourceImpl";
import { ExchangeRepositoryImpl } from "../../data/repository/exchangeRepositoryImpl";
import { ExchangeRepository } from "../../domain/repository/exchangeRepository";

export interface DiContext{
    exchangeRepository:ExchangeRepository
}

const remoteDataSource = new RemoteExchangeDataSourceImpl()
const exchangeRepository= new ExchangeRepositoryImpl(remoteDataSource)

export const diContext = createContext<DiContext>({
    exchangeRepository: exchangeRepository
})