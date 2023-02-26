import React from "react";
import AdminInfoForm from "./components/adminInfoForm/AdminInfoForm";
import Heading from "./components/heading/Heading";
import Title from "./components/title/Title";
import "./index.scss";

export default function Admin() {
  return (
    <div className="container">
      <Heading />
      <Title />
      <AdminInfoForm />
    </div>
  );
}
