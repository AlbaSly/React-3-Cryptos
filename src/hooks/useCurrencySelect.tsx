import { useState } from 'react';

import styled from '@emotion/styled';

import { Datum, ICurrency } from '../interfaces/api.interface';
import { UseCurrencySelectHookParams } from '../interfaces/hook.interface';

const Label = styled.label`
    color: #FFFF;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;

export const useCurrencySelect = (params: UseCurrencySelectHookParams): [string, () => JSX.Element] => {
    const [state, setState] = useState('null');

    const {label, data, isObject} = params;

    let arrayAux: Datum[] = [];
    let objAux: ICurrency = {};

    let tagName: string = "";

    if (!isObject) {
        arrayAux = [...data as Datum[]];
        tagName = 'cryptoCurrency';
    } else {
        objAux = {...data as ICurrency};
        tagName = 'globalCurrency';
    }

    const SelectCurrencyList = (): JSX.Element => {
        return (
            <div>
                <Label htmlFor={tagName}>{label}</Label>

                <Select
                    value={state}
                    onChange={ev => setState(ev.target.value)}
                    name={tagName} 
                    id={tagName} >
                        <option value="null" disabled>--Select One--</option>
                
                        {(!isObject) && (arrayAux)
                            .map((data, index) => 
                                <option 
                                    key={index} 
                                    value={data.CoinInfo.Name} >({data.CoinInfo.Name}) {data.CoinInfo.FullName}
                                </option>)
                        }

                        {(isObject) && (Object.keys(objAux))    
                            .map((key, index) => 
                                <option 
                                    key={index} 
                                    value={key} >({key}) {objAux[key]}
                                </option>)
                        }
                </Select>
            </div>
        );
    }

    return [state, SelectCurrencyList];
}

export default useCurrencySelect;