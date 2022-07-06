import React from "react";
import "./profile.css";
import virat_kohli from "../myImages/virat kohli.jpg";
const Profile = () => {
  var authData = localStorage.getItem("authUser");
  var authUser = JSON.parse(authData);
  const authUserName = authUser.displayName;
  const authUserEmail = authUser.email;
  const userID = authUserName.split(" ")[0];

  return (
    <>
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="w-50 card p-4">
          <div class="image d-flex flex-column justify-content-center align-items-center">
            <button class="btn btn-secondary">
              <img src={virat_kohli} height="120" width="120" alt="userImage" />
            </button>
            <span class="name mt-3">{authUserName}</span>
            <span class="emailId">{authUserEmail}</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2">
              <span class="user">@{userID}</span>{" "}
              <span>
                <i class="fa fa-copy"></i>
              </span>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3">
              <span class="number">
                1069 <span class="follow">Followers</span>
              </span>
            </div>
            <div class="text mt-3">
              <span>
                Crickter.
                <br />
                Best player of the year.
              </span>
            </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              <span>
                <i class="fa fa-twitter"></i>
              </span>
              <span>
                <i class="fa fa-facebook-f"></i>
              </span>
              <span>
                <i class="fa fa-instagram"></i>
              </span>
              <span>
                <i class="fa fa-linkedin"></i>
              </span>
            </div>
            <div class=" px-2 rounded mt-4 date ">
              <span class="join">Joined May,2022</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
