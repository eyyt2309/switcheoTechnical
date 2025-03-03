/* import useState and useEffect*/

/* function below expects a blockchain attribut of walletbalance but it doesnt have*/
interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance {
  currency: string;
  amount: number;
  formatted: string;
}

class Datasource {
  // TODO: Implement datasource class
}

/* Boxprops is an unknown interface that props extends*/
interface Props extends BoxProps {}
/* dont need :Props as React.FC<Props> already explictly expects props */
const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  /* define explicitly state type of prices to prevent runtime errors or NaN */
  const [prices, setPrices] = useState({});

  /*useEffect will keep getting called even if no data has changed, should use react query instead*/
  useEffect(() => {
    const datasource = new Datasource(
      "https://interview.switcheo.com/prices.json"
    );
    datasource
      .getPrices()
      .then((prices) => {
        setPrices(prices);
      })
      .catch((error) => {
        console.err(error);
      });
  }, []);

  const getPriority = (blockchain: any): number => {
    switch (blockchain) {
      case "Osmosis":
        return 100;
      case "Ethereum":
        return 50;
      case "Arbitrum":
        return 30;
      case "Zilliqa":
        return 20;
      case "Neo":
        return 20;
      default:
        return -99;
    }
  };

  const sortedBalances = useMemo(() => {
    return (
      balances
        .filter((balance: WalletBalance) => {
          /* wrong variable put, put balance priority */
          const balancePriority = getPriority(balance.blockchain);
          if (lhsPriority > -99) {
            /*should return true if balance > 0 */
            if (balance.amount <= 0) {
              return true;
            }
          }
          return false;
        })
        /* need to include a return 0 for equal priorities */
        /* use direct comparison */
        .sort((lhs: WalletBalance, rhs: WalletBalance) => {
          const leftPriority = getPriority(lhs.blockchain);
          const rightPriority = getPriority(rhs.blockchain);
          if (leftPriority > rightPriority) {
            return -1;
          } else if (rightPriority > leftPriority) {
            return 1;
          }
        })
    );
  }, [balances, prices]);

  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    return {
      ...balance,
      formatted: balance.amount.toFixed(),
    };
  });

  const rows = sortedBalances.map(
    (balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        /* unknown component */
        <WalletRow
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    }
  );

  return <div {...rest}>{rows}</div>;
};
