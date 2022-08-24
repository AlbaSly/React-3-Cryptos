import { AlertInfoState, ResultState, TradeState } from "./state.interface";

export interface AlertComponentProps {
    alertInfoState: AlertInfoState
}

export interface FormComponentProps {
    tradeState: TradeState
}

export interface ResultComponentProps {
    resultState: ResultState
}