import axios from "axios";
import { ExchangeInfoDto } from "../dto/exchangeInfoDto";
import { ExchangeDataSource } from "./exchangeDataSource";

export class RemoteExchangeDataSourceImpl implements ExchangeDataSource {
    private baseUrl = "https://api.frankfurter.dev/v1/latest"

    async getAllExchangeInfos(): Promise<ExchangeInfoDto> {

        try {
            const response = await axios.get<ExchangeInfoDto>(this.baseUrl)
            return response.data
        }
        catch (error) {
            console.error("통신 실패")
            throw error
        }
    }

}