import { Dispatch, SetStateAction } from "react";

import { Datum, ICurrency, GlobalCurrency } from "./api.interface";

export interface GlobalCurrencyListState {
    globalCurrencylist: ICurrency,
    setGlobalCurrencyList: Dispatch<SetStateAction<ICurrency>>
}

export const DefaultGlobalCurrencyListState: ICurrency = {};

export interface CryptoCurrencyListState {
    cryptoCurrencylist: Datum[],
    setCryptoCurrencyList: Dispatch<SetStateAction<Datum[]>>
}

export const DefaultCryptoCurrencyListState: Datum[] = [];

export interface AlertInfoState {
    alertInfo: string,
    setAlertInfo: Dispatch<SetStateAction<string>>
}

export interface ITrade {
    global: string,
    crypto: string
}

export interface TradeState {
    trade: ITrade,
    setTrade: Dispatch<SetStateAction<ITrade>>
}

export const DefaulTradeState: ITrade = {
    global: '',
    crypto: ''
};

export interface ResultState {
    result: GlobalCurrency,
    setResult: Dispatch<SetStateAction<GlobalCurrency>>
}