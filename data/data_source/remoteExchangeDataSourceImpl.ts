import axios from "axios";
import { ExchangeInfoDto } from "../dto/exchangeInfoDto";
import { ExchangeDataSource } from "./exchangeDataSource";
import { BASE_URL } from "../../core/constants";

export class RemoteExchangeDataSourceImpl implements ExchangeDataSource {

    async getAllExchangeInfos(): Promise<ExchangeInfoDto> {

        try {
            const response = await axios.get<ExchangeInfoDto>(BASE_URL)
            return response.data
        }
        catch (error) {
            console.error("통신 실패")
            throw error
        }
    }

}