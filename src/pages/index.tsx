// import type { NextPage } from "next";

import Head from "next/head";

import { Box, Container, Grid } from "@mui/material";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Budget from "@/components/dashboard/Budget";
import TotalCustomers from "@/components/dashboard/TotalCustomers";
import TasksProgress from "@/components/dashboard/TasksProgress";
import TotalProfit from "@/components/dashboard/TotalProfit";
import Sales from "@/components/dashboard/Sales";
import TrafficByDevice from "@/components/dashboard/TrafficByDevice";
import LatestProducts from "@/components/dashboard/LatestProducts";
import LatestOrders from "@/components/dashboard/LatestOrders";

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
              <Budget />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              <TotalCustomers />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              <TasksProgress />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              <TotalProfit sx={{ height: "100%" }} />
            </Grid>

            <Grid item xl={9} lg={8} md={12} xs={12}>
              <Sales />
            </Grid>
            <Grid item xl={3} lg={4} md={6} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>

            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
