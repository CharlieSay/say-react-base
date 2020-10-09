import React, { Suspense } from "react";
import Loading from "./pages/utility-pages/loading";
import Main from "./Main";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </HelmetProvider>
  );
};
export default App;
