import React from "react";
import ReactDOM from "react-dom";
export default class Menu extends React.Component
{
  render()
  {
    var stype={border: '0px'};
    return(
         <div className="left_col scroll-view">
           <div className="navbar nav_title" style={stype}>
             <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
           </div>
           <br />

           <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
             <div className="menu_section">
               <h3>General</h3>
               <ul className="nav side-menu">
                 <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                 </li>
                 <li><a><i className="fa fa-home"></i> ffff <span className="fa fa-chevron-down"></span></a>
                 </li>
               </ul>
             </div>
           </div>
           <div className="sidebar-footer hidden-small">
             <a data-toggle="tooltip" data-placement="top" title="Settings">
               <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
             </a>
             <a data-toggle="tooltip" data-placement="top" title="FullScreen">
               <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
             </a>
             <a data-toggle="tooltip" data-placement="top" title="Lock">
               <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
             </a>
             <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
               <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
             </a>
           </div>
         </div>

    );
  }
}
