import React from "react";
import "./Calender.css";

import { FaVideo } from "react-icons/fa";

const Calender = () => {
  return (
    <div className="row margin-card main-background">
      <h2 className="">ACADEMIC CALENDER</h2>
      <div className="col">
        <div className="card card-width">
          <div className="card-body">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              See Details
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Details
                    </h1>
                  </div>
                  <div class="modal-body">
                    <p className="card-text fs-6">19 Apr-2024</p>
                    <p className="card-text fw-bold">HR</p>
                    <p className="card-text">Session 5</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn bg-warning"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="card-text">
              Prof. Hiteshwari Jadeja <FaVideo size={15} />
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "300px" }}>
          <div className="card-body">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              See Details
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Details
                    </h1>
                  </div>
                  <div class="modal-body">
                    <p className="card-text fs-6">19 Apr-2024</p>
                    <p className="card-text fw-bold">HR</p>
                    <p className="card-text">Session 5</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="card-text">
              Prof. Hiteshwari Jadeja <FaVideo size={15} />
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card card-width">
          <div className="card-body">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              See Details
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Details
                    </h1>
                  </div>
                  <div class="modal-body">
                    <p className="card-text fs-6">19 Apr-2024</p>
                    <p className="card-text fw-bold">HR</p>
                    <p className="card-text">Session 5</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="card-text">
              Prof. Hiteshwari Jadeja <FaVideo size={15} />
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card card-width">
          <div className="card-body">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              See Details
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Details
                    </h1>
                  </div>
                  <div class="modal-body">
                    <p className="card-text fs-6">19 Apr-2024</p>
                    <p className="card-text fw-bold">HR</p>
                    <p className="card-text">Session 5</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="card-text">
              Prof. Hiteshwari Jadeja <FaVideo size={15} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
