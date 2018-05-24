import React from "react";
import client1 from "../../assets/clients/client1.png";
import client2 from "../../assets/clients/client2.png";
import client3 from "../../assets/clients/client3.png";
import client4 from "../../assets/clients/client4.png";

const Client = () => (
  <div id="clients" className="clients">
    <div className="container">
      <h2 className="wow fadeInUp">Trusted By</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">
        专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
      </p>

      <div className="row">
        <div className="col-md-3 col-lg-3 wow fadeInLeft" data-wow-delay="2s">
          <li>
            <img src={client1} alt="client1" />
          </li>
        </div>
        <div className="col-md-3 col-lg-3 wow fadeInLeft" data-wow-delay="1.6s">
          <li>
            <img src={client2} alt="client2" />
          </li>
        </div>
        <div className="col-md-3 col-lg-3 wow fadeInLeft" data-wow-delay="1.2s">
          <li>
            <img src={client3} alt="client3" />
          </li>
        </div>
        <div className="col-md-3 col-lg-3 wow fadeInLeft" data-wow-delay="0.8s">
          <li>
            <img src={client4} alt="client4" />
          </li>
        </div>
      </div>
    </div>
  </div>
);

export default Client;
