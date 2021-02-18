import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import backendAPI from "../backendAPI/BackendAPI";
import CryptoTable from "./CryptoTable";

function MainPage() {
  const [data, setData] = useState(null);
  const getData = () => {
    backendAPI
      .render()
      .then((res) => {
        if (res.data.success) {
          setData(res.data.allResult.data);
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return <Container>{data && <CryptoTable data={data} />}</Container>;
}

export default MainPage;
