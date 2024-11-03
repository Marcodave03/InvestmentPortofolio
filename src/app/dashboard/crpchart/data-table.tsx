// // data-table.tsx
// import React from 'react';

// interface CryptoData {
//   id: string;
//   name: string;
//   price: number | null;
// }

// interface DataTableProps {
//   data: CryptoData[];
// }

// export const DataTable: React.FC<DataTableProps> = ({ data }) => {
//   return (
//     <table className="min-w-full border-collapse border border-gray-300">
//       <thead>
//         <tr>
//           <th className="border border-gray-300 px-4 py-2">ID</th>
//           <th className="border border-gray-300 px-4 py-2">Name</th>
//           <th className="border border-gray-300 px-4 py-2">Price (USD)</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((crypto) => (
//           <tr key={crypto.id} className="hover:bg-gray-100">
//             <td className="border border-gray-300 px-4 py-2">{crypto.id}</td>
//             <td className="border border-gray-300 px-4 py-2">{crypto.name}</td>
//             <td className="border border-gray-300 px-4 py-2">
//               {crypto.price !== null ? `$${crypto.price.toFixed(2)}` : 'N/A'}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
