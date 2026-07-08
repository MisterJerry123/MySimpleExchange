import { Currency } from "../../domain/model/currency";
import { ExchangeInfoDto } from "../dto/exchangeInfoDto";

export const convertDto2CurrencyList = (dto:ExchangeInfoDto):Currency[] =>{
    return Object.entries(dto.rates).map(([code, rate]) => ({
        code,
        rate,
        price: "0"
    }));
}