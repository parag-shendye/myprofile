import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {name, city, country, companyName, university} from "../constants.js";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{name} </span>
            from <span className="purple"> {city}, {country}</span>
            <br />
            I am currently employed as a software developer at {companyName}.
            <br />
            I have completed Masters in Computer Aided Mechanical Engineering from {university}
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
