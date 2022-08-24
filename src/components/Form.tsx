import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';

import styled from '@emotion/styled';

import Alert from './Alert';

import useCurrencySelect from '../hooks/useCurrencySelect';

import { DefaultCryptoCurrencyListState, DefaultGlobalCurrencyListState } from '../interfaces/state.interface';
import { ApiData, Datum, ICurrency } from '../interfaces/api.interface';
import { FormComponentProps } from '../interfaces/component.interface';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;
    &:hover {
        cursor: pointer;
        background-color: #7A7DFE;
    }
`;

const Form = (props: FormComponentProps): JSX.Element => {
    const [cryptoList, setCryptoList]: [Datum[], Dispatch<SetStateAction<Datum[]>>] = useState(DefaultCryptoCurrencyListState);
    const [globalCurrencyList, setGlobalCurrencyList]: [ICurrency, Dispatch<SetStateAction<ICurrency>>] = useState(DefaultGlobalCurrencyListState);
    const [alertInfo, setAlertInfo]: [string, Dispatch<SetStateAction<string>>] = useState('');

    //Custom Hook
    const [stateGlobal, SelectGlobalCurrencyList]: [string, () => JSX.Element] = 
        useCurrencySelect({label: 'Select your global currency', data: globalCurrencyList, isObject: true});
    const [stateCrypto, SelectCryptoCurrencyList]: [string, () => JSX.Element] = 
        useCurrencySelect({label: 'Select your prefered crypto', data: cryptoList, isObject: false});

    const {tradeState: {trade, setTrade}} = props;

    useEffect(() => {
        async function callGlobalCurrencyList(): Promise<void> {
            return new Promise(async (resolve) => {
                try {
                    const response: Response = await fetch('https://openexchangerates.org/api/currencies.json');
                    const data = await response.json();

                    setGlobalCurrencyList(data);

                    resolve();
                } catch (error: any) {
                    console.error(error);
                }
            });
        }

        async function callCryptoList(): Promise<void>{
            return new Promise(async (resolve) => {
                try {
                    const response: Response = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD');
                    const {Data} = await response.json() as ApiData;

                    setCryptoList(Data);
                    
                    resolve();
                } catch (error: any) {
                    console.error(error);
                }
            });
        }

        (async () => {
            await Promise.all([
                callGlobalCurrencyList(),
                callCryptoList()
            ]);
        })();
    }, []);

    async function handleSubmit(ev: FormEvent<HTMLElement>): Promise<void> {
        ev.preventDefault();

        if ([stateCrypto, stateGlobal].some(value => value == "null")) {
            setAlertInfo('Both fields are required');

            return;
        }

        setTrade({
            crypto: stateCrypto, 
            global: stateGlobal
        });
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <SelectGlobalCurrencyList />
                <SelectCryptoCurrencyList />

                {alertInfo && <Alert alertInfoState={{alertInfo, setAlertInfo}} />}
                
                <InputSubmit 
                    type="submit" 
                    value="Trade"
                />

            </form>
        </>
    );
}

export default Form;