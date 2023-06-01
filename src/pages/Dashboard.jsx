import Cards from "../components/dashboard/Cards";
import Reservations from "../components/dashboard/Reservations";
import Messages from "../components/dashboard/Messages";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
          <Cards/>
          <Reservations/>
          <Messages/>
    </Layout>
  )
}

export default Dashboard