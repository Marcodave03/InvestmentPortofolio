// "use client"; // This indicates that the component will run on the client side

// import React, { useEffect, useState } from "react";
// import { DataTable } from "./data-table"; // Ensure you have a DataTable component
// import { Line } from "react-chartjs-2"; // Chart.js for line chart

// const tickerOptions = ["BTC", "ETH", "LTC"]; // List of cryptocurrency tickers

// export default function CryptoPage() {
//   const [selectedTicker, setSelectedTicker] = useState(tickerOptions[0]); // Default to the first ticker
//   const [cryptoData, setCryptoData] = useState<any>(null); // Store the fetched data
//   const [chartData, setChartData] = useState<any>(null); // Store chart data

//   // Function to fetch cryptocurrency data
//   const fetchCryptoData = async (symbol: string) => {
//     const apiKey = process.env.NEXT_CRYPTO_KEY; // Ensure this is set in your environment

//     if (!apiKey) {
//       throw new Error("API key is not defined. Please set the NEXT_CRYPTO_KEY environment variable.");
//     }

//     try {
//         const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`, {
//             headers: {
//                 'X-CMC_PRO_API_KEY': "ce45019d-fe9c-4c6a-a0e6-04e3b507541e", // Your API key
//                 'Accept': 'application/json',
//             },
//         });

//       if (!response.ok) {
//         const errData = await response.json();
//         throw new Error(`Error ${response.status}: ${errData.message || response.statusText}`);
//       }

//       const data = await response.json();
//       const cryptoData = data.data[symbol];

//       if (!cryptoData) {
//         console.warn(`No data found for symbol: ${symbol}`);
//         return null;
//       }

//       return {
//         id: symbol,
//         name: cryptoData.name,
//         price: parseFloat(cryptoData.quote.USD.price),
//       };
//     } catch (error) {
//       console.error(`Error fetching data for symbol: ${symbol}`, error);
//       return null;
//     }
//   };

//   // Effect to fetch data when the selected ticker changes
//   useEffect(() => {
//     const loadCryptoData = async () => {
//       const data = await fetchCryptoData(selectedTicker);
//       setCryptoData(data);

//       // Prepare chart data if needed
//       // For example, you might want to fetch historical data for the chart
//       // const historicalData = await fetchHistoricalData(selectedTicker);
//       // setChartData(historicalData);
//     };

//     loadCryptoData();
//   }, [selectedTicker]); // Fetch data whenever the selected ticker changes

//   return (
//     <div>
//       <div className="flex flex-row mb-2 space-x-2 justify-end">
//         <select
//           value={selectedTicker}
//           onChange={(e) => setSelectedTicker(e.target.value)}
//           className="p-2 border rounded"
//         >
//           {tickerOptions.map((ticker) => (
//             <option key={ticker} value={ticker}>
//               {ticker}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="border-2 rounded-lg p-2">
//         <h1 className="mb-4">Cryptocurrency Data</h1>
//         {cryptoData ? (
//           <DataTable data={[cryptoData]} /> // Pass the fetched data to the DataTable
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//       {chartData && (
//         <div className="mt-4">
//           <h2>Price Chart</h2>
//           <Line data={chartData} /> {/* Render your line chart here */}
//         </div>
//       )}
//     </div>
//   );
// }
