import React, { useEffect, useRef } from 'react';
import "./QuoteViewChart.css"

let tvScriptLoadingPromise;

export default function TradingViewWidget(props) {
  const onLoadScriptRef = useRef();
  const n = props.clickedname;
  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_f9253') && 'TradingView' in window) {
          new window.TradingView.MediumWidget({
            symbols: [[n+"|1D|USD"]],
            chartOnly: false,
            width: 1000,
            height: 500,
            locale: "en",
            colorTheme: "dark",
            autosize: false,
            showVolume: true,
            hideDateRanges: false,
            hideMarketStatus: false,
            hideSymbolLogo: false,
            scalePosition: "right",
            scaleMode: "Normal",
            fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            fontSize: "12",
            noTimeScale: false,
            valuesTracking: "1",
            changeMode: "price-and-percent",
            chartType: "line",
            fontColor: "rgba(255, 255, 255, 1)",
            gridLineColor: "rgba(0, 0, 0, 0)",
            volumeUpColor: "rgba(34, 171, 148, 1)",
            volumeDownColor: "rgba(247, 82, 95, 1)",
            widgetFontColor: "rgba(255, 255, 255, 1)",
            container_id: "tradingview_f9253"
          });
        }
      }
    },
    [n]
  );

  return (
    <div className='Stock_Information'>
    <div className='tradingview-widget-container'>
      <div style={{ width: 900, height: 600}} id='tradingview_f9253' />
    </div>
    <div className='Statistics_table'>
    </div>
    </div>
  );
}
