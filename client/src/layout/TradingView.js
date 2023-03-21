import React from 'react'
import './stock.css'
import './indices.css'
function TradingView() {
    
  return (
    <div className='Tradingview'>
        <div className='stock_view'>
        <iframe src="stock.html" style={{ width: 900, height: 900}}>
        </iframe>
        </div>
        <div className='indices_view'>
            <iframe src="indices.html" style={{ width: 900, height: 900}}>
            </iframe>
        </div>
        <div className='quote_view'>
       
        </div>
    </div>
  )
}

export default TradingView