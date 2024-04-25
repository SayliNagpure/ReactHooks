import UseCallBackHooks from "./UseCallBackHook/UseCallBackHooks";
import UseDefferhook from "./useDefferHook/UseDefferhook";
import { UseIdHook } from "./UseIdHook/UseIdCoponent";
import Parent from "./UseImparativehandleHook/Parent";
import UseInsertingHook from "./UseInsertingEffect/UseInsertingHook";
import UseMemoHooks from "./UseMemoHook/UseMemoHooks";
import UseReducerHooks from "./UseReducerHook/UseReducerHooks";
import UseSyncExternalHook from "./UseSyncHook/UseSyncExternalHook";
import UseTranstionhook from "./UseTranstionHook/UseTranstionhook";
// import {BrowserRouter} from "react-router"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkingPage from "./LinkingPage";
import Errorpage from "./Errorpage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkingPage />} >
            <Route path="/UseMemoHooks" element={<UseMemoHooks />} />
            <Route path="/UseCallBackHooks" element={<UseCallBackHooks />} />
            <Route path="/UseDefferhook" element={<UseDefferhook />} />
            <Route path="/UseInsertingHook" element={<UseInsertingHook />} />
            <Route path="/UseReducerHooks" element={<UseReducerHooks />} />
            <Route path="/UseSyncExternalHook" element={<UseSyncExternalHook />} />
            <Route path="/UseTranstionhook" element={<UseTranstionhook />} />
            <Route path="/UseIdHook" element={<UseIdHook Name="fristName" type="text" />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
