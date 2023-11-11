import React from "react";
import Header from "./(components)/Header";
import Button from "./(components)/Button";
import Card from "./(components)/Card";
import Jazz from "./(components)/Jazz";
import Grid from "./(components)/Grid";
import Form from "./(components)/Form";
import Home from "./(components)/Home";

const page = () => {
  return (
    <div>
      <Header />
      <Button />
      <Card />
      <Jazz />
      <Grid />
      <Form />
      <Home />
    </div>
  );
};

export default page;
