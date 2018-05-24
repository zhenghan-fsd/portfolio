import React from "react";

const Contact = () => (
  <div id="contact" className="contact">
    <div className="container">
      <h2 className="wow fadeInUp">Contact</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">
        专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
      </p>

      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div
            className="input-group input-group-lg wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <span className="input-group-addon" id="sizing-addon1">
              <i className="fa fa-user" />
            </span>
            <input
              type="text"
              aria-describedby="sizing-addon1"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div
            className="input-group input-group-lg wow fadeInUp"
            data-wow-delay="1.2s"
          >
            <span className="input-group-addon" id="sizing-addon1">
              <i className="fa fa-envelope" />
            </span>
            <input
              type="text"
              aria-describedby="sizing-addon1"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div
            className="input-group input-group-lg wow fadeInUp"
            data-wow-delay="1.6s"
          >
            <span className="input-group-addon" id="sizing-addon1">
              <i className="fa fa-phone" />
            </span>
            <input
              type="text"
              aria-describedby="sizing-addon1"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="input-group wow fadeInUp" data-wow-delay="2s">
            <textarea
              name=""
              id=""
              className="form-control"
              rows="6"
              cols="80"
            />
          </div>
          <button className="btn btn-lg wow fadeInUp" data-wow-delay="2.4s">
            Submit Your Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
