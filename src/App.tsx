import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"
import { Footer, Header } from "./components"
import { HomePage, ModelPage, ShopPage, SettingsPage, NotFoundPage } from "./pages";


// type TRouterPages = {
//   path: string;
//   element: JSX.Element;
//   errorPage: JSX.Element;
//   propsElement?: [];
//   loader?: {};
// }
// const routerPages: TRouterPages[] = [{
//   path: "/",
//   element: <Home />,
//   errorPage: <PageNotFound />,
// }]
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default App