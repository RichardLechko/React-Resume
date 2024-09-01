import React, { useState, useEffect, useCallback } from "react";
import { IoRefresh } from "react-icons/io5";

const Currency = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [startCurrency, setStartCurrency] = useState("USD");
  const [endCurrency, setEndCurrency] = useState("EUR");
  const [firstCurrVal, setFirstCurrVal] = useState("");
  const [secondCurrVal, setSecondCurrVal] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch("/api/currency-key");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setExchangeRates(data.rates);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, []);

  const convertCurr = useCallback(() => {
    if (!exchangeRates[startCurrency] || !exchangeRates[endCurrency]) {
      setSecondCurrVal("");
      return;
    }

    const firstCurr = parseFloat(firstCurrVal);
    if (isNaN(firstCurr) || !isFinite(firstCurr)) {
      setSecondCurrVal("");
      return;
    }

    const rate = exchangeRates[endCurrency] / exchangeRates[startCurrency];
    const result = firstCurr * rate;

    setSecondCurrVal(
      result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }, [firstCurrVal, startCurrency, endCurrency, exchangeRates]);

  const handleFlip = () => {
    const tempCurrency = startCurrency;
    setStartCurrency(endCurrency);
    setEndCurrency(tempCurrency);
  };

  useEffect(() => {
    convertCurr();
  }, [firstCurrVal, startCurrency, endCurrency, exchangeRates, convertCurr]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-10 h-[50vh]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-auto mb-4 md:mb-0">
          <form className="flex flex-col">
            <div className="outline-1 outline-black outline-double mb-2 flex flex-col md:flex-row">
              <input
                type="text"
                name="currency-startVal"
                id="currency-startVal"
                className="text-lg md:text-xl font-bold text-center p-3 md:p-[15px] border-b-2 md:border-b-0 md:border-r-2 border-black"
                value={firstCurrVal}
                onChange={(e) => setFirstCurrVal(e.target.value)}
              />
              <select
                className="text-lg md:text-xl font-bold text-center p-3 md:p-[15px]"
                name="currency-start"
                id="currency-start"
                value={startCurrency}
                onChange={(e) => setStartCurrency(e.target.value)}
              >
                <option value="USD">United States Dollar</option>
                <option value="AUD">Australian Dollar</option>
                <option value="BGN">Bulgaria Lev</option>
                <option value="BRL">Brazil Real</option>
                <option value="CAD">Canada Dollar</option>
                <option value="CHF">Switzerland Franc</option>
                <option value="CNY">China Yuan/Renminbi</option>
                <option value="CZK">Czech Koruna</option>
                <option value="DKK">Denmark Krone</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Great British Pound</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HRK">Croatia Kuna</option>
                <option value="HUF">Hungary Forint</option>
                <option value="IDR">Indonesia Rupiah</option>
                <option value="ILS">Israel New Shekel</option>
                <option value="INR">India Rupee</option>
                <option value="ISK">Iceland Krona</option>
                <option value="JPY">Japan Yen</option>
                <option value="KRW">South Korea Won</option>
                <option value="MXN">Mexico Peso</option>
                <option value="MYR">Malaysia Ringgit</option>
                <option value="NOK">Norway Kroner</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="PHP">Philippines Peso</option>
                <option value="PLN">Poland Zloty</option>
                <option value="RON">Romania New Lei</option>
                <option value="RUB">Russia Rouble</option>
                <option value="SEK">Sweden Krona</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="THB">Thailand Baht</option>
                <option value="TRY">Turkish New Lira</option>
                <option value="USD">United States Dollar</option>
                <option value="ZAR">South Africa Rand</option>
              </select>
            </div>
            <div className="outline-1 outline-black outline-double mb-2 flex flex-col md:flex-row">
              <input
                type="text"
                name="currency-endVal"
                id="currency-endVal"
                className="text-lg md:text-xl font-bold text-center p-3 md:p-[15px] border-b-2 md:border-b-0 md:border-r-2 border-black"
                value={secondCurrVal}
                readOnly
              />
              <select
                className="text-lg md:text-xl font-bold text-center p-3 md:p-[15px]"
                name="currency-end"
                id="currency-end"
                value={endCurrency}
                onChange={(e) => setEndCurrency(e.target.value)}
              >
                <option value="EUR">Euro</option>
                <option value="AUD">Australian Dollar</option>
                <option value="BGN">Bulgaria Lev</option>
                <option value="BRL">Brazil Real</option>
                <option value="CAD">Canada Dollar</option>
                <option value="CHF">Switzerland Franc</option>
                <option value="CNY">China Yuan/Renminbi</option>
                <option value="CZK">Czech Koruna</option>
                <option value="DKK">Denmark Krone</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Great British Pound</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HRK">Croatia Kuna</option>
                <option value="HUF">Hungary Forint</option>
                <option value="IDR">Indonesia Rupiah</option>
                <option value="ILS">Israel New Shekel</option>
                <option value="INR">India Rupee</option>
                <option value="ISK">Iceland Krona</option>
                <option value="JPY">Japan Yen</option>
                <option value="KRW">South Korea Won</option>
                <option value="MXN">Mexico Peso</option>
                <option value="MYR">Malaysia Ringgit</option>
                <option value="NOK">Norway Kroner</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="PHP">Philippines Peso</option>
                <option value="PLN">Poland Zloty</option>
                <option value="RON">Romania New Lei</option>
                <option value="RUB">Russia Rouble</option>
                <option value="SEK">Sweden Krona</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="THB">Thailand Baht</option>
                <option value="TRY">Turkish New Lira</option>
                <option value="USD">United States Dollar</option>
                <option value="ZAR">South Africa Rand</option>
              </select>
            </div>
          </form>
        </div>
        <div className="flex-grow flex justify-center items-center mt-4 max-md:mt-0">
          <i
            id="flip-icon"
            className="rotate-90 hover:cursor-pointer p-4 text-[4rem]"
            onClick={handleFlip}
          >
            <IoRefresh />
          </i>
        </div>
      </div>
      {error && <p className="text-red-500 mt-4 md:mt-0">{error}</p>}
    </div>
  );
};

export default Currency;
