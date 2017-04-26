import React from "react";
import ReactDOM from "react-dom";
import Search from "./search.js";
export default class Room extends React.Component
{
  render()
  {
    return(
      <div className="col-md-4 col-sm-4 col-xs-12 profile_details">
        <div className="well profile_view">
          <div className="col-sm-12">
            <h4 className="brief"><i>Digital Strategist</i></h4>
            <div className="left col-xs-7">
              <h2>Nicole Pearson</h2>
              <p><strong>About: </strong> Web Designer / UI. </p>
              <ul className="list-unstyled">
                <li><i className="fa fa-building"></i> Address: </li>
                <li><i className="fa fa-phone"></i> Phone #: </li>
              </ul>
            </div>
            <div className="right col-xs-5 text-center">
              <img src="images/user.png" alt="" className="img-circle img-responsive"/>
            </div>
          </div>
          <div className="col-xs-12 bottom text-center">
            <div className="col-xs-12 col-sm-6 emphasis">
              <p className="ratings">
                <a>4.0</a>
                <a href="#"><span className="fa fa-star"></span></a>
                <a href="#"><span className="fa fa-star"></span></a>
                <a href="#"><span className="fa fa-star"></span></a>
                <a href="#"><span className="fa fa-star"></span></a>
                <a href="#"><span className="fa fa-star-o"></span></a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 emphasis">
              <button type="button" className="btn btn-success btn-xs"> <i className="fa fa-user">
                </i> <i className="fa fa-comments-o"></i> </button>
              <button type="button" className="btn btn-primary btn-xs">
                <i className="fa fa-user"> </i> View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
