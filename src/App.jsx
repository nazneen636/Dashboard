import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Expenses from "./pages/Expenses";
import Dashboard from "./pages/Dashboard";
import Root from "./Root";
import Summary from "./pages/Summary";
import Account from "./pages/Account";
import Wallets from "./pages/Wallets";
import Setting from "./pages/Setting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Expenses />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/summary" element={<Summary />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/wallets" element={<Wallets />}></Route>
      <Route path="/settings" element={<Setting />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
