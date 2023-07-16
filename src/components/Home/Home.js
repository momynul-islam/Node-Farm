import React, { useContext } from "react";
import "./Home.css";
import { DATACONTEXT } from "../../App";
import OverviewCard from "../OverviewCard/OverviewCard";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const products = useContext(DATACONTEXT);
  console.log("HOME - ", products);

  return (
    <main>
      <section className="overview">
        {products.map((product) => (
          <OverviewCard key={product.id} product={product}></OverviewCard>
        ))}
      </section>
    </main>
  );
};

export default Home;
