import React from "react";
import img from "../../myImages/c3.jpg";
import styles from "./feed.module.css";

const mystyle = {
  height: "70vh",
  width: "100vw",
};

export default function brandManagement() {
  return (
    <>
      <img src={img} className={styles.image} alt="..." style={mystyle} />
      <h1 className="display-3 text-center fw-bold mt-3">Hygiene</h1>
      <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
      <br />
      <div className="text-start ms-5 me-5 mb-5">
        <h5 className={styles.text}>
          Hand washing for at least 20 seconds, and showering at home before and
          after physical activity, is crucial for good hygiene - please
          encourage all those taking part to do so. People are less likely to
          wash their hands if the only running water available is cold, so make
          sure warm water and antibacterial hand soap are easily accessible to
          anybody taking part in physical activity. In instances where hot and
          cold water is not available, hand sanitisers should be used as an
          alternative Topping up soap dispensers can harbour bacteria, so you
          should wait until a soap dispenser is empty to refill it. Provide
          disposable towels rather than multi-use where possible. People should
          also avoid touching their face. To help people with this, encourage a
          message of keeping hands below shoulder level where possible.
        </h5>
      </div>
      <br />
    </>
  );
}
