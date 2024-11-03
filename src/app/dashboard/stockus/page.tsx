"use server";

import * as React from "react";
import type { Saham } from "./columns";
import { columns } from "./columns";
import { DataTable } from "./data-table";

// Dummy data function
async function getData(): Promise<Saham[]> {
  const apiKey = process.env.NEXT_US_STOCK_KEY;
  const symbols = ["AAPL","IBM"];
  const requests = symbols.map((symbol) => {
    return fetch(
      `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2023-11-03/2023-11-03?apiKey=${apiKey}`
      // `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=M44pGZDRQFC23hiG9uBAxPC0WZktda9x`
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
        if (!data || !data.results || data.results.length === 0) {
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

        // Get the price from the response
        const stockInfo = data.results[0]; // Assuming the first result contains the needed data
        return {
          id: symbol,
          category: null,
          name: symbol,
          avg_price: null,
          price: stockInfo.c, // Current price
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

  return await Promise.all(requests);
}


export default async function Saham() {
  const data = await getData();
  return (
    <div>
      <div className="flex flex-row mb-2 space-x-2 justify-end"></div>
      <div className="border-2 rounded-lg p-2">
      <h1 className="mb-4">United State Stock</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
