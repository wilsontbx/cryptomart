import React, { useState, useEffect } from "react";
import backendAPI from "../backendAPI/BackendAPI";

function CryptoInfo(props) {
  const [data, setData] = useState(null);
  const symbol = props.match.params.symbol;

  const getData = () => {
    // backendAPI
    //   .coinInfo(symbol)
    //   .then((res) => {
    //     if (res.data.success) {
    //       setData(res.data.allResult.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
}

export default CryptoInfo;
