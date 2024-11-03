"use server";

import * as React from "react";
import { Cryptoo } from "./columns";
import { columns } from "./columns";
import { DataTable } from "./data-table";

// Dummy data function
async function getData(): Promise<Cryptoo[]> {
  const apiKey = process.env.NEXT_CRYPTO_KEY; // Ensure this is set in your environment

  // Check if the API key is defined
  if (!apiKey) {
    throw new Error("API key is not defined. Please set the NEXT_CRYPTO_KEY environment variable.");
  }

  const symbols = ["BTC", "ETH", "QNT", "FET" , "SHIB" , "PEOPLE" , "STRK" , "REZ" , "MANTA" , "MEW" , "PEPE" , "POPCAT" , "BRETT" ]; // Use valid cryptocurrency ticker symbols
  const requests = symbols.map((symbol) => {
    return fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': apiKey, // Ensure this is always a string
          'Accept': 'application/json',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then(errData => {
            throw new Error(`Error ${response.status}: ${errData.message || response.statusText}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        const cryptoData = data.data[symbol];

        if (!cryptoData) {
          console.warn(`No data found for symbol: ${symbol}`);
          return {
            id: symbol,
            category: null,
            name: symbol,
            avg_price: null,
            price: null,
            total: null,
            margin: null,
          };
        }

        return {
          id: symbol,
          category: null,
          name: cryptoData.name, // Use the name from the response
          avg_price: null,
          price: parseFloat(cryptoData.quote.USD.price), // Current price in USD
          total: null,
          margin: null,
        };
      })
      .catch((error) => {
        console.error(`Error fetching data for symbol: ${symbol}`, error);
        return {
          id: symbol,
          category: null,
          name: symbol,
          avg_price: null,
          price: null,
          total: null,
          margin: null,
        };
      });
  });

  // Wait for all requests to complete
  return await Promise.all(requests);
}

export default async function Saham() {
  const data = await getData();
  return (
    <div>
      <div className="flex flex-row mb-2 space-x-2 justify-end"></div>
      <div className="border-2 rounded-lg p-2">
        <h1 className="mb-4">Cryptocurrency</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
