import Head from "next/head";
import { Box, Container } from "@mui/material";
import CustomerListResults from "@/components/customer/CustomerListResults";
import CustomerListToolbar from "@/components/customer/CustomerListToolbar";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { customers } from "@/mocks/customers";

const Page = () => (
  <>
    <Head>
      <title>Customers</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
