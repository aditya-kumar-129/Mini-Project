import React from "react";
import "./profile.css";
import virat_kohli from "../myImages/virat kohli.jpg";
const Profile = () => {
  return (
    <>
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="w-50 card p-4">
          <div class="image d-flex flex-column justify-content-center align-items-center">
            <button class="btn btn-secondary">
              <img src={virat_kohli} height="120" width="120" alt="userImage" />
            </button>
            <span class="name mt-3">Virat Kohli</span>
            <span class="emailId">kohlivirat@gmail.com</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2">
              <span class="user">@Virat129</span>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3">
              <span class="number">
                240 Million <span class="follow">Followers</span>
              </span>
            </div>
            <div class="text mt-3">
              <span>
                Crickter.
                <br />
                Best player of the year.
              </span>
            </div>
            <div class=" px-2 rounded mt-4 date ">
              <span class="join">Joined May,2022</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
