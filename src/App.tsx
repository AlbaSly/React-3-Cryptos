import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner/Spinner';

import { DefaultGlobalCurrencyState, GlobalCurrency, TradeData } from './interfaces/api.interface';
import { DefaulTradeState, ITrade } from './interfaces/state.interface';

import CryptoImg from './img/imagen-criptos.png';
import Alert from './components/Alert';

const Container = styled.div`
  font-family: 'Lato', sans-serif;
  max-width: 1024px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 40px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto;
  }
`;

const App = (): JSX.Element => {
  const [trade, setTrade]: [ITrade, Dispatch<SetStateAction<ITrade>>]  = useState(DefaulTradeState);
  const [result, setResult]: [GlobalCurrency, Dispatch<SetStateAction<GlobalCurrency>>] = useState(DefaultGlobalCurrencyState);
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [alertInfo, setAlertInfo]: [string, Dispatch<SetStateAction<string>>] = useState('');

  useEffect(() => {
    setResult(DefaultGlobalCurrencyState);

    if (Object.values(trade).some(val => val === '' || !val)) return;

    async function GetCoinsComparison(): Promise<void> {
      const url: string = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${trade.crypto}&tsyms=${trade.global}`;
      
      try {
        const response: Response = await fetch(url);
        const data = await response.json() as TradeData;
  
        setResult(data.DISPLAY[trade.crypto][trade.global]);
      } catch (error: any){
        setAlertInfo(`Currency ${trade.global} not found`);
      }
    }
    
    (async () => {
      deleteAnimation();
      setLoading(true);

      await GetCoinsComparison();

      window.location.href = '#result';

      setLoading(false);
      addAnimation();
    })();
  }, [trade]);

  function deleteAnimation(): void {
    const $result = document.querySelector('#result')!;
    
    if ($result) {
      const $img = $result.querySelector('img')!;
      $result.classList.remove('fade');
      $img.classList.remove('img-from-left');
    }
  }

  function addAnimation(): void {
    const $result = document.querySelector('#result')!;
    
    if ($result) {
      const $img = $result.querySelector('img')!;
      $result.classList.add('fade');
      $img.classList.add('img-from-left');
    }
  }

  return (
    <Container>
      <Image src={CryptoImg}></Image>
      
      <div>
        <Heading>Trade your cryptos</Heading>

        <Form tradeState={{trade, setTrade}} />
        
        {loading && <Spinner />}

        {result.PRICE && <Result resultState={{result, setResult}} />}
        {alertInfo && <Alert alertInfoState={{alertInfo, setAlertInfo}} />}
      </div>

    </Container>
  );
}

export default App;