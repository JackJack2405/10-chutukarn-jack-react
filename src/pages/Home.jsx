import { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import Admin from "./Admin";
import User from "./User";


export default function Home () {
  const [view, setView] = useState("");
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="font-semibold text-5xl" >
        <h1>Generation Thailand</h1>
        {view === "" && <h1>React - Assessment</h1>}
        {view === "User" && <h1>Home - User view</h1>}
        {view === "Admin" && <h1>Home - Admin view</h1>}
      </div>
      <div className="flex justify-center items-center mt-10 gap-10">
        <ToggleButton
          onClick={() => {
            setView("User");
          }}
        >
          User Home View
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setView("Admin");
          }}
        >
          Admin Home View
        </ToggleButton>
      </div>
      <div className="tableview w-9/10">
      
      {view === "User" && <User/>}
      {view === "Admin" && <Admin />}
    </div>
    </div>
  );
}
