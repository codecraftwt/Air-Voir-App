// without scroll animation
"use client";
import React, { useEffect, useState } from "react";
import "./Screen.css";

const Airvoir = () => {
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const stepElements = document.querySelectorAll(".step");
    const numberElements = document.querySelectorAll(".step-number");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNumber = entry.target.getAttribute("data-step");
            setActiveStep(stepNumber);

            numberElements.forEach((el) => {
              const number = el.getAttribute("data-step");
              if (number === stepNumber) {
                el.classList.add("active");
              } else {
                el.classList.remove("active");
              }
            });
          }
        });
      },
      {
        root: null,
        threshold: 1,
      }
    );

    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="mt-4 h-100">
      <div className="col-md-12 row bg-dark">
        <div className="row">
          <div
            className="col-md-3 text-white step-container"
            style={{
              padding: "10px",
              height: "16rem",
              marginTop: "5rem",
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{
                position: "relative",
                height: "250px",
                overflow: "hidden",
              }}
            >
              <p
                className={`text-center font step-number ${
                  activeStep === "0" ? "active" : ""
                }`}
                data-step="0"
              >
                0
              </p>
              <p
                className={`text-center text-white step-number ${
                  activeStep === "1" ? "active" : ""
                }`}
                data-step="1"
                style={{
                  fontSize: "10rem",
                  position: "absolute",
                  top: activeStep === "1" ? "0px" : "200px",
                  transition: "top 0.3s ease-in-out",
                  marginLeft: "11rem",
                }}
              >
                1
              </p>
              <p
                className={`text-center text-white step-number ${
                  activeStep === "2" ? "active" : ""
                }`}
                data-step="2"
                style={{
                  fontSize: "10rem",
                  position: "absolute",
                  top: activeStep === "2" ? "0px" : "210px",
                  transition: "top 0.3s ease-in-out",
                  marginLeft: "11rem",
                }}
              >
                2
              </p>
              <p
                className={`text-center text-white step-number ${
                  activeStep === "3" ? "active" : ""
                }`}
                data-step="3"
                style={{
                  fontSize: "10rem",
                  position: "absolute",
                  top: activeStep === "3" ? "0px" : "210px",
                  transition: "top 0.3s ease-in-out",
                  marginLeft: "11rem",
                }}
              >
                3
              </p>
            </div>
          </div>
  
          <div className="col-md-9 scrollable-div">
            {/* step1 */}
            <div
              className="step step1"
              data-step="1"
            >
              <p className="text-dark space">Step 1</p>
              <div
                style={{
                  width: "1.6px",
                  backgroundColor: activeStep === "1" ? "blue" : "white",
                  height: "124px",
                  margin: "10px 20px",
                  marginBottom: "10px",
                }}
              ></div>
              <div>
                <p className="heading mb-2 mt-2 text-white">
                  Access World-Class Raffles
                </p>
                <p className="desc mb-4">
                  Use CapRelic tokens to enter raffles for premium items like
                  supercars, yachts, and <br /> more. Your tokens unlock a world
                  of exclusive prizes.
                </p>
              </div>
            </div>
  
            {/* step2 */}
            <div
              className="step"
              data-step="2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p className="text-dark space">Step 2</p>
              <div
                style={{
                  width: "1.6px",
                  backgroundColor: activeStep === "2" ? "blue" : "white",
                  height: "124px",
                  margin: "10px 20px",
                }}
              ></div>
              <div>
                <p className="heading mb-2 text-white mt-4">
                  Burn to Win, Burn to Earn
                </p>
                <p className="desc mb-4">
                  Every time tokens are used for a raffle, they are burned,
                  reducing supply and <br /> creating scarcity that benefits all
                  holders over time.
                </p>
              </div>
            </div>
  
            {/* step3 */}
            <div
              className="step"
              data-step="3"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20rem",
              }}
            >
              <p className="text-dark">Step 3</p>
              <div
                style={{
                  width: "1.6px",
                  backgroundColor: activeStep === "3" ? "blue" : "white",
                  height: "124px",
                  margin: "10px 20px",
                }}
              ></div>
              <div>
                <p className="heading mb-2 text-white mt-4">
                  Stake for Exclusive Access
                </p>
                <p className="desc mb-4">
                  Stake CapRelic tokens to gain access to exclusive raffles,
                  reduced burn rates, and <br /> more. Your tokens unlock a
                  world of VIP perks, giving you a long-term edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

};

export default Airvoir;
