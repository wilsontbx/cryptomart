import React, { useState, useEffect } from "react";

function CryptoInfo(props) {
  const [data, setData] = useState(null);
  const symbol = props.match.params.symbol;

  const getData = () => {
    // backendAPI
    //   .getMeta(symbol)
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
