import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaArrowDown,
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import {
  IoIosInformationCircleOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdSettings,
} from "react-icons/io";
import { useState } from "react";
import { BiGridHorizontal } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { PiDotsThreeOutline } from "react-icons/pi";
import { RxShadowOuter } from "react-icons/rx";
import { GiCorkedTube, GiTargeting } from "react-icons/gi";
import { WiMoonAltNew } from "react-icons/wi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdArrowOutward, MdEmail, MdOutlineSecurity } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { CiCircleInfo } from "react-icons/ci";
import { FaSliders } from "react-icons/fa6";
import { TiVendorApple } from "react-icons/ti";

const BuycryptoPage = () => {
  const [currencies, setcurrencies] = useState(false);
  const [asset, setasset] = useState(false);
  const [settings, setsettings] = useState(false);
  const [signin, setsignin] = useState(false);

  const handlecurrenciesDropOpen = () => {
    if (currencies === false) {
      setcurrencies(true);
    }
  };
  const handlecurrenciesDropclose = () => {
    if (currencies === true) {
      setcurrencies(false);
    }
  };

  const handleassetDropOpen = () => {
    if (asset === false) {
      setasset(true);
    }
  };
  const handleassetDropclose = () => {
    if (asset === true) {
      setasset(false);
    }
  };

  const handlesettingsDropOpen = () => {
    if (settings === false) {
      setsettings(true);
    }
  };
  const handlesettingsDropclose = () => {
    if (settings === true) {
      setsettings(false);
    }
  };

  const handlesigninDropOpen = () => {
    setsettings(false);
    if (signin === false) {
      setsignin(true);
    }
  };
  const handlesigninDropclose = () => {
    setsettings(true);
    if (signin === true) {
      setsignin(false);
    }
  };

  const CurrenciesArr = [
    {
      id: 1,
      name: "euro",
      abr: "eur",
      flag: "https://www.nationsonline.org/flags/europe_flag.gif",
    },
    {
      id: 2,
      name: "pound sterling",
      abr: "gbp",
      flag: "https://www.nationsonline.org/flags/united_kingdom_flag.gif",
    },
    {
      id: 3,
      name: "us dollar",
      abr: "usd",
      flag: "https://www.nationsonline.org/flags/united_kingdom_flag.gif",
    },

    {
      id: 4,
      name: "ausralian dollar",
      abr: "aud",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAACfCAMAAABDYYw1AAAAt1BMVEUBIWn////kACsAH2jjACCzu87lCTIAGmYVM3bxh5jkACcAFmXiAAT98fP75efuZX4AD2L5+vwAAGChrcfd4evp7PPx8/cAAFkNK3A6TILKz918jbOWo8FfbJYgNnWFlbkACmIvRYA7VY1VYo9yha1MYJP3xMv3ucTmKELueYhKWInvcYbvACRrfaf1qbV9haS1THPyfJL62N7rV23sY3XrSWbqNVnoHEntAACbbZL1l6uGnsCdgKNhTSFrAAAKFElEQVR4nO2dCXuiShaGISekaOl02AOERRRNYsY4na3vnZn//7umqgRlKbAwqOD1e3pVlnqphVq+OhGEgkCWRKwfN1d53fwgH0oyCNxCSujb+KS3u+xSo+s/c53/Al2rGzIAiH1yytvH9fUaazT6ehTF+4MmvjlNHZABEiiX9na34bohXAMnA+S4viaKt28vW65PyjVoMsIVUa5cfr2nXAMmw1yLyC7m19P76604cDJA8tTPuEYp10eOa6BkoGAui3D9Hm3yq8g1SDLMFVCu+Y+rmvzCsgZHluO6Sbmuq1ymNFWOClNM4x5koDiBYVKupw3XS5UrUE8ItgcZi+vm5fVXhQudkqs9GZPr+bHKJSgtOp2HUDsyUIQ112M+vypcRuCcgqt4y1ZkCgokyvXczCUfiqv5skqh+POTgaJOM67RSbgEJWisulIwzt2alwzQeEa4tF1c4QHL4dgcN31NXjP65vacZEinXOLjy4brqsJlHZZLQBNxgprISNM1y9i4yJA+qXDdzctc/sG4ANHr6r7o3+f+zyDLsXGQbbg+Ui7cnbqbl97Ltj89WH5BPHPGCEC3REsHXC+cWcy6VfaI12w7yQiXpRW5Pqpci5D9HLtBM0xjMtZdfCdX12PfNOrzLGNDO8iQ7lKu+Zbr+r3MpfkL+YBc+Om6pmZ5SwPfy1h6lma6zOqWf9TSRHcayBw9lnC/t8D1WeYSffewXFhqgoeBtkaeIvlHojbn2Zpt1kA2kWzKdbPh+pprJS7DdQ7NhYujKuXuK7HBhFLKbLuWzC5yjTBX6WTRiIXDc2Eh2drWorCm6f/zWE5eHRnher/O9PNPmUszQn2sNqojMFDH0jbL9JrL/n758cZJ9uv190b/Kb2+RM3zk4cdijpBw+1YYOXubC91ZkFh5Fh9nn1XXcwWAIq90mU9Zl9kaGQg0/WComyfMXYcHlk8mS0j30wvafrRcjaJz4BMwP0pRVXvjXW7rxn3qqrgvlb1wF8M3T6XyJ5vWYe11m13q0y6RxotTOfVXvMnS9dXRV0zj2qtvzoDE3B3WDRIxuFOcc0hV0fUvzoDA8HGfQ+kGqJdO2cwTDLk2hJGApBsdnd4sGRKYMiECMlGcF5kaOakkwDO4rxK47bjDbVTIQMl49CF7EJ2IbuQXcj+SWTXLI1KSRoxj2qt45LdsfRVIvtiHtVaH0ddqr5lSPtdGnn+1liHtdZxnS6Dmy24kJ0rmTI+UzLV9wVx/rWdgvl65CZ7vNme9kmm+DVfuN+lY4EJoNrC1890aWV087lZg+DKs/nXKLc8SD4xYmBN/J1CaCIUPbG25NWSeVJ52vnx8ybHRqY2j7J8xiM81C5yTVDDyiDEjWwfb7c9YgNh7fUlXHQRvnGdOlumLrC9P11lbHeU7QjLuVxkxDuacSHY5S3IrAU5aZhtVGDTvmktgJjpgmh1CRQKTx+v4sY0sds1AZkdJKfbnIVizUbsIHuzgRwl3+xgImFqCIRra+Lh8fCw2F5zbC+Ezdrf6oIWnvE9lwy4kS0KYsF4xeVOgsx2VcN29UKsSu1tV7C2GakrTaLFscZ1tFso8TxPMKVgayjj9sox2bY2rJvnPdjAWSwcFcAxRDNQAKlhEO5HJij6WBACNX9zbn9jZm8ssuUsnJStnQ3QSSQ/iNUFfqX6Y2GxMgx370KJewzFutrGk6qgKlvOnvqUsXFbN1Es4aqxIv54/KenacG+XAy18xErQG3EJbatZf/58baNjRhgRsygxBFBXTVG2OFrsaX3O7NI72CTONnAiXLvSq92ZewIZFtbe16/WGxctnZSHjNZXZbFvfZY7GAbbdiUna9fUGR/cw3cPp40z9IEBT4P27j55kgJpK3tSDONuMYFdzSy7ZafAts8x/byqhG2JtcEKHEp623vQegs2/bef5ZtPyu0JfOXPJvYOFsAzkMp20m+Sfu/0boiS9nsClt+O1rzPIgbBMlDlHkyTSNaLYOgzR7uQ5HR7ZCLKtvHaMvW1IYAUhA4wio9UXIdgXzSEdh39+bSLawag41eZrRzXh/3iQmZZa3fZl2OX7+9nzrbTl1ke19v1d29YgGOT6AiSzSnXbb5neyBZ7GJ80/CxkEWGjS3fFtr3s7TWp3ELaDb+ytsXzyrTMiVzAnChdLXVochuyqse121jTWBkxb7YoXtr50XQFNjRmctVClpn/jGb52AWJn//ndRf5MPA6fNXZAaJ1FR//3f7v5VGCtpKuM2t1uf0iyFuM/xiDYvWH/Y8kYInzPOftHfHFfYzjG3bhjRLOl0dNAfjX2z41anD8JlTAk90XdwCTt1WrpV6LpuZOKRD/67bf3ss0BYmtlbRvMWp05OlwJYpgMFzZz1ZaGrG4E6XaN57qk323eusUHJgg6H4f0QhJKoWZoYOedGhmaeZUSSLX17gapvUgJp5eiyL51dNwRcF9cwUGddziv3Q6m7vQfryCfWuZXZjaCz2b6+Sa/ftjZsoVg8v5aGSo3Eh642d/dLOh7wnGVxRCHuYcrn2DyqD5jsLIvjPRnxnEVxLFlmkExDixSnT/e21ZxSEE5Az9UqNaFDuWRbHAHpMBngewBgpUkTXc1y5X4d0cG7z75W9diwV0OcZSDrIKL5EKo0CgDIaWAA6v0DpDpkEqVT88nxpKxnSaSpAziHkpQsUfH/nBldZTWnA20qldWaxvYnsp6FF/F0h0xSUsqOV36OJxQa2ZKQl2QLznayCaFi1AXz6b+yWTu2zGCgZVEgzoeoGgomkxYNtSwS5S1dZUnDbBczqUFdeRxyWaRSGaGJaEPiDxwMt49S2RZAK5k03HYxFehLi0FmJbXxboYhQEJQ2dZDCyOvY7anAsUtWzC3LYi/GOwaMCjhymNVsrSqeasuTaLHEy2IrCqWq2w9K5J8ScEFsexzZhVJY9IftB0xpLOjnIeGgpgrkmYk96WTtSOGNBU4gVffYSzK9pb9cFzsiiG9VpwYkmeWdzpWc8wyPclI4iOku0GcMaTXcsI4dhfTIAiSyDcqbzRbMvwowd9OF24ch6fNM94Y0tnh1B2nKEhw5NAtNyVmHMrEsKxQ59ypJ3k4Y0hXzwMlrpIpp8bJiTOGNENKZWRtnvLnoVTFF0OaeWL2ws5aFCvp1RCGL4Y0Q+NsiGZCOrlj++MDJrS9uGJIM6SnMwamoAhpuWzcq3N08cWQZpw3XueU6SABOakFbdyfBoQ3hjTjTNnb5jIKKZrXH6MWdwzpqhB9nVnu+kGg2KLNfl+GZvwxpKuijb61SHMY0MTqU7PPH0O6KtLoW7n9Nmhm9anZ544hXRVu9O0gXydRYPWt2eeJIc04SbKWhWcAGK1fzT5XDOmKAEmr8s+hgsTo1wI1TwzpquRqdQQnlrtN2jfFE0OadVr1KfSop0/FE0N6mOKJIT1QccSQvuiiiy666KKLLrrooosuGpT+D/PbFVEKzo5vAAAAAElFTkSuQmCC",
    },

    {
      id: 5,
      name: "bulgarian lev",
      abr: "bgn",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAA3CAMAAAC2At3zAAAAGFBMVEX////WJhIAlm56t58Ak2kAmHBse1ncHAX6eeRUAAAAOklEQVRYhe3MwQ2AIAAEsBMU9t+YtwNcTEw7QBMA+NQsyl2UUSSXy+XyV/4UZRVlF+Uqksvlcvk/8gO+kRnhw0ybhAAAAABJRU5ErkJggg==",
    },

    {
      id: 6,
      name: "brazilan real",
      abr: "brl",
      flag: "data:image/png;base64,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",
    },

    {
      id: 7,
      name: "canadian dollar",
      abr: "cad",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAMAAACS246gAAAAZlBMVEXVKx7////VKRvVKx///f3SAADTFQDUJRbUIRDUHwzUHAb88vHww8HZSULxyMfYQzvrqqjbVk/ljovuubj44uHifnvts7LjhYLdYl3poZ7mlZL22tnXOzPdZ2HWMijppaPz0M/fcGtTHk49AAABn0lEQVRYhe2XYW+DIBCGkfYAQVerQhVti///Tw7bUjdHTSqYbMn4YPTueHJ5OQ5EyDfwbp+8MfY77MX4xz/8LXiWbQjP8+3gHwAfm8EPlB42gAthHxkgBJn7ipg5FGPiCI2pFxBZliPkko8uLnM4RoaXKWV3H6NpGRlekclLqsjwGiYv1JHhydfM574QuDT2caTOScf1NDIULtRNABh1OKXOmZ5GlW7lWCuxPnMErGklw6RO1FMXopKaYCbbhgEKkEVzTLktQcrEtKJQC2Y1YpxirgPgnSPS/jxpfu7dO3QhC3pxszCdvPRpvARVi06Xwh6qrIWfFuFj3ayGK8KX47itnNWZD7AcB0OILFdYmIbhGrb9DaGvgigxob1F9C905/3zsAtoXGfiC3nIHdwVtWdZQYd2RTeyH7mTb1evsMOinO2l2SkaBreTbXskwBgQ2wytPx7cAMCl0VU3DF2lm4v9NNHgqjD3slO33Z4IU6h4srjRtl5zHLjWXnMceDm/a8WES+k1x4EPw4bwptkQfvD+WESCK+U1/4H/0N8E/wRSDxbzY7M8owAAAABJRU5ErkJggg==",
    },

    {
      id: 8,
      name: "swiss franc",
      abr: "chf",
      flag: "https://www.nationsonline.org/flags/switzerland_flag.gif",
    },

    {
      id: 9,
      name: "colombian peso",
      abr: "cop",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAuCAMAAABJYCSCAAAAHlBMVEX/zQDIEC4AMIf+zgMALIgAL4cAMYqFImDMDinHES+a8velAAAANUlEQVRIie3MSQ0AIAAEseUG/4bRQDI/pgKaSJK+1QjphAxCKsHlm2USsgjZhBSCi8vTcggXffQSEN4SINgAAAAASUVORK5CYII=",
    },

    {
      id: 10,
      name: "czech koruna",
      abr: "czk",
      flag: "https://www.worldatlas.com/r/w746/img/flag/cz-flag.jpg",
    },

    {
      id: 11,
      name: "nigerian naira",
      abr: "ngn",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8AfDudGzJvAAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC",
    },

    {
      id: 12,
      name: "dominican peso",
      abr: "dop",
      flag: "data:image/png;base64,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",
    },

    {
      id: 13,
      name: "egyptian pound",
      abr: "egp",
      flag: "https://www.worldatlas.com/r/w746/img/flag/eg-flag.jpg",
    },
  ];

  const [currenciesAbr, setcurrenciesAbr] = useState();
  const [availableCoinAbr, setavailableCoinAbr] = useState();

  const availableCoin = [
    {
      id: 1,
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    },
    {
      id: 2,
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    },
    {
      id: 3,
      symbol: "usdt",
      name: "Tether",
      image:
        "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    },
    {
      id: 4,
      symbol: "xrp",
      name: "XRP",
      image:
        "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    },
    {
      id: 5,
      symbol: "bnb",
      name: "BNB",
      image:
        "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    },
    {
      id: 6,
      symbol: "sol",
      name: "Solana",
      image:
        "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    },
    {
      id: 7,
      symbol: "usdc",
      name: "USDC",
      image:
        "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    },
    {
      id: 8,
      symbol: "steth",
      name: "Lido Staked Ether",
      image:
        "https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    },
    {
      id: 9,
      symbol: "trx",
      name: "TRON",
      image:
        "https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
    },
    {
      id: 10,
      symbol: "doge",
      name: "Dogecoin",
      image:
        "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    },
    {
      id: 11,
      symbol: "ada",
      name: "Cardano",
      image:
        "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    },
    {
      id: 12,
      symbol: "figr_heloc",
      name: "Figure Heloc",
      image:
        "https://coin-images.coingecko.com/coins/images/68480/large/figure.png?1755863954",
    },
    {
      id: 13,
      symbol: "wbt",
      name: "WhiteBIT Coin",
      image:
        "https://coin-images.coingecko.com/coins/images/27045/large/wbt_token.png?1696526096",
    },
    {
      id: 14,
      symbol: "wsteth",
      name: "Wrapped stETH",
      image:
        "https://coin-images.coingecko.com/coins/images/18834/large/wstETH.png?1696518295",
    },
    {
      id: 15,
      symbol: "wbtc",
      name: "Wrapped Bitcoin",
      image:
        "https://coin-images.coingecko.com/coins/images/7598/large/WBTCLOGO.png?1764496367",
    },
    {
      id: 16,
      symbol: "bch",
      name: "Bitcoin Cash",
      image:
        "https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
    },
    {
      id: 17,
      symbol: "wbeth",
      name: "Wrapped Beacon ETH",
      image:
        "https://coin-images.coingecko.com/coins/images/30061/large/wbeth-icon.png?1696528983",
    },
    {
      id: 18,
      symbol: "link",
      name: "Chainlink",
      image:
        "https://coin-images.coingecko.com/coins/images/877/large/Chainlink_Logo_500.png?1760023405",
    },
    {
      id: 19,
      symbol: "usds",
      name: "USDS",
      image:
        "https://coin-images.coingecko.com/coins/images/39926/large/usds.webp?1726666683",
    },
    {
      id: 20,
      symbol: "hype",
      name: "Hyperliquid",
      image:
        "https://coin-images.coingecko.com/coins/images/50882/large/hyperliquid.jpg?1729431300",
    },
  ];

  const [seemore, setseemore] = useState(false);
  const handleseeMore = () => {
    if (seemore === false) {
      setseemore(true);
    } else {
      setseemore(false);
    }
  };
  const [getApp, setgetApp] = useState(false);
  const handlegetAppOpening = () => {
    if (getApp === false) {
      setgetApp(true);
    }
  };
  const handlegetAppClosing = () => {
    setgetApp(false);
  };
  const [firstCard, setfirstCard] = useState(false);
  const [secondCard, setsecondCard] = useState(false);
  const [thirdCard, setthirdCard] = useState(false);
  const [fourthCard, setfourthCard] = useState(false);
  const [fifthCard, setfifthCard] = useState(false);
  const [sixthCard, setsixthCard] = useState(false);
  const [seventhCard, setseventhCard] = useState(false);
  const [eighthCard, seteighthCard] = useState(false);

  // event handlers
  const handlefirstCard = () => {
    if (firstCard === false) {
      setfirstCard(true);
    } else {
      setfirstCard(false);
    }
  };

  const handlesecondCard = () => {
    if (secondCard === false) {
      setsecondCard(true);
    } else {
      setsecondCard(false);
    }
  };

  const handlethirdCard = () => {
    if (thirdCard === false) {
      setthirdCard(true);
    } else {
      setthirdCard(false);
    }
  };

  const handlefourthCard = () => {
    if (fourthCard === false) {
      setfourthCard(true);
    } else {
      setfourthCard(false);
    }
  };

  const handlefifthCard = () => {
    if (fifthCard === false) {
      setfifthCard(true);
    } else {
      setfifthCard(false);
    }
  };

  const handlesixthCard = () => {
    if (sixthCard === false) {
      setsixthCard(true);
    } else {
      setsixthCard(false);
    }
  };

  const handleseventhCard = () => {
    if (seventhCard === false) {
      setseventhCard(true);
    } else {
      setseventhCard(false);
    }
  };

  const handleeighthCard = () => {
    if (eighthCard === false) {
      seteighthCard(true);
    } else {
      seteighthCard(false);
    }
  };

  return (
    <div>
      <section className="box py-40 flex flex-col h-[100vh]  lg:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h4 className="text-4xl ">
            {" "}
            Want to buy crypto? With MoonPay, it’s never been simpler.
          </h4>
          <div className="text-[#928e89] text-xs">
            100+ cryptocurrencies. Plenty of ways to pay. Absolutely zero
            hassle. MoonPay makes it easy to buy, sell, and swap crypto. Open
            your free account today.
          </div>
          <div className="flex items-center gap-10 py-10">
            <div className="flex gap-2 border-r px-2">
              <img src="/images/download.png" alt="" className="h-4" />
              <div className="font-bold">4.4 ★ on App Store</div>
            </div>
            <div className="flex gap-2">
              <img src="/images/download (1).png" alt="" className="h-5" />
              <div className="font-bold">4.5 ★ on google Store</div>
            </div>
          </div>

          <div className=" flex  gap-3 items-center">
            <div className=" bg-[#e2e8f0] h-10 w-10 p-1 rounded-md">
              <img src="/public/images/trustpilot-star-2.svg" alt="" />
            </div>
            <div className="text-sm">
              <h2>TrustScore 4.0</h2>
              <span className="text-xs uppercase font-light text-[#928e89]">
                102k reviews
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="flex gap-5 relative">
            <div
              className="w-max bg-[#edebe8] text-xs flex items-center px-2 py-1 rounded-full uppercase"
              onClick={handlecurrenciesDropOpen}
            >
              {currenciesAbr
                ? CurrenciesArr.filter((item) => item.id === currenciesAbr).map(
                    (item) => <div key={item.id}>{item.abr}</div>
                  )
                : CurrenciesArr.filter((item) => item.id === 11).map((item) => (
                    <div key={item.id}>{item.abr}</div>
                  ))}

              <FaAngleDown className="text-[#535252]" />
            </div>
            <div
              className="w-max bg-[#edebe8] flex items-center px-2 py-1 rounded-full text-xs "
              onClick={handleassetDropOpen}
            >
              <div className="uppercase">
                {availableCoinAbr
                  ? availableCoin
                      .filter((coin) => coin.id === availableCoinAbr)
                      .map((coin) => (
                        <div key={coin.id} className="flex items-center gap-2">
                          <img
                            src={coin.image}
                            alt=""
                            className="h-5 w-5 rounded-[50%]"
                          />
                          {coin.symbol}
                        </div>
                      ))
                  : availableCoin
                      .filter((coin) => coin.id === 1)
                      .map((coin) => (
                        <div key={coin.id} className="flex items-center gap-2">
                          <img
                            src={coin.image}
                            alt=""
                            className="h-5 w-5 rounded-[50%]"
                          />
                          {coin.symbol}
                        </div>
                      ))}
              </div>
              <FaAngleDown className="text-[#535252]" />
            </div>

            <div
              className="bg-[#edebe8] rounded-[50%] p-2 "
              onClick={handlesettingsDropOpen}
            >
              <IoMdSettings />
            </div>
          </div>
          {/* currencies */}
          <div className={currencies ? "absolute " : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlecurrenciesDropclose}
                >
                  <FaAngleDown />
                </div>
                <div>currency</div>
              </div>
              <div className=" bg-white flex items-center gap-2 px-3 border-[#E5E5E5] border-2 rounded-2xl">
                <TfiSearch />
                <input
                  type="text"
                  placeholder="search"
                  className="p-3 border-none focus:border-none focus:outline-none"
                />
              </div>
            </div>
            <div className=" bg-white  w-[300px] h-[300px] ">
              <div className="py-3 p-2 overflow-y-scroll">
                <h3 className="capitalize">popular currencies</h3>
                <div className="flex flex-col gap-4">
                  {CurrenciesArr.slice(0, 3).map((child, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handlecurrenciesDropclose}
                    >
                      <img
                        src={child.flag}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setcurrenciesAbr(child.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {child.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {child.abr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="capitalize">all currencies</h3>
                <div className="flex flex-col gap-4">
                  {CurrenciesArr.slice(3, 13).map((child, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handlecurrenciesDropclose}
                    >
                      <img
                        src={child.flag}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setcurrenciesAbr(child.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {child.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {child.abr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* select asset */}
          <div className={asset ? "absolute " : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handleassetDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div>Select asset</div>
              </div>
              <div className=" bg-white flex items-center gap-2 px-3 border-[#E5E5E5] border-2 rounded-2xl">
                <TfiSearch />
                <input
                  type="text"
                  placeholder="search"
                  className="p-3 border-none focus:border-none focus:outline-none"
                />
              </div>
            </div>
            <div className=" bg-white  w-[300px] h-[300px] ">
              <div className="py-3 p-2 overflow-y-scroll">
                <h3 className="capitalize flex gap-2 items-center">
                  crypto classic <CiCircleInfo />
                </h3>
                <div className="flex flex-col gap-4">
                  {availableCoin?.slice(0, 5).map((coin, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handleassetDropclose}
                    >
                      <img
                        src={coin.image}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setavailableCoinAbr(coin.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {coin.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="capitalize">all tokens</h3>
                <div className="flex flex-col gap-4">
                  {availableCoin?.slice(5, 20).map((coin, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handleassetDropclose}
                    >
                      <img
                        src={coin.image}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setavailableCoinAbr(coin.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {coin.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* setting and logins */}
          <div className={settings ? "absolute" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlesettingsDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div>Settings</div>
              </div>
            </div>

            <div className=" flex flex-col items-center text-center gap-4 mt-8 selection:bg-[#d4d3d1] selection:text-black">
              <img
                src="/public/images/moonpay-no-bg.png"
                alt=""
                className="h-10 w-10"
              />
              <div className="flex flex-col gap-4 w-[250px]">
                <div>
                  <div className="font-bold text-xl">Welcome to MoonPay</div>
                  <div className="text-[10px] text-[#979695]">
                    Sign in to unlock the full experience
                  </div>
                </div>
                <div
                  className="bg-[#7d00ff] text-white rounded-2xl w-full py-1 text-sm font-bold"
                  onClick={handlesigninDropOpen}
                >
                  sign in
                </div>

                <Link to="" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaSliders />
                    <div className="text-sm capitalize">Preferences</div>
                  </div>
                  <FaAngleRight />
                </Link>

                <Link to="" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IoIosInformationCircleOutline />
                    <div className="text-sm capitalize">help</div>
                  </div>
                  <FaAngleRight />
                </Link>

                <Link to="" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MdOutlineSecurity />
                    <div className="text-sm capitalize">
                      terms and disclosures
                    </div>
                  </div>
                  <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>

          {/* sign in  */}
          <div className={signin ? "absolute w-[300px]" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlesigninDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div className="capitalize font-bold text-sm">
                  sign in with MoonPay
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className=" bg-white flex items-center gap-2 px-3 border-[#E5E5E5] border rounded-2xl mt-4">
                <MdEmail />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border-none focus:border-none focus:outline-none"
                />
              </div>

              <div className="bg-[#7d00ff] text-white rounded-2xl w-full py-2 text-sm font-bold text-center">
                continue
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="border border-[#73737C] w-[25%]"></div>
                <div className="capitalize text-[#73737C] text-xs">or sign in with</div>
                <div className="border border-[#73737C] w-[25%]"></div>
              </div>

              <div className="bg-[#f5f5f5] flex justify-center items-center gap-2 w-full py-2 text-sm font-bold text-center rounded-2xl">
                <TiVendorApple className="text-[#b3b3b3]" />
                Apple
              </div>

              <div className="text-[10px] text-[#73737C] text-center">
                This site is protected by <Link to="https://www.hcaptcha.com/" className="text-black">hCaptcha</Link> and its  <Link to="https://www.hcaptcha.com/privacy" className="text-black">Privacy Policy</Link> and
                <Link to="https://www.hcaptcha.com/terms" className="text-black">Terms of Service</Link>  apply. By continuing, you agree to our <Link to="" className="text-black">cookie
                policy</Link> . Powered by
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-b py-10 flex flex-col items-center gap-3">
        <div className="font-bold capitalize">payment methods</div>
        <div className="box lg:w-full flex justify-between gap-18"></div>
      </section>
      <section className="box py-10  mt-10">
        <div>
          <h4 className="text-4xl">How to buy crypto on MoonPay</h4>
          <div className="text-[#737576] font-normal">
            Buy crypto in 150+ countries using the local currency of your bank
            account. We offer different payment options that cater to your
            region.
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start gap-3 justify-center">
            <img
              src=" https://payload-marketing.moonpay.com/api/media/file/open-account-2.svg"
              alt=""
            />
            <h4>1. Open your free account</h4>
            <p className="text-sm">
              Buying cryptocurrency on MoonPay is simple. Sign up for a free
              account in seconds from our app. Then add a few personal details
              to verify your identity.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src=" https://payload-marketing.moonpay.com/api/media/file/choose-crypto-1.svg
           "
              alt=""
            />
            <h4>2. Choose the crypto you want to buy</h4>
            <p className="text-sm">
              Pick from over 100 cryptocurrencies, like Bitcoin (BTC), Ethereum
              (ETH), Solana (SOL), Tether (USDT), USD Coin (USDC) and more.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/open-wallet-address.svg
           "
              alt=""
            />
            <h4>3. Enter your wallet address</h4>
            <p className="text-sm">
              MoonPay works with most non-custodial crypto wallets. And if you
              don’t have a wallet yet, it’s simple to get a non-custodial wallet
              at checkout. Coming to MoonPay through a partner? We’ll pre-fill
              your wallet address automagically.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/top-up-balance.svg
            "
              alt=""
            />
            <h4>4. Top up your MoonPay Balance</h4>
            <p className="text-sm">
              The easiest way to buy cryptocurrency is by topping up your
              MoonPay Balance. Just add funds in your MoonPay account using
              convenient methods like debit card and Apple Pay to enjoy faster
              crypto purchases with lower fees, higher approval rates, and
              zero-fee withdrawals when you cash out to certain payment methods.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/checkout-and-pay-2.svg
            "
              alt=""
            />
            <h4>5. Checkout and pay</h4>
            <p className="text-sm">
              Don't want to pay with your balance? No worries, there are still
              loads of options to choose from. You can pay with a credit/debit
              card, Apple Pay, Google Pay, or PayPal. We also support local
              options such as SEPA , UK Faster Payments, Pix in Brazil, as well
              as Venmo and bank transfers in the US. Once paid, that’s it —
              we’ll handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="box flex flex-wrap gap-5">
          {seemore
            ? availableCoin?.map((item, id) => (
                <div key={id} className="flex gap-2 items-center w-[150px]">
                  <img src={item.image} alt="" className="h-10 w-10" />
                  <div className="text-[10px] font-bold">{item.name}</div>
                  <div className="text-[10px] text-[#928e89] uppercase">
                    {item.symbol}
                  </div>
                </div>
              ))
            : availableCoin?.slice(0, 12).map((item, id) => (
                <div key={id} className="flex gap-3 items-center w-[150px]">
                  <img src={item.image} alt="" className="h-10 w-10" />
                  <div className="text-[10px] font-bold">{item.name}</div>
                  <div className="text-[10px] text-[#928e89] uppercase">
                    {item.symbol}
                  </div>
                </div>
              ))}
        </div>

        <div
          className="mx-auto w-[150px] hover:bg-[#e0dede]  text-black mt-5 flex items-center justify-center gap-2 rounded-md"
          onClick={handleseeMore}
        >
          {seemore ? "show less asset" : "show all asset"}
          {seemore ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </section>

      <section className="py-20">
        <img
          src="https://payload-marketing.moonpay.com/api/media/file/Buy.png"
          alt=""
        />
      </section>

      <section className="box">
        <h4 className="text-4xl">
          The better way to buy crypto, now at your fingertips
        </h4>
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-10">
          <div className="flex items-center">
            <BiGridHorizontal size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Buy 100+ cryptocurrencies. Own fractions of coins
            </p>
          </div>

          <div className="flex  items-center">
            <GoDotFill size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Works in 150+ countries. Use your local currency
            </p>
          </div>

          <div className="flex items-center">
            <PiDotsThreeOutline size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Fees starting from 1%, when you pay with your bank
            </p>
          </div>

          <div className="flex items-center">
            <RxShadowOuter size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Works with credit/debit cards, PayPal and more
            </p>
          </div>
        </div>
      </section>

      <section className="box py-10 flex flex-col lg:grid grid-rows-3 grid-cols-2 gap-2">
        <div className="bg-[#f9f8f5] row-span-1 col-span-2 flex flex-col lg:flex-row items-center justify-between gap-5 p-4 lg:p-20 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/Buy%20SOL.png"
            alt=""
          />
          <div>
            <h4 className="font-bold capitalize">Low and transparent fees</h4>
            <div className="text-[#cdbdaf]">
              We believe in always giving you a fair deal. Transaction fees are
              as low as 1% for bank transfers and 4.5% for Visa cards.
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/start%20little%20%402x.png"
            alt=""
          />

          <div>
            <h4 className="font-bold capitalize">
              Go big, or start small. It’s your call
            </h4>
            <div className="text-[#cdbdaf]">
              Because you can buy a fraction of a coin, you can kickstart your
              crypto journey with a small purchase first. And when you’re ready
              to buy more, MoonPay’s range of payment methods can help with
              that.
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/bring%20together%20all%20your%20wallets%20%402x.png"
            alt=""
          />

          <div>
            <h4 className="font-bold capitalize">
              {" "}
              Bring together all your wallets
            </h4>
            <div className="text-[#cdbdaf]">
              Buy crypto, store it in any non-custodial wallet, and keep track
              of how it’s performing. And if you don’t have a wallet yet, you
              can get one at checkout in the MoonPay app
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/1.%20Discovery.png"
            alt=""
          />
          <h4 className="font-bold capitalize"> Worldwide coverage</h4>
          <div className="text-[#cdbdaf]">
            Buy crypto in 150+ countries using the local currency of your bank
            account. We offer different payment options that work great in your
            region.
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/start%20little-1.png"
            alt=""
          />
          <div>
            <h4 className="font-bold capitalize">Set it. Forget it</h4>
            <div className="text-[#cdbdaf]">
              Tired of trying to time the market perfectly? Try MoonPay's new
              Recurring Buy feature to dollar-cost average your crypto purchases
              at regular intervals like weekly or monthly. *Available in select
              countries only.*
            </div>
          </div>
        </div>
      </section>

      <section className="box py-10 flex flex-col lg:grid grid-rows-4 grid-cols-4 gap-4">
        <div className="col-span-4 row-span-4 flex flex-col">
          <h4 className="text-2xl">Round-the-clock protection</h4>
          <div className="lg:w-[50%] text-[#cdbdaf]">
            Our customers trust us to make buying crypto secure. We follow
            proactive, industry-standard security measures to help keep them
            safe.
          </div>
        </div>

        <div className="col-span-1  flex">
          <div className="flex items-center gap-2">
            <GiTargeting />
            <div>Dedicated fraud and security teams</div>
          </div>
        </div>

        <div className="col-span-1 flex">
          <div className="flex items-center gap-2">
            <WiMoonAltNew />
            <div>Independently audited for ISO 27001 compliance</div>
          </div>
        </div>

        <div className="col-span-1 flex">
          <div className="flex items-center gap-2">
            <GiCorkedTube />
            <div>$8B+ crypto safely delivered</div>
          </div>
        </div>

        <div className="col-span-1 flex">
          <div className="flex items-center gap-2">
            <BsThreeDots />
            <div>35M+ accounts created. Works with 300+ partners</div>
          </div>
        </div>

        <div className="row-span-1 col-span-4 bg-[#f9f8f5] py-10  rounded-lg flex flex-col lg:flex-row items-center gap-5 p-4">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/Our%20Enhanced%20Security%20v3-1.png"
            alt=""
          />
          <div>
            <h4>Our security credentials are in check</h4>
            <div className="text-[#cdbdaf]">
              {" "}
              We use AES-256 encryption and we’re PCI-DSS compliant. We also
              hold the widely-respected ISO 27001 certification. This
              certification is independently audited and a global standard for
              managing information security.
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 bg-[#f9f8f5] py-10 rounded-lg p-5 flex flex-col items-start justify-center gap-3">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/TP%204.1%20en.png"
            alt=""
          />

          <div>
            <h4>We’ve got your back</h4>
            <div className="text-[#cdbdaf]">
              Our custom-built tools and processes were built with security at
              their core. And our specialist team is working constantly to make
              sure you’re protected from emerging threats.
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-[#f9f8f5] py-10 rounded-lg  p-5 flex flex-col items-start justify-center gap-3">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/4.%20P%26L.png"
            alt=""
          />
          <div>
            <h4> It’s your crypto, not ours</h4>
            <div className="text-[#cdbdaf]">
              MoonPay is non-custodial, which means only you have control of
              your crypto. We will never use, lend, or access it without your
              permission.
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-3 py-20">
        <h4 className="capitalize font-extralight">
          trusted by millions of customers
        </h4>
        <div className="font-black text-6xl lg:text-9xl overflow-hidden bg-clip-text text-transparent text-bg">
          {" "}
          35,000,000+
        </div>
      </section>

      <section className="my-20 bg-[url('https://payload-marketing.moonpay.com/api/media/file/Get%20the%20App.png?w=1920&q=90')] bg-no-repeat bg-center bg-cover h-[500px] rounded-3xl flex flex-col items-center justify-center text-center p-20 gap-4">
        <h4 className="text-white font-bold text-3xl lg:text-6xl">
          {" "}
          Get the MoonPay app and buy crypto on the go
        </h4>
        <div className="text-[#cdbdaf]">
          Whether you're a seasoned trader or buying crypto for the first time,
          the MoonPay app gives you the tools to get it done.
        </div>
        <div
          className="bg-white hover:bg-[#cdbdaf] capitalize font-normal px-2 py-1 rounded-md"
          onClick={handlegetAppOpening}
        >
          get moonpay app
        </div>
      </section>

      <section
        className={
          getApp
            ? "px-20 py-10 w-screen bg-white/20 backdrop-blur-sm fixed left-0 top-0 z-30 h-[100vh] flex items-center justify-center"
            : "hidden"
        }
        onClick={handlegetAppClosing}
      >
        <div className="h-[400px] w-[400px] bg-black p-7 rounded-3xl flex flex-col item-center justify-center gap-4">
          <h4 className="text-white text-3xl capitalize font-bold py-4">
            get the moonpay app
          </h4>
          <img src="https://www.moonpay.com/app-download-qr-code.svg" alt="" />
          <div className="text-[#cdbdaf] py-3 overflow-hidden text-center">
            scan the QR code to download the app
          </div>
        </div>
      </section>
      <section className="box py-20">
        <div className="flex flex-col gap-3">
          <h5 className="text-5xl overflow-y-hidden">
            See what our customers say
          </h5>
          <Link
            to="https://www.trustpilot.com/review/moonpay.com"
            className="border border-black w-[250px] gap-1 p-1 rounded-md flex items-center"
          >
            <img
              src="/public/images/trustpilot-star-2.svg"
              alt=""
              className="bg-[#e5e5e5] rounded-full p-1"
            />
            TrustScore 4.0 <span className="text-xs">(102k reviews)</span>
          </Link>
          <div className="w-[400px]">
            With over 100,000 reviews, MoonPay is one of the most reviewed and
            highest scoring platforms for crypto.
          </div>
          <Link
            to="https://www.trustpilot.com/review/moonpay.com"
            className="bg-black text-white capitalize text-center px-4 py-4 rounded-full w-[100px]"
          >
            reviews
          </Link>
        </div>
      </section>
      <section>
        <div className=" w-[1200px] flex justify-between gap-4  slideright">
          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>
        </div>

        <div className=" mt-4 w-[1200px] flex justify-between gap-4  slideleft">
          <div className="   bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>
        </div>
      </section>

      <section className="box flex flex-col lg:grid grid-cols-2 gap-2 py-20">
        {/* section header */}
        <h5 className="text-2xl lg:text-4xl w-[60%] col-span-2">
          Frequently asked questions about buying crypto
        </h5>
        {/* first card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlefirstCard}
          >
            Why buy cryptocurrency?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {firstCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              firstCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            Only you can determine whether buying cryptocurrency is worth it,
            and you should remember that purchasing any cryptocurrency carries
            certain risks. Some factors that others may consider when deciding
            whether to make a purchase are the token's price, market cap,
            supply, as well as your individual risk appetite.MoonPay cannot
            offer you investment advice and cannot tell you whether any
            cryptocurrency is worth buying. Always remember to do your own
            research before making any purchase!
          </div>
        </div>

        {/* second card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col h-max gap-3">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlesecondCard}
          >
            What credit cards can I use to purchase cryptocurrency?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {secondCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              secondCard
                ? "text-[#737373] text-sm flex flex-col gap-2 font-medium"
                : "hidden"
            }
          >
            <p>
              {" "}
              You can use any Visa, Mastercard or Maestro debit card or credit
              card to buy crypto on MoonPay.We also support bank transfers, and
              mobile options like Apple Pay and Google Pay. If you're interested
              in buying crypto with local methods, we accept SEPA (EU), Faster
              Payments Service (UK), and PIX (Brazil).
            </p>
            <p>
              You can also top up your wallet with euros, pounds, or dollars and
              use your MoonPay Balance to purchase crypto like Bitcoin,
              Ethereum, and more. With MoonPay Balance, you'll enjoy quicker
              transactions, higher approval rates, and zero-fee withdrawals when
              you cash out via bank transfer.
            </p>
          </div>
        </div>

        {/* third card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max ">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlethirdCard}
          >
            How many cryptocurrencies does MoonPay support?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {thirdCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              thirdCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay allows you to buy cryptocurrency from our catalog of more
            than 100 supported tokens. Choose from cryptocurrencies like Bitcoin
            (BTC), Ethereum (ETH), Solana (SOL), and XRP (XRP), or stablecoins
            like Tether (USDT), USDC (USDC), and Dai (DAI).
          </div>
        </div>

        {/* fourth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlefourthCard}
          >
            How long does it take to receive crypto purchased on MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {fourthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              fourthCard
                ? "text-[#737373] text-sm flex flex-col gap-2 font-medium"
                : "hidden"
            }
          >
            <p>
              Delivery times for crypto transactions can vary based on the
              payment method used to purchase. You can receive your crypto in as
              little as 5 minutes when paying by credit/debit card. If you pay
              with bank transfer, receiving your crypto can take between 1-3
              business days.
            </p>

            <p>
              *Note: For first time customers, additional security checks could
              take up to a few hours, even when buying cryptocurrency by card.
            </p>
          </div>
        </div>

        {/* fifth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlefifthCard}
          >
            What is cryptocurrency used for?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {fifthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              fifthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            <p>
              {" "}
              You can buy crypto and use it to pay for goods and services, send
              money internationally, buy NFTs, play blockchain-based games, or
              simply store your digital assets in a cryptocurrency wallet.
            </p>
            <p>
              Since cryptocurrencies are digital currencies that run on
              decentralized networks and can be programmed into numerous app,
              the potential use cases are limitless.
            </p>
          </div>
        </div>

        {/* sixth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlesixthCard}
          >
            What are the fees to buy crypto with MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {sixthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              sixthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay fees vary by payment method, ranging from 1% for bank
            transfers to 4.5% for select credit card purchases. If you want to
            buy crypto without these processing fees, just pay with your MoonPay
            Balance. Top up your balance with fiat currencies like USD, EUR and
            GBP to start buying cryptocurrency like Bitcoin without the added
            cost. Plus, enjoy zero-fee withdrawals when you cash out with
            certain payment methods.
          </div>
        </div>

        {/* seventh card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handleseventhCard}
          >
            Is it safe to buy cryptocurrency using MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {seventhCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              seventhCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay is used by more than 35 million users worldwide, since our
            founding in 2019. We are constantly improving our fiat-to-crypto
            on-ramp and cryptocurrency exchange features to better serve our
            global customers. MoonPay’s compliance and security measures aim to
            protect and safeguard our customers.
          </div>
        </div>

        {/* eighth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handleeighthCard}
          >
            Can you implement dollar-cost averaging with crypto?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {eighthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              eighthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            No one can decide the perfect time to buy cryptocurrency. You can
            buy crypto through one-time purchases, or through a recurring buy
            order. MoonPay's recurring crypto purchases allow you to gain
            cryptocurrency price exposure over time at weekly or monthly
            intervals, helping to limit the risk of volatility through
            dollar-cost averaging principles.
          </div>
        </div>
      </section>

      <section className="bg-black  rounded-t-4xl py-20">
        <div className="box flex flex-col gap-10">
          <h4 className="text-white text-4xl">
            Need some help before buying cryptocurrencies?
          </h4>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="bg-[#1a1a1a] rounded-lg p-5">
              <img
                src="https://payload-marketing.moonpay.com/api/media/file/learn%20section%20asset-1.png"
                alt=""
              />
              <div className="text-white">
                <h4 className="capitalize text-xl">
                  Starting in Crypto: NFTs and Web3 Trends.
                </h4>
                <div className="flex gap-1">
                  <div className="text-[#737373] text-xs">
                    Learn all about crypto swaps and NFTs, and discover what’s
                    trending in the budding world of Web3.
                  </div>
                  <Link to="" className="bg-[#222] p-2 text-center rounded-lg">
                    {" "}
                    <MdArrowOutward size={30} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-7">
              <img
                src="https://payload-marketing.moonpay.com/api/media/file/help%20asset.png"
                alt=""
              />

              <div className="text-white">
                <h4 className="capitalize text-xl">Help Center</h4>
                <div className="flex gap-1">
                  <div className="text-[#737373] text-xs">
                    Find all the answers to your MoonPay questions and start
                    swapping cryptocurrency with confidence.
                  </div>
                  <Link to="" className="bg-[#222] p-2 text-center rounded-lg">
                    {" "}
                    <MdArrowOutward size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BuycryptoPage;
