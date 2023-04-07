// import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, margin } from "@mui/system";
import ItemCard from "../component/ItemCard";
import { useSelector } from "react-redux";
import { selectItemlist, wishlistItemlist } from "../store/cart-slice";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
// import { FiDelete } from "react-icons/Fi";
import { CiTrash } from "react-icons/ci";

const rows = [];
const Wishlist = ({ products, total, onCheckoutClicked }) => {
  const wishlistItems = useSelector(wishlistItemlist);
  const [quantity, setQuantity] = useState(0);

  console.log(wishlistItems);

  return (
    <div>
      <Container component={Paper}>
        <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {/* <CiTrash /> */}
              <TableCell></TableCell>
              <TableCell style={{ marginLeft: "160", fontSize: 20 }}>
                Product name
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="left">
                Unit price
              </TableCell>
              <TableCell
                style={{ marginLeft: "100", fontSize: 20 }}
                align="left"
              >
                Stock Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlistItems?.map((product) => (
              <TableRow
                key={product.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <CiTrash />
                  <Checkbox defaultChecked />
                </TableCell>

                <TableCell component="th" scope="row">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      marginRight: "1rem",
                    }}
                    src={product.image}
                  />
                  {product.title}
                  {/* <FiDelete /> */}
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Wishlist;
