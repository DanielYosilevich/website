import React from 'react'
import me from '../assets/common/images/me.png'
import { Card } from 'primereact/card'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"


function PersonalDetails() {
  const footer = (
    <span style={{ fontSize: "2rem" }}>
      <a href="https://www.linkedin.com/in/danielyosilevich/">
        <span> <FaLinkedin /></span>
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/DanielYosilevich/">
        <span> <FaGithub /></span>
      </a>
    </span>
  );

  return (
    <div className="details-wrapper">
      <div className="details-container">
        <div
          style={{
            background: `url(${me})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            minWidth: "16rem",
            minHeight: "16rem",
          }}
        >
        </div>
        <div className="card-container">
          <Card
            title="Daniel Yosilevich"
            subTitle="Frontend Engineer"
            footer={footer}
          >
            Responsive Web Design <br />
            Progressive Web Applications <br />
            Full Stack Development <br /><br /><br />
            <div className="flex align-center">
              <div style={{ fontSize: "1.5rem" }}><FaPhone /></div>
              <div style={{ display: "flex", height: "1.5rem", marginLeft: "0.5rem" }}>(972) 546729752</div>
            </div>
            <div className="flex align-center">
              <div style={{ fontSize: "1.5rem" }}><FaEnvelope /></div>
              <div style={{ height: "1.5rem", marginLeft: "0.5rem" }}> danielyosilevich@gmail.com</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails