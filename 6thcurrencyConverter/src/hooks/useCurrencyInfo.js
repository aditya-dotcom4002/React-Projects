import { useState, useEffect} from 'react'


function useCurrencyInfo(currency) {
  const [data, setData] = useState(0)
  useEffect(() => {
    fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
  }, [currency])
  
  return data
}

export default useCurrencyInfo // yahan pr main ek functionality design kari or pura ka pura ek method ko hin return kardiya
 // yahan hamara part1 finish : designing custom hooks  