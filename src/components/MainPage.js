import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import CryptoTable from "./CryptoTable";

function MainPage() {
  const [result, setResult] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setResult(JSON.parse(localStorage.getItem("price")));
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 60) {
          setResult(JSON.parse(localStorage.getItem("price")));
          return 0;
        } else {
          return prevProgress + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Container>
      {result && (
        <CryptoTable
          data={result.data}
          status={result.status}
          progress={progress}
        />
      )}
    </Container>
  );
}

export default MainPage;
