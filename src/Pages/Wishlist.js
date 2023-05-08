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
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  selectItemlist,
  wishlistItemlist,
} from "../store/cart-slice";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
// import { FiDelete } from "react-icons/Fi";
import { CiTrash } from "react-icons/ci";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import notFound from "../asset/notFound.png";
import Card from "@mui/material/Card";

const rows = [];
const Wishlist = ({ products, total, onCheckoutClicked }) => {
  const wishlistItems = useSelector(wishlistItemlist);
  const [quantity, setQuantity] = useState(0);
  const Wishlist = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(
      cartActions.Wishlist({
        ...product,
      })
    );
  };

  return (
    <div>
      <Container className="mb-5" style={{ minHeight: "50vh" }}>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Your Wishlist
        </h2>
        <br></br>
        {wishlistItems && wishlistItems.length > 0 ? (
          <Card style={{ padding: 10, width: "100%" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="large"
              aria-label="a dense table"
            >
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
                      {/* <Checkbox defaultChecked /> */}
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
                        alt="productImage"
                      />
                      {product.title}
                      {/* <FiDelete /> */}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.price}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.status}
                      <FcApproval />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        ) : (
          <>
            <Card style={{ padding: 10, width: "100%" }}>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <img
                  src={notFound}
                  alt="not found"
                  loading="lazy"
                  width="30%"
                  textAlign="center"
                  alignItems="center"
                />
                <h5 style={{ textAlign: "center" }}>
                  No Product in your wishlist.
                </h5>
              </div>
            </Card>
          </>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
