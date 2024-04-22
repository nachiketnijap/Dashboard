import React from "react";
import "./Poster.css";
import { MdHome } from "react-icons/md";

const Poster = () => {
  return (
    <div className="poster-container">
      <div className="poster">
        <ol class="breadcrumb p-3 rounded-3 bred">
          <li class="breadcrumb-item">
            <a class="link-body-emphasis" href="#">
              <MdHome />
            </a>
          </li>
          <li class="breadcrumb-item">
            <a
              class="link-body-emphasis fw-semibold text-decoration-none"
              href="#"
            >
              Library
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </div>
      <div className="bar-2">
        <div
          className="card m-2 image-style bg-warning"
          style={{ width: "120px" }}
        ></div>
        <div>
          <ul class="list-group">
            <li class="list-group-item mt-2 text-warning">PRANIT SHIRKE</li>
            <div
              class="btn-group"
              role="group"
              aria-label="Default button group"
            >
              <button type="button" class="btn btn-outline-warning">
                pranit.shirke.ext@nmims.edu
              </button>
              <button type="button" class="btn btn-outline-warning">
                9867728716
              </button>
              <button type="button" class="btn btn-outline-warning">
                MBA
              </button>
              <button type="button" class="btn btn-outline-warning">
                77777771168
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Poster;
