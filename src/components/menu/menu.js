import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="container" id="kubon-nav-menu">
        <div className="row">
          <div className="col-xs-6 col-sm-2 col-sm-pull-6 kubon-logo">
            <div>
              <a href="# rel=">
                <img alt="Independent" className="img-responsive" src="https://static.savings-united.com/image_setting/109/logo/logo.png" />
              </a>
            </div>
          </div>
          <div className="col-xs-3 col-sm-4 col-sm-pull-6 search-form">
            <div className="form-group">
              <label htmlFor="input_search_header" className="sr-only">Search coupons and offers</label>
              <input className="form-control" id="input_search_header" placeholder="Tìm kiếm ... "></input>
              <button>
                <svg id="ubitec-icon-search3" viewBox="0 0 20 20" width="100%" height="100%">
                  <g className="ab" clipPath="url(#a)">
                    <path className="ac" d="M19.523 19.361l-5.611-5.835a7.936 7.936 0 1 0-.558.509l5.624 5.849a.378.378 0 0 0 .545-.523zM8.3 15.1a7.174 7.174 0 1 1 7.175-7.17A7.182 7.182 0 0 1 8.3 15.1z" fill="#f26422"></path>
                  </g>
                </svg>
              </button>
            </div>
           
          </div>
          <div className="col-xs-3 col-sm-6 col-sm-push-6 menu-wrapper">
            <ul>
              <li>
                <Link to="/">Khuyến mãi HOT</Link>
              </li>
              <li>
                <Link to="/users">Deal Mới</Link>
              </li>
              <li>
                <Link to="/contact">Danh Sách</Link>
              </li>
              <li>
                <Link to="/users">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
