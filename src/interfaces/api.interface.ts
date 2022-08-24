export interface ICurrency {
    [currency: string]: string
}

export interface ApiData {
    Message:       string;
    Type:          number;
    MetaData:      MetaData;
    SponsoredData: any[];
    Data:          Datum[];
    RateLimit:     RateLimit;
    HasWarning:    boolean;
}

export interface Datum {
    CoinInfo: CoinInfo;
    RAW:      Raw;
    DISPLAY:  Display;
}

export interface CoinInfo {
    Id:                 string;
    Name:               string;
    FullName:           string;
    Internal:           string;
    ImageUrl:           string;
    Url:                string;
    Algorithm:          string;
    ProofType:          string;
    Rating:             Rating;
    NetHashesPerSecond: number;
    BlockNumber:        number;
    BlockTime:          number;
    BlockReward:        number;
    AssetLaunchDate:    Date;
    MaxSupply:          number;
    Type:               number;
    DocumentType:       DocumentType;
}

export enum DocumentType {
    Webpagecoinp = "Webpagecoinp",
}

export interface Rating {
    Weiss: Weiss;
}

export interface Weiss {
    Rating:                   string;
    TechnologyAdoptionRating: string;
    MarketPerformanceRating:  string;
}

export interface DisplayUsd {
    FROMSYMBOL:              string;
    TOSYMBOL:                PurpleTOSYMBOL;
    MARKET:                  PurpleMARKET;
    PRICE:                   string;
    LASTUPDATE:              Lastupdate;
    LASTVOLUME:              string;
    LASTVOLUMETO:            string;
    LASTTRADEID:             string;
    VOLUMEDAY:               string;
    VOLUMEDAYTO:             string;
    VOLUME24HOUR:            string;
    VOLUME24HOURTO:          string;
    OPENDAY:                 string;
    HIGHDAY:                 string;
    LOWDAY:                  string;
    OPEN24HOUR:              string;
    HIGH24HOUR:              string;
    LOW24HOUR:               string;
    LASTMARKET:              string;
    VOLUMEHOUR:              string;
    VOLUMEHOURTO:            string;
    OPENHOUR:                string;
    HIGHHOUR:                string;
    LOWHOUR:                 string;
    TOPTIERVOLUME24HOUR:     string;
    TOPTIERVOLUME24HOURTO:   string;
    CHANGE24HOUR:            string;
    CHANGEPCT24HOUR:         string;
    CHANGEDAY:               string;
    CHANGEPCTDAY:            string;
    CHANGEHOUR:              string;
    CHANGEPCTHOUR:           string;
    CONVERSIONTYPE:          Conversiontype;
    CONVERSIONSYMBOL:        string;
    SUPPLY:                  string;
    MKTCAP:                  string;
    MKTCAPPENALTY:           Mktcappenalty;
    CIRCULATINGSUPPLY:       string;
    CIRCULATINGSUPPLYMKTCAP: string;
    TOTALVOLUME24H:          string;
    TOTALVOLUME24HTO:        string;
    TOTALTOPTIERVOLUME24H:   string;
    TOTALTOPTIERVOLUME24HTO: string;
    IMAGEURL:                string;
}

export enum Conversiontype {
    Direct = "direct",
}

export enum Lastupdate {
    JustNow = "Just now",
    The1MinAgo = "1 min ago",
}

export enum PurpleMARKET {
    CryptoCompareIndex = "CryptoCompare Index",
}

export enum Mktcappenalty {
    The0 = "0 %",
}

export enum PurpleTOSYMBOL {
    Empty = "$",
}

export interface Raw {
    USD: RawUsd;
}

