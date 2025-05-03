import React, { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BINANCE:BTCUSDT",
      theme: "dark",
      autosize: true,
      interval: "D",
      timezone: "Etc/UTC",
      style: "1",
      locale: "en",
    });
    widgetRef.current.appendChild(script);

    return () => {
      widgetRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={widgetRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewChart;
