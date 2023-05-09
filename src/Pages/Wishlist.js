import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { wishlistItemlist } from "../store/cart-slice";
import React from "react";
import { CiTrash } from "react-icons/ci";
import { FcApproval } from "react-icons/fc";
// import notFound from "../asset/notFound.png";
import Card from "@mui/material/Card";
import BasicModal from "../component/Modal";

const Wishlist = () => {
  const wishlistItems = useSelector(wishlistItemlist);
  const [showBasicModal, setShowBasicModal] = React.useState(false);

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
                      <CiTrash
                        // onClick={() => {
                        //   setShowBasicModal(true)
                        // }}
                        style={{
                          fontSize: "25px",
                          color: "rgb(244, 67, 54)",
                          float: "right",
                        }}
                        className="me-2"
                      />
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
                {/* <img
                  src={notFound}
                  alt="not found"
                  loading="lazy"
                  width="30%"
                  textAlign="center"
                  alignItems="center"
                /> */}
                <h5 style={{ textAlign: "center" }}>
                  No Product in your wishlist.
                </h5>
              </div>
            </Card>
          </>
        )}
      </Container>
      {showBasicModal && (
        <BasicModal
          open={showBasicModal}
          handleClose={() => setShowBasicModal(false)}
        />
      )}
    </div>
  );
};

export default Wishlist;
