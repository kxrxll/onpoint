import { useState } from "react";

import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import MessagePage from "./components/MessagePage/MessagePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {
  const [page, setPage] = useState(1);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);

  return (
    <>
      <Layout 
        setPage={setPage}
        setSlideLeft = {setSlideLeft}
        setSlideRight = {setSlideRight}
      >
        {page === 1 ? <MainPage
          setPage={setPage}
          slideLeft = {slideLeft}
          slideRight = {slideRight}
          setSlideLeft = {setSlideLeft}
        /> : false}
        {page === 2 ? <MessagePage 
          slideLeft = {slideLeft}
          slideRight = {slideRight}
        /> : false}
        {page === 3 ? <DetailsPage 
          slideLeft = {slideLeft}
          slideRight = {slideRight}
        /> : false}
      </Layout>
    </>
  );
}

export default App;
