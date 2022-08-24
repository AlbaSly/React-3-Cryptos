import { ResultComponentProps } from "../interfaces/component.interface";

import styled from "@emotion/styled";

const ResultDiv = styled.div`
    margin-top: 30px;
    color: #FFF;
    span {
        font-weight: 700px;
    }
    display: flex;
    align-items: center;
    gap: 1.5rem;

    div {
        position: relative;

        &:first-of-type {
            width: 30%;
        }

        &:last-of-type {
            width: 70%;
        }
    }
`;

const Text = styled.p`
    font-size: 18px;

`;

const Title = styled.p`
    font-size: 30px;
`;

const Image = styled.img`
    display: block;

    position:absolute; 
    left:50%; 
    top:50%; 
    transform: translate(-50%, -50%);

    width: 150px;
`;

const Result = (props: ResultComponentProps): JSX.Element => {
    const {resultState: {result}} = props;

    const {
        PRICE,
        HIGHDAY,
        LOW24HOUR,
        CHANGEPCT24HOUR,
        LASTUPDATE,
        IMAGEURL
    } = result;
    
    return (
        <ResultDiv id='result' className="fade">
            <div>
                <Image className="img-from-left" src={`https://cryptocompare.com/${IMAGEURL}`} alt='Crypto Icon' />
            </div>
            <div>
                <Title>Now: <span>{PRICE}</span></Title>
                <Text>Highest Today: <span>{HIGHDAY}</span></Text>
                <Text>Lowest Today: <span>{LOW24HOUR}</span></Text>
                <Text>Change: <span>{CHANGEPCT24HOUR}</span>%</Text>
                <Text>Last Update: <span>{LASTUPDATE}</span></Text>
            </div>
        </ResultDiv>
    );
}

export default Result;

