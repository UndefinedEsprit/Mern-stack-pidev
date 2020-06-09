import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside class="left-sidebar">
      <div class="scroll-sidebar">
        <nav class="sidebar-nav">
          <ul id="sidebarnav">
            <li>
              <Link
                className="waves-effect waves-dark"
                to="/management/studies"
              >
                <i class="fas fa-chart-line"></i>
                <span class="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li>
              <a
                class="waves-effect waves-dark"
                href="pages-profile.html"
                aria-expanded="false"
              >
                <i class="fas fa-tasks"></i>
                <span class="hide-menu">Management</span>
              </a>
            </li> 
            <li>
              <Link
                className="waves-effect waves-dark"
                to="/studiespage"
              >
                <i class="fas fa-chart-line"></i>
                <span class="hide-menu">Analysis and Statistics</span>
              </Link>
            </li> 

            <li> 
            <Link
                className="waves-effect waves-dark"
                to=""
              >
                <i class="fa fa-users"></i>
                <span class="hide-menu">Customers</span>
              </Link>
               </li>          
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
