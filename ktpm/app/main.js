import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Room from "./room";
import Content from "./content";
import Editform from "./editform";
import Search from "./search.js";
import Content_form from "./content_form.js";

class App extends React.Component
{
  constructor(props){
    super(props)
    $.get("api/get_room_ajax.php",function(data){
      this.aroom = data
      this.setState({room:this.aroom})
    },'json')
  }
  render()
  {
    return(
      <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <Menu/>
          </div>
          <div className="right_col" role="main">
            <Search/>
            <Editform valueRoom={this.state.room}/>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