export interface RawUsd {
    TYPE:                    string;
    MARKET:                  FluffyMARKET;
    FROMSYMBOL:              string;
    TOSYMBOL:                FluffyTOSYMBOL;
    FLAGS:                   string;
    PRICE:                   number;
    LASTUPDATE:              number;
    MEDIAN:                  number;
    LASTVOLUME:              number;
    LASTVOLUMETO:            number;
    LASTTRADEID:             string;
    VOLUMEDAY:               number;
    VOLUMEDAYTO:             number;
    VOLUME24HOUR:            number;
    VOLUME24HOURTO:          number;
    OPENDAY:                 number;
    HIGHDAY:                 number;
    LOWDAY:                  number;
    OPEN24HOUR:              number;
    HIGH24HOUR:              number;
    LOW24HOUR:               number;
    LASTMARKET:              string;
    VOLUMEHOUR:              number;
    VOLUMEHOURTO:            number;
    OPENHOUR:                number;
    HIGHHOUR:                number;
    LOWHOUR:                 number;
    TOPTIERVOLUME24HOUR:     number;
    TOPTIERVOLUME24HOURTO:   number;
    CHANGE24HOUR:            number;
    CHANGEPCT24HOUR:         number;
    CHANGEDAY:               number;
    CHANGEPCTDAY:            number;
    CHANGEHOUR:              number;
    CHANGEPCTHOUR:           number;
    CONVERSIONTYPE:          Conversiontype;
    CONVERSIONSYMBOL:        string;
    SUPPLY:                  number;
    MKTCAP:                  number;
    MKTCAPPENALTY:           number;
    CIRCULATINGSUPPLY:       number;
    CIRCULATINGSUPPLYMKTCAP: number;
    TOTALVOLUME24H:          number;
    TOTALVOLUME24HTO:        number;
    TOTALTOPTIERVOLUME24H:   number;
    TOTALTOPTIERVOLUME24HTO: number;
    IMAGEURL:                string;
}

export enum FluffyMARKET {
    Cccagg = "CCCAGG",
}

export enum FluffyTOSYMBOL {
    Usd = "USD",
}

export interface MetaData {
    Count: number;
}

export interface RateLimit {
}

/*------------------------------------------------------------------------------------- */

/**Crypto Trade */
export interface TradeData {
    RAW:     Raw;
    DISPLAY: Display;
}

export interface Display {
    [crypto: string]: DisplayCrypto;
}

export interface DisplayCrypto {
    [global: string]: GlobalCurrency;
}

export interface GlobalCurrency {
    FROMSYMBOL:              string;
    TOSYMBOL:                string;
    MARKET:                  string;
    PRICE:                   string;
    LASTUPDATE:              string;
    LASTVOLUME:              string;
    LASTVOLUMETO:            string;
    LASTTRADEID:             string;
    VOLUMEDAY:               string;
    VOLUMEDAYTO:             string;
    VOLUME24HOUR:            string;
    VOLUME24HOURTO:          string;
    OPENDAY:                 string;
    HIGHDAY:                 string;
    LOWDAY:                  string;
    OPEN24HOUR:              string;
    HIGH24HOUR:              string;
    LOW24HOUR:               string;
    LASTMARKET:              string;
    VOLUMEHOUR:              string;
    VOLUMEHOURTO:            string;
    OPENHOUR:                string;
    HIGHHOUR:                string;
    LOWHOUR:                 string;
    TOPTIERVOLUME24HOUR:     string;
    TOPTIERVOLUME24HOURTO:   string;
    CHANGE24HOUR:            string;
    CHANGEPCT24HOUR:         string;
    CHANGEDAY:               string;
    CHANGEPCTDAY:            string;
    CHANGEHOUR:              string;
    CHANGEPCTHOUR:           string;
    CONVERSIONTYPE:          string;
    CONVERSIONSYMBOL:        string;
    SUPPLY:                  string;
    MKTCAP:                  string;
    MKTCAPPENALTY:           string;
    CIRCULATINGSUPPLY:       string;
    CIRCULATINGSUPPLYMKTCAP: string;
    TOTALVOLUME24H:          string;
    TOTALVOLUME24HTO:        string;
    TOTALTOPTIERVOLUME24H:   string;
    TOTALTOPTIERVOLUME24HTO: string;
    IMAGEURL:                string;
}

