import { Datum, ICurrency } from "./api.interface";

export interface UseCurrencySelectHookParams {
    label: string,
    data: ICurrency | Datum[],
    isObject: boolean
}