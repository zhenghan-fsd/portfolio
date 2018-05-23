import React from "react";
import teamMember1 from "../../assets/team/team-1.jpg";
import teamMember2 from "../../assets/team/team-2.jpg";
import teamMember3 from "../../assets/team/team-3.jpg";
import teamMember4 from "../../assets/team/team-4.jpg";

const Team = () => (
  <div id="team" className="team">
    <div className="container">
      <h2>Team</h2>
      <p>
        专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
      </p>

      <div className="row">
        <div className="col-md-3 col-lg-3">
          <img src={teamMember1} className="img-circle" alt="teamMember1" />
          <h4>John Doe</h4>
          <b>CEO and Founder</b>
          <p>
            专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
          </p>
          <a href="#">
            <i className="fa fa-weixin" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-qq" />
          </a>
        </div>
        <div className="col-md-3 col-lg-3">
          <img src={teamMember2} className="img-circle" alt="teamMember2" />
          <h4>John Doe</h4>
          <b>CEO and Founder</b>
          <p>
            专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
          </p>
          <a href="#">
            <i className="fa fa-weixin" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-qq" />
          </a>
        </div>
        <div className="col-md-3 col-lg-3">
          <img src={teamMember3} className="img-circle" alt="teamMember3" />
          <h4>John Doe</h4>
          <b>CEO and Founder</b>
          <p>
            专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
          </p>
          <a href="#">
            <i className="fa fa-weixin" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-qq" />
          </a>
        </div>
        <div className="col-md-3 col-lg-3">
          <img src={teamMember4} className="img-circle" alt="teamMember4" />
          <h4>John Doe</h4>
          <b>CEO and Founder</b>
          <p>
            专注于通过云数据分析和计算，以智能终端(包括智能POS机、手机等设备)和移动网络传输为载体，将先进的营销管理理念与金融客户的经营/服务场景需求结合，为金融客户提供个性化的技术支撑，达成金融企业与金融客户合作共赢的闭环效应，将普惠金融理念践行于日常生活中。
          </p>
          <a href="#">
            <i className="fa fa-weixin" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-qq" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
