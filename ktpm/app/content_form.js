import React from "react";
import ReactDOM from "react-dom";
export default class Content_form extends React.Component
{
  handle_send_form(){
    var obj={
      MaP:this.txtMaP.value,
      GiaTien:this.txtGiaTien.value,
      ThongTin:this.txtThongTin.value
    }
    $.post("api/roomajax.php",obj,function(data){

    })
  }
  render()
  {
    return(
          <div className="">
            <div className="clearfix"></div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Form Design <small>different form elements</small></h2>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <br />
                    <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">MÃ PHÒNG
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input
                          ref={(input)=>{this.txtMaP=input}}
                          type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">GIÁ TIỀN
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input
                          ref={(input)=>{this.txtGiaTien=input}}
                          type="text" id="last-name" name="last-name" required="required" className="form-control col-md-7 col-xs-12"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">THÔNGTIN</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <textarea
                          ref={(input)=>{this.txtThongTin=input}}
                          id="thongtin" className="form-control col-md-7 col-xs-12" name="thongtin">
                          </textarea>
                        </div>
                      </div>
                      <div className="ln_solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
						  <button className="btn btn-primary" type="reset">Reset</button>
                          <button
                          onClick={this.handle_send_form.bind(this)}
                          type="submit" className="btn btn-success">Submit</button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
