import { useState, useEffect } from 'react';
import { InputBox } from './Component/Input';
import useCurrencyInfo from './hooks/usecurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0); // Amount to convert
  const [from, setFrom] = useState('usd'); // Base currency
  const [to, setTo] = useState('inr'); // Target currency
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount
  const [loading, setLoading] = useState(true); // Loading state

  const { data: currencyInfo, loading: currencyLoading } = useCurrencyInfo(from);

  const options = currencyInfo && Object.keys(currencyInfo).length > 0 ? Object.keys(currencyInfo) : [];

  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]); // Calculate conversion when currency data is available
    }
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  // Handle loading state
  if (currencyLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to} // Corrected to use 'to' instead of 'from'
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
