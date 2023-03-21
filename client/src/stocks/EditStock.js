import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStock() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [stock, setStock] = useState({
    ticker: "",
    quantity: "",
    dealPrice: "",
    tradeDate:"",
  });

  const { ticker, quantity, dealPrice, tradeDate } = stock;

  const onInputChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStock();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/stock/${id}`, stock);
    navigate("/");
  };

  const loadStock = async () => {
    const result = await axios.get(`http://localhost:8080/stock/${id}`);
    setStock(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Stock</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Ticker" className="form-label">
                Symbol
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=""
                name="ticker"
                value={ticker}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Shares" className="form-label">
              Shares
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=""
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Avg Cost/Share" className="form-label">
              Avg Cost/Share
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=""
                name="dealPrice"
                value={dealPrice}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
              Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=""
                name="tradeDate"
                value={tradeDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}