import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemCard from "../component/ItemCard";
import { latestProducts } from "./Home";
import notFound from "../asset/notFound.png";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const query = searchParams.get("query");
  const itemQuery = query ? searchParams.get("query") : "";

  useEffect(() => {
    const filteredProducts = latestProducts.filter((product) =>
      product?.title?.toLowerCase().includes(itemQuery.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [query, itemQuery]);

  return (
    <Container>
      <div>
        <Container className="mt-3 mb-5" style={{ minHeight: "60vh" }}>
          <h3>Searched Items</h3>
          <Grid container spacing={3}>
            {query && filteredProducts.length > 0 ? (
              <>
                {filteredProducts?.map((product) => (
                  <Grid item xs={2} key={product.title}>
                    <ItemCard product={product} />
                  </Grid>
                ))}
              </>
            ) : (
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
                <h5 style={{ textAlign: "center" }}>No Product Found.</h5>
              </div>
            )}
          </Grid>
        </Container>
      </div>
    </Container>
  );
};

export default SearchPage;
