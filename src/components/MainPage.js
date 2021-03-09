import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import backendAPI from "../backendAPI/BackendAPI";
import CryptoTable from "./CryptoTable";

function MainPage() {
  const [data, setData] = useState(null);
  // const getData = () => {
  //   backendAPI
  //     .render()
  //     .then((res) => {
  //       if (res.data.success) {
  //         localStorage.setItem(
  //           "price",
  //           JSON.stringify(res.data.allResult.data)
  //         );
  //         setData(res.data.allResult.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("price")));
    const timer = setInterval(() => {
      setData(JSON.parse(localStorage.getItem("price")));
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <Container>{data && <CryptoTable data={data} />}</Container>;
}

export default MainPage;
