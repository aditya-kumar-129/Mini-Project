import React from "react";
import img from "../../myImages/c4.jpg";
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
          Safety first! The most important reason doping is a big deal is the
          fact that many of these substances can have harmful and long-lasting
          side effects which may include the following: Cardiovascular:
          irregular heart rhythm, elevated blood pressure, heart attack, sudden
          death Central Nervous System: insomnia, anxiousness, depression,
          aggressive behavior, suicide, headache, addiction with withdrawal,
          psychosis, tremor, dizziness, stroke Respiratory: nose bleeds,
          sinusitis Hormonal: infertility, gynecomastia enlarged breasts,
          decreased testicular size, low sex drive, acromegaly coarse bones in
          face, hands, and feet, cancer The second issue is more of a moral
          dilemma. These banned substances are used to gain an unfair advantage
          which significantly devalues the spirit of competition. As stated by
          the World Anti-Doping Agency WADA, the purpose of an anti-doping
          program is “to protect the athletes fundamental right to participate
          in doping-free sport and thus promote health, fairness and equality
          for athletes worldwide…”
        </h5>
      </div>
      <br />
    </>
  );
}
