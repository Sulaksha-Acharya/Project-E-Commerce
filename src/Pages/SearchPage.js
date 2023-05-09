import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ItemCard from '../component/ItemCard'
import { latestProducts } from './Home'

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const query = searchParams.get('query')
  const itemQuery = query ? searchParams.get('query') : ''

  useEffect(() => {
    const filteredProducts = latestProducts.filter((product) =>
      product?.title?.toLowerCase().includes(itemQuery.toLowerCase())
    )
    setFilteredProducts(filteredProducts)
  }, [query, itemQuery])

  return (
    <Container>
      <div>
        <Container className='mt-3 mb-5' style={{ minHeight: '60vh' }}>
          <h1>Searched Items</h1>
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
              <h5 style={{ marginTop: '40px', marginLeft: '30px' }}>
                No Product Found.
              </h5>
            )}
          </Grid>
        </Container>
      </div>
    </Container>
  )
}

export default SearchPage
