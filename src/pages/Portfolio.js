import React from "react";
import "../styles/Portfolio.css";
import { TfiGithub } from "react-icons/tfi";
import { GrDeploy } from "react-icons/gr";

// Importing project images
import Weather from "../assets/weather.png";
import Team from "../assets/teamprofile.png";
import Note from "../assets/notetaker.png";
import Password from "../assets/password.png";
import Fridge from "../assets/fridge.png";
import Calendar from "../assets/calendar.png";
import Chat from "../assets/chat.png";
import Ecommerce from "../assets/ecommerce-backend";

// Portfolio will be the page containing images of all projects.

function Portfolio() {
  return (
    <div className="portfolio">
      <br></br>
      <h3 className="title">Portfolio</h3>
      <br></br>
      <div className="projectsList">
        <div className="project">
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="card">
                <img src={Weather} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Weather API app</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/StephCambria/WeatherAPIApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://stephcambria.github.io/WeatherAPIApp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Team} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Team Profile Generator</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/StephCambria/NodeTeamProfileGenerator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://watch.screencastify.com/v/fbHaDCr9z0qyiifK14kk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Note} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">ExpressJS Note Taker</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/StephCambria/ExpressNoteTaker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://expressjs-note-takerapp.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Password} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Random Password Generator</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/StephCambria/Javascript-Random-Password-Generator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://stephcambria.github.io/Javascript-Random-Password-Generator/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Fridge} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">What's in the Fridge?</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/StephCambria/What-s-In-The-Fridge-"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://what-s-in-the-fridge.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Calendar} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Monthly Calendar Dashboard</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/DayneLalmond/Calendar-Dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://daynelalmond.github.io/Calendar-Dashboard/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Chat} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">MyloChat</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/StephCambria/mylochat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://mylo-app.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Ecommerce} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">E-Commerce Back-End API</h5>
                  <p class="card-text">
                    <a
                      href="https://github.com/StephCambria/e-commerce-back-end"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TfiGithub />
                    </a>
                    <a
                      href="https://watch.screencastify.com/v/u9aB6Y21BWHy08WocfPV"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrDeploy />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
