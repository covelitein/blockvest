import { lazy, Suspense } from "react";
import Snowfall from "react-snowfall";
import { Route, Routes } from "react-router-dom";
import { wait } from './assets/utils/functions'

const Home = lazy(async () => {
  await wait(1000);
  return import("./view/Home");
});

const Login = lazy(async () => {
  await wait(1000);
  return import("./view/Login");
});
const Register = lazy(async () => {
  await wait(1000);
  return import("./view/Register");
});
const Dashboard = lazy(async () => {
  await wait(1000);
  return import("./view/Dashboard");
});

import Loader from './components/Loader'

const App = () => {
 
  return (
    <div className="relative min-h-[100vh] bg-[#111]">
      {/* <Snowfall style={{zIndex:'10000'}} snowflakeCount={30} speed={[0.5, 1.0]} /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
