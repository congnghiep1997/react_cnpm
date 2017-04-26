import React from "react";
import ReactDOM from "react-dom";
import Search from "./search.js";
import Room from "./room.js";
export default class Content extends React.Component
{
  render()
  {
    return(
      <div>
          <div className="clearfix"></div>

          <div className="row">
            <div className="col-md-12">
              <div className="x_panel">
                <div className="x_content">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                      <ul className="pagination pagination-split">
                        <li><a href="#">A</a></li>
                        <li><a href="#">B</a></li>
                        <li><a href="#">C</a></li>
                        <li><a href="#">D</a></li>
                        <li><a href="#">E</a></li>
                        <li>...</li>
                        <li><a href="#">W</a></li>
                        <li><a href="#">X</a></li>
                        <li><a href="#">Y</a></li>
                        <li><a href="#">Z</a></li>
                      </ul>
                    </div>

                    <div className="clearfix"></div>
                    /*Room*/
                    <Room/>
                    /*EndRoom*/
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
