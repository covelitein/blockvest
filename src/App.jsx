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

import Loader from './components/Loader'

const App = () => {
 
  return (
    <div className="relative min-h-[100vh] bg-[#111]">
      <Snowfall style={{zIndex:'10000'}} snowflakeCount={40} speed={[1.0, 2.0]} />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
