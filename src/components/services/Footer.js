import React from "react";

const Footer = () => (
  <div id="footer" className="footer">
    <div className="container">
      <div className="row">
        <div className=" col-md-3 col-lg-3">
          <h4>Contact Us</h4>
          <p>
            <i className="fa fa-home" aria-hidden="true" />{" "}
            山东省济南市高新区鲁商国奥城2507室
          </p>
          <p>
            <i className="fa fa-envelope" aria-hidden="true" />{" "}
            zhenghan@catail.cn
          </p>
          <p>
            <i className="fa fa-phone" aria-hidden="true" /> 0531-88123123
          </p>
          <p>
            <i className="fa fa-globe" aria-hidden="true" /> http://123.com
          </p>
        </div>
        <div className=" col-md-3 col-lg-3">
          <h4>About</h4>
          <p>
            <i className="fa fa-square-o" aria-hidden="true" /> About Us
          </p>
          <p>
            <i className="fa fa-square-o" aria-hidden="true" /> Privacy
          </p>
          <p>
            <i className="fa fa-square-o" aria-hidden="true" /> Term & Condition
          </p>
        </div>
        <div className=" col-md-3 col-lg-3">
          <h4>Stay in touch</h4>
          <i className="social fa fa-qq" aria-hidden="true" />{" "}
          <i className="social fa fa-weixin" aria-hidden="true" />{" "}
          <i className="social fa fa-weibo" aria-hidden="true" />{" "}
          <i className="social fa fa-facebook" aria-hidden="true" />{" "}
          <i className="social fa fa-twitter" aria-hidden="true" />{" "}
          <i className="social fa fa-youtube" aria-hidden="true" />{" "}
          <i className="social fa fa-github" aria-hidden="true" /> <br />
          <input type="email" placeholder="Subscribe For Updates" />
          <button type="button" className="btn btn-success">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
