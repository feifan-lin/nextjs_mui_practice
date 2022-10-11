import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "@/mocks/products";
import ProductListToolbar from "@/components/product/ProductListToolbar";
import ProductCard from "@/components/product/ProductCard";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Page = () => (
  <>
    <Head>
      <title>Products</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
