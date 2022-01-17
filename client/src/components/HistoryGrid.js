import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const columns = [
  { field: "type", headerName: "Type", width: 100, editable: false },
  {
    field: "seller",
    headerName: "Seller",
    width: 200,
    editable: false,
  },
  {
    field: "buyer",
    headerName: "Buyer",
    width: 200,
    editable: false,
    renderCell: (params) => {
      return (
        <Link component={RouteLink} to={"/tz/" + params.row.buyerAddr}>
          {params.value}
        </Link>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "price_tez",
    headerName: "Price (tez)",
    type: "number",
    width: 200,
    editable: false,
  },
  {
    field: "price_usd",
    headerName: "Price (usd)",
    type: "number",
    width: 200,
    editable: false,
  },
  {
    field: "time",
    headerName: `Time (${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    type: "dateTime",
    width: 200,
    editable: false,
  },
];

// const rows = [
//   {
//     id: 1,
//     type: "swap",
//     seller: "Snow",
//     buyer: "Jon",
//     amount: 1,
//     price_tez: 10,
//     price_usd: 10 * 4,
//     time: new Date().toLocaleString(),
//   },
//   {
//     id: 2,
//     type: "swap",
//     seller: "Snow",
//     buyer: "Jon",
//     amount: 1,
//     price_tez: 20,
//     price_usd: 20 * 4,
//     time: new Date(1000).toLocaleString(),
//   },
// ];

export default function HistoryGrid({ data }) {
  const [rows, setRows] = useState([]);
  useEffect(async () => {
    const res = await fetch("https://api.tzkt.io/v1/quotes/last");

    const currPrice = await res.json();
    console.log(currPrice);

    // parse rows
    const parsed = data.map((row, i) => {
      return {
        id: i,
        buyerAddr: row.buyer?.address,
        sellerAddr: row.seller?.address || row.creator.address,
        type: row.type,
        seller:
          row.seller?.name ||
          row.seller?.address ||
          row.creator.name ||
          row.creator.address,
        buyer: row.buyer?.name || row.buyer?.address || "",
        amount: row.amount,
        price_tez: (row.swap ? row.swap.price : row.price) / 1000000,
        price_usd:
          ((row.swap ? row.swap.price : row.price) / 1000000) * currPrice.usd,
        time: new Date(row.timestamp).toLocaleString(),
      };
    });
    console.log("row data:", data);
    setRows(parsed);
  }, [data]);
  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        sx={{
          border: "none",
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "primary.main",
          },
          "& .MuiDataGrid-menuIconButton": {
            color: "primary.main",
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        disableSelectionOnClick
      />
    </div>
  );
}
