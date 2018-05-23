import React from "react";
import appImage from "../../assets/Responsive-Web-Design.png";

const Header = () => (
  <div id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h1>泉联金服</h1>
          <p />
          <p>
            山东泉联金融软件服务有限责任公司简称“泉联金服”，注册于泉城济南。是一家专业从事金融领域软件开发、软件定制、软件实施的高新技术企业。除了根据金融企业的业务需求完成相关软件的开发实施之外，还专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
          </p>
          <button className="btn btn-lg btn-primary">Buy Now</button>{" "}
          <button className="btn btn-lg btn-success">View Detail</button>
        </div>
        <div className="col-lg-6 col-md-6">
          <img src={appImage} alt="logo" />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
