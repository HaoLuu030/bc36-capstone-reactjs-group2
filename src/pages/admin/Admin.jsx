import React from "react";
import AdminForm from "./components/adminForm/AdminForm";
import Heading from "./components/heading/Heading";
import Title from "./components/title/Title";
import "./index.scss";

export default function Admin() {
  return (
    <div className="container">
      <Heading />
      <Title />
      <AdminForm />
    </div>
  );
}
