import React, { useState, useEffect } from "react";
import Ticker, { FinancialTicker } from "nice-react-ticker";
import backendAPI from "../backendAPI/BackendAPI";

export default function TickerHeader() {
  const [headline, setHeadline] = useState(null);

  const getData = () => {
    backendAPI
      .render("10")
      .then((res) => {
        if (res.data.success) {
          setHeadline(res.data.allResult.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Ticker>
      {headline &&
        headline.map((element) => (
          <FinancialTicker
            change={element.quote.USD.percent_change_1h > 0 ? true : false}
            symbol={element.symbol}
            lastPrice={(
              (element.quote.USD.price *
                (100 - element.quote.USD.percent_change_1h)) /
              100
            ).toFixed(2)}
            percentage={
              Math.abs(element.quote.USD.percent_change_1h.toFixed(3)) + "%"
            }
            currentPrice={element.quote.USD.price.toFixed(2)}
          />
        ))}
    </Ticker>
  );
}
