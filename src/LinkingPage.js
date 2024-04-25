import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const LinkingPage = () => {
  return (
    <div >
       <div style={{backgroundColor: "grey",padding:"5px",margin:"5px",fontSize:"20px",color:"white"}}>
       <ul>
            <li>
            <NavLink to={"/UseMemoHooks"}>UseMemoHooks</NavLink>
            </li>
            <li>
            <Link to={"/UseCallBackHooks"}>UseCallBackHooks</Link>
            </li>
            <li>
            <Link to={"/UseDefferhook"}>UseDefferhook</Link>
            </li>
            <li>
            <Link to={"/UseInsertingHook"}>UseInsertingHook</Link>
            </li>
            <li>
            <Link to={"/UseReducerHooks"}>UseReducerHooks</Link>
            </li>
            <li>
            <Link to={"/UseTranstionhook"}>UseTranstionhook</Link>
            </li>
            <li>
            <Link to={"/UseSyncExternalHook"}>UseSyncExternalHook</Link>
            </li>
            <li>
            <Link to={"/UseIdHook"}>UseIdHook</Link>
            </li>
        </ul>
       </div>
        <Outlet/>
    </div>
  )
}

export default LinkingPage