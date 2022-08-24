const App = (): JSX.Element => {
  useEffect(() => {
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