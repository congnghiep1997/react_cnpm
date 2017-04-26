import React from "react";
import ReactDOM from "react-dom";
export default class Editform extends React.Component
{
  constructor(props){
    super(props)
    this.style={
        color:"#fff",
        fontWeight:"500px"
    }
  }
  render()
  {
    $.each(this.props.valueRoom,function(index,giatri){
      this.value = giatri
    })
    return(
      <div className="">
              <div className="clearfix"></div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">

                  <div className="x_content">

                    <div className="table-responsive">
                      <table className="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr className="headings">
                            <th>
                              <input type="checkbox" id="check-all" className="flat"/>
                            </th>
                            <th className="column-title">Invoice </th>
                            <th className="column-title">Invoice Date </th>
                            <th className="column-title">Order </th>
                            <th className="column-title">Bill to Name </th>
                            <th className="column-title">Status </th>
                            <th className="bulk-actions" colspan="7">
                              <a className="antoo" style={this.style}>Bulk Actions ( <span className="action-cnt"> </span> ) <i className="fa fa-chevron-down"></i></a>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {
                                <tr className="even pointer">
                                  <td className="a-center ">
                                    <input type="checkbox" className="flat" name="table_records"/>
                                  </td>
                                  <td className=" ">{this.value.MaP}</td>
                                  <td className=" ">{this.value.MaP}</td>
                                  <td className=" ">{this.value.MaP}</td>
                                  <td className=" ">{this.value.MaP}<i className="success fa fa-long-arrow-up"></i></td>
                                  <td className=" ">View</td>
                                </tr>
                          }
                        </tbody>
                      </table>
                    </div>


                  </div>
                </div>
              </div>
            </div>
    );
  }
}
