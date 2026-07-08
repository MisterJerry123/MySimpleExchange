export interface ExchangeInfoDto{
    amount:number,
    base:string,
    date:string,
    rates:{[key:string]:number}
}