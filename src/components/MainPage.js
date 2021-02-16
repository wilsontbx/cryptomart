import React from "react";
import backendAPI from "../backendAPI/BackendAPI";

function MainPage() {
  backendAPI
    .render()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return <div>Hello World</div>;
}

export default MainPage;