export interface Raw {
    BTC: RawBtc;
}

export interface RawBtc {
    USD: FluffyUSD;
}

export interface FluffyUSD {
    TYPE:                    string;
    MARKET:                  string;
    FROMSYMBOL:              string;
    TOSYMBOL:                string;
    FLAGS:                   string;
    PRICE:                   number;
    LASTUPDATE:              number;
    MEDIAN:                  number;
    LASTVOLUME:              number;
    LASTVOLUMETO:            number;
    LASTTRADEID:             string;
    VOLUMEDAY:               number;
    VOLUMEDAYTO:             number;
    VOLUME24HOUR:            number;
    VOLUME24HOURTO:          number;
    OPENDAY:                 number;
    HIGHDAY:                 number;
    LOWDAY:                  number;
    OPEN24HOUR:              number;
    HIGH24HOUR:              number;
    LOW24HOUR:               number;
    LASTMARKET:              string;
    VOLUMEHOUR:              number;
    VOLUMEHOURTO:            number;
    OPENHOUR:                number;
    HIGHHOUR:                number;
    LOWHOUR:                 number;
    TOPTIERVOLUME24HOUR:     number;
    TOPTIERVOLUME24HOURTO:   number;
    CHANGE24HOUR:            number;
    CHANGEPCT24HOUR:         number;
    CHANGEDAY:               number;
    CHANGEPCTDAY:            number;
    CHANGEHOUR:              number;
    CHANGEPCTHOUR:           number;
    CONVERSIONTYPE:          string;
    CONVERSIONSYMBOL:        string;
    SUPPLY:                  number;
    MKTCAP:                  number;
    MKTCAPPENALTY:           number;
    CIRCULATINGSUPPLY:       number;
    CIRCULATINGSUPPLYMKTCAP: number;
    TOTALVOLUME24H:          number;
    TOTALVOLUME24HTO:        number;
    TOTALTOPTIERVOLUME24H:   number;
    TOTALTOPTIERVOLUME24HTO: number;
    IMAGEURL:                string;
}

/**
 * 
 * Default Data
 */

export const DefaultGlobalCurrencyState: GlobalCurrency = {
    FROMSYMBOL:              '',
    TOSYMBOL:                '',
    MARKET:                  '',
    PRICE:                   '',
    LASTUPDATE:              '',
    LASTVOLUME:              '',
    LASTVOLUMETO:            '',
    LASTTRADEID:             '',
    VOLUMEDAY:               '',
    VOLUMEDAYTO:             '',
    VOLUME24HOUR:            '',
    VOLUME24HOURTO:          '',
    OPENDAY:                 '',
    HIGHDAY:                 '',
    LOWDAY:                  '',
    OPEN24HOUR:              '',
    HIGH24HOUR:              '',
    LOW24HOUR:               '',
    LASTMARKET:              '',
    VOLUMEHOUR:              '',
    VOLUMEHOURTO:            '',
    OPENHOUR:                '',
    HIGHHOUR:                '',
    LOWHOUR:                 '',
    TOPTIERVOLUME24HOUR:     '',
    TOPTIERVOLUME24HOURTO:   '',
    CHANGE24HOUR:            '',
    CHANGEPCT24HOUR:         '',
    CHANGEDAY:               '',
    CHANGEPCTDAY:            '',
    CHANGEHOUR:              '',
    CHANGEPCTHOUR:           '',
    CONVERSIONTYPE:          '',
    CONVERSIONSYMBOL:        '',
    SUPPLY:                  '',
    MKTCAP:                  '',
    MKTCAPPENALTY:           '',
    CIRCULATINGSUPPLY:       '',
    CIRCULATINGSUPPLYMKTCAP: '',
    TOTALVOLUME24H:          '',
    TOTALVOLUME24HTO:        '',
    TOTALTOPTIERVOLUME24H:   '',
    TOTALTOPTIERVOLUME24HTO: '',
    IMAGEURL:                '',
}