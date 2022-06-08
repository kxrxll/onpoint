import { useState } from "react";

import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import MessagePage from "./components/MessagePage/MessagePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <Layout pageChanger={setPage}>
        {page === 1 ? <MainPage /> : false}
        {page === 2 ? <MessagePage /> : false}
        {page === 3 ? <DetailsPage /> : false}
      </Layout>
    </>
  );
}

export default App;
