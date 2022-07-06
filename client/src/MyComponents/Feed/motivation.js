import React from 'react';
import img from '../../myImages/c5.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
  };

export default function brandManagement() {
    return (
        <>
        <img src={img} className="img-responsive" alt="..." style={mystyle}/>
        <h1 className="display-3 text-center fw-bold mt-3">Hygiene</h1>
        <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
        <br />
        <div className='text-start ms-5 me-5 mb-5'>
            <h5 className='fs-3 mt-2 mb-5'>
            Motivation is the mental process that initiates, sustains or guides an athlete’s behavior (training, approach to competition, managing adversity, performance).
There are two types of motivation in sports: intrinsic motivation and extrinsic motivation.
Intrinsic motivation refers to athletic behavior that is driven by internal or personally meaningful rewards (opportunities to explore, learn, and actualize potential).
Intrinsically motivated athletes participate in sport for reasons such as: the enjoyment of playing their sport, the challenge of competition and reaching new personal levels, skill improvement, exploration of potential, etc.
Intrinsically motivated athletes typically concentrate on skill improvement and their growth as athletes.
Extrinsic motivation refers to athletic behavior that is geared toward earning external rewards or to avoid punishment.
Extrinsically motivated athletes participate in sport for motives such as external rewards (trophies, scholarships, media attention, accolades) or to avoid negative consequences (being benched, falling out of favor with coach, disapproval of parent).
Extrinsically motivated athletes tend to focus on the outcomes of athletic contests.
                  </h5>
        </div>
        <br/>
        </>
    )
}