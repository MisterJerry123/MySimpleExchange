import { ExchangeInfo } from "../../domain/model/exchangeInfo";
import { ExchangeInfoDto } from "../dto/exchangeInfoDto";

export const convertDto2ExchangeInfo = (dto:ExchangeInfoDto):ExchangeInfo =>{
    const currencies =Object.entries(dto.rates).map(([code, rate]) => ({
        code,
        rate,
        price: "0"
    }));

    return {
        baseDate:dto.date,
        currencies:currencies
    }


}