import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Data
import { smdata } from "./smphonedata";
import Mobile from "./smartphone";

const SmartPhoneList = () => {
  return (
    <main>
      {smdata.map((data, index) => {
        return <Mobile Key={data.id} {...data}></Mobile>;
      })}
    </main>
  );
};

ReactDom.render(<SmartPhoneList />, document.getElementById("root"));
