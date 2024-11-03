"use server";

import * as React from "react";
import type { Saham } from "./columns";
import { columns } from "./columns";
import { DataTable } from "./data-table";

// Dummy data function
async function getData(): Promise<Saham[]> {
  const apiKey = process.env.NEXT_IDX_STOCK_KEY; // Make sure this is set in your environment
  const symbols = ["IBM","BBCA","NVDA"]; // Change this to your desired symbols
  const requests = symbols.map((symbol) => {
    return fetch(
      //`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
      // ZI5FOGDKC824COGM
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
        console.log('Fetched data:', data); // Log the fetched data

        if (!data["Time Series (5min)"]) {
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

        // Get the latest price from the response
        const latestTime = Object.keys(data["Time Series (5min)"])[0]; // Get the latest time
        const stockInfo = data["Time Series (5min)"][latestTime];

        return {
          id: symbol,
          category: null,
          name: symbol,
          avg_price: null,
          price: parseFloat(stockInfo["1. open"]), // Open price
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
        <h2 className="mb-4">Indonesian Stock</h2>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
