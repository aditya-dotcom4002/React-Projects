import { useState} from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) //useCurrencyInfo jo custom hook banaya tha usko yahan call kar rhe hain

  const options = Object.keys(currencyInfo)  /*vo sara jo currency ka values aata hain throogh API 
    those are the data and Data humne "data" naame ke variable me pass karwaya tha in useCurrencyInfo function.
    Ab yahan pr humne useCurrencyInfo hook ko upar call kiya or usko ek variable me store kara diya "currencyInfo".
    ab jo data hain uski values for eg- {inr:82.66} inr is key and 82 is value.. to options jo user ko show karenge 
    vo values to hoga nai sirf keys show karenge to wohi humne Object.keys(currencyInfo) le liya or usko options naame ke variabl me store kara diya*/
 

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/32172202/pexels-photo-32172202/free-photo-of-intricate-carvings-on-antique-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange= {(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange = {(amount) => setAmount(amount)}
    
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                onClick = {swap}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                  label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange= {(currency) => setTo(currency)}
                                selectCurrency={to}
                                onAmountChange = {(currency) => setAmount(amount)}
                                amountDisable
    
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
