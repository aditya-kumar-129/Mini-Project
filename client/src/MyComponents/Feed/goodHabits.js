import React from 'react';
import img from '../../myImages/c6.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
  };

export default function brandManagement() {
    return (
        <>
        <img src={img} className="img-responsive" alt="..." style={mystyle}/>
        <h1 className="display-3 text-center fw-bold mt-3">Good Habits</h1>
        <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
        <br />
        <div className='text-start ms-5 me-5 mb-5'>
            <h5 className='fs-3 mt-2 mb-5'>
            Training, putting in the time and energy to be successful is the most obvious action. But how you do it counts. And it applies to all levels of athletes. Consistency is the key. There will be days with bad weather, or when you will want to go out with your friends and just have a fun time. There is nothing wrong in taking a day off once in a while. But you need to keep track and know there are days when you simply must decide to train, no matter what.
                </h5>
        </div>
        <br/>
        </>
    )
}