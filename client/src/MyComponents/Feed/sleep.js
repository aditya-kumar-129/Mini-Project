import React from "react";
import img from "../../myImages/c2.jpg";
import styles from "./feed.module.css";

const mystyle = {
  height: "70vh",
  width: "100vw",
};

export default function brandManagement() {
  return (
    <>
      <img src={img} className={styles.image} alt="..." style={mystyle} />
      <h1 className="display-3 text-center fw-bold mt-3">Sleep</h1>
      <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
      <br />
      <div className="text-start ms-5 me-5 mb-5">
        <h5 className={styles.text}>
          Recommendations for athletes range between seven and nine hours
          nightly17. Elite athletes are encouraged to get at least nine hours of
          sleep nightly and to treat sleep with as much importance as athletic
          training and diet. In contrast, people who exercise moderately likely
          do not need as much sleep as elite performers.{" "}
        </h5>
      </div>
      <br />
    </>
  );
}
