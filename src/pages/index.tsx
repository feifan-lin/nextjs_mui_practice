// import type { NextPage } from "next";

import Head from "next/head";

import { Box, Container, Grid } from "@mui/material";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

// import { DashboardLayout } from "/src/components/dashboard/dashboard_layout";

const Page = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              1
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              2
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              3
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
