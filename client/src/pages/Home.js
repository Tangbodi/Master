import React, { useEffect, useState } from "react";
import "./Home.css"
import axios from "axios";
import { Link, useParams, Navigate } from "react-router-dom";
import TradingView from "../layout/TradingView"
import GeneralNews from "../layout/GeneralNews";
import QuoteViewChart from "../layout/QuoteViewChart"
export default function Home() {
  const [stocks, setStocks] = useState([]);
  const [Modelname, setModelname] = useState("");

  const {id} = useParams();

  useEffect(() => {
    loadStocks();
  }, []);

  const loadStocks = async () => {
    const result = await axios.get("http://localhost:8080/stocks");
    setStocks(result.data);
  };

  const deleteStock = async (id) => {
    await axios.delete(`http://localhost:8080/stock/${id}`);
    loadStocks();
  };

  const getModal=async(stock)=>{
    const symbol = `${stock.ticker}`;
    setModelname(symbol);
    console.log(Modelname)
    // alert (`${ticker}`);
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
          <Link className="btn btn-outline-light" to="/addstock" style={{background:'#40c747'}}>
            Add Symbol
          </Link>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Symbol</th>
              <th scope="col">Shares</th>
              <th scope="col">Avg Cost/Share</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock,index) => (
              <tr  onClick={() => getModal(stock)} style={{cursor:"pointer"}}>
                <th scope="row" key={index}>
                    {index +1}
                </th>
                <td>{stock.ticker}</td>
                <td>{stock.quantity}</td>
                <td>{stock.dealPrice}</td>
                <td>{stock.tradeDate}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editstock/${stock.id}`}
                  >
                    Edit
                  </Link>
              <button
              className="btn btn-danger mx-2"
              onClick={()=>deleteStock(stock.id)}>
                Delete
              </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {/* <GeneralNews/> */}
        </div>
      </div>
      <div>
      {/* <TradingView/> */}
      
      </div>
     
    </div>
  );
}