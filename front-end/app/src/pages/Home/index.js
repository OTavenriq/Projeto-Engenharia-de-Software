import React, { useEffect, useState } from "react";
import "./home.css";
import Table from "../../components/table/index.js";
import Sidebar from "../../components/sidebar/index.js";
import Modal from "../../components/modal/index.js";

export default function Home() {

  return (
    <div className="">
      <Sidebar />
      <div className="content">
        <div className="main-container">
          <h1 >Bem-vindo ao Dashboard</h1>
        </div>
      </div>
    </div>
  );
}
