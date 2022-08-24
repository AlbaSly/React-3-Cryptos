const App = (): JSX.Element => {
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