"use client";
import React, { useState } from "react";
import "./Screen.css"; 

const Screen = () => {
  const [activeColumn, setActiveColumn] = useState(1);
  const handleColumnClick = (columnNumber) => {
    setActiveColumn(columnNumber); 
  };

  return (
    <>
      <div className="p-3">
        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-2">
            <div className="col-12 bg-black mt-2">
              {/* First Div */}
              <div className="d-flex align-items-center mb-1">
                <p
                  className={`one mb-0 p-4 ${
                    activeColumn === 1 ? "text-white" : "text-grey"
                  }`}
                  onClick={() => handleColumnClick(1)}
                >01</p>
                <div
                  style={{
                    width: "2px",
                    backgroundColor: "white",
                    height: "64px",
                    margin: "0 10px",
                  }}
                ></div>
                <div className="p-3">
                  <div className="text-left">
                    <p
                      className={`firstp text-white mb-0`}
                      onClick={() => setActiveColumn(1)}
                    >
                      Access World-Class Raffles
                    </p>
                    <p className={`firsttext`}>
                      Use CapRelic tokens to enter raffles for premium items
                      like supercars, yachts, and <br /> more. Your tokens
                      unlock a world of exclusive prizes.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2nd Div */}
              <div className="d-flex align-items-center mb-1">
              <p
            className={`one mb-0 p-4 ${activeColumn === 2 ? 'text-white' : 'text-grey'}`}
            onClick={() => handleColumnClick(2)}
          >
            02
          </p>
                <div
                  style={{
                    width: "2px",
                    backgroundColor: "white",
                    height: "64px",
                    margin: "0 10px",
                  }}
                ></div>
                <div className="p-3">
                  <div className="text-left">
                    <p
                      className={`firstp text-white mb-0`}
                      onClick={() => setActiveColumn(2)}
                    >
                      Burn to Win, Burn to Earn
                    </p>
                    <p className={`firsttext`}>
                      Every time tokens are used for a raffle, they are burned,
                      reducing supply and <br /> creating scarcity that benefits
                      all holders over time.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3rd Div */}
              <div className="d-flex align-items-center mb-1">
              <p
            className={`one mb-0 p-4 ${activeColumn === 3 ? 'text-white' : 'text-grey'}`}
            onClick={() => handleColumnClick(3)}
          >
            03
          </p>
                <div
                  style={{
                    width: "2px",
                    backgroundColor: "white",
                    height: "64px",
                    margin: "0 10px",
                  }}
                ></div>
                <div className="p-3">
                  <div className="text-left">
                    <p
                      className={`firstp text-white mb-0`}
                      onClick={() => setActiveColumn(3)}
                    >
                      Stake for Exclusive Access
                    </p>
                    <p className={`firsttext`}>
                      Stake CapRelic tokens to gain access to exclusive raffles,
                      reduced burn rates, and <br /> more. Your tokens unlock a
                      world of VIP perks, giving you a long-term edgess.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column 1 */}
          {activeColumn === 1 && (
            <div className="col-12 col-md-6 mt-3">
              <div className="text-white mb-2 fs-4 col-12">
                Reference:{" "}
                <a
                  href="https://www.airvoir.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"white"}}
                >
                  www.airvoir.com
                </a>
              </div>

              <div className="col-12 bg-white">
                <div className="col-12 d-flex align-items-center mb-1">
                  <p className={`rightp text-black mb-0 p-3 pt-0`}>01</p>

                  <div className="pt-5">
                    <div className="text-left">
                      <hr className={`hrLine`} />
                      <p className={`step1`}>Step 1</p>
                      <p className={`title text-black mb-0 `}>
                        Configure your flight & expect <br /> a follow-up,
                      </p>
                      <p className={`subText`}>
                        Select your desired destination and departure dates from
                        our extensive list of available airports and submit your{" "}
                        <br />
                        option request. Our industry experts will scan the
                        market and its current dynamics and negotiate the best
                        options.
                      </p>
                      <button className={`button btn`}>
                        Choose destination
                      </button>
                      <hr className={`hrline`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column 2 */}
          {activeColumn === 2 && (
            <div className="col-12 col-md-6 mt-3">
              <div className="text-white mb-2 fs-4 col-12">
                Reference:{" "}
                <a
                  href="https://www.airvoir.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"white"}}
                >
                  www.airvoir.com
                </a>
              </div>

              <div className="col-12 bg-white">
                <div className="col-12 d-flex align-items-center mb-1">
                  <p className={`rightp text-black mb-0 p-3 pt-0`}>02</p>

                  <div className="pt-5">
                    <div className="text-left">
                      <hr className={`hrLine`} />
                      <p className={`step1`}>Step 1</p>
                      <p className={`title text-black mb-0 `}>
                        Burn to Win Burn to Earn,
                      </p>
                      <p className={`subText`}>
                        Select your desired destination and departure dates from
                        our extensive list of available airports and submit your{" "}
                        <br />
                        option request. Our industry experts will scan the
                        market and its current dynamics and negotiate the best
                        options.
                      </p>
                      <button className={`button btn`}>
                        Choose destination
                      </button>
                      <hr className={`hrline`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column 3 */}
          {activeColumn === 3 && (
            <div className="col-12 col-md-6 mt-3">
              <div className="text-white mb-2 fs-4 col-12">
                Reference:{" "}
                <a
                  href="https://www.airvoir.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"white"}}
                >
                  www.airvoir.com
                </a>
              </div>

              <div className="col-12 bg-white">
                <div className="col-12 d-flex align-items-center mb-1">
                  <p className={`rightp text-black mb-0 p-3 pt-0`}>03</p>

                  <div className="pt-5">
                    <div className="text-left">
                      <hr className={`hrLine`} />
                      <p className={`step1`}>Step 1</p>
                      <p className={`title text-black mb-0 `}>
                        Stake for Exclusive Access
                      </p>
                      <p className={`subText`}>
                        Select your desired destination and departure dates from
                        our extensive list of available airports and submit your{" "}
                        <br />
                        option request. Our industry experts will scan the
                        market and its current dynamics and negotiate the best
                        options.
                      </p>
                      <button className={`button btn`}>
                        Choose destination
                      </button>
                      <hr
                        style={{
                          color: "black",
                          height: "4px",
                          marginTop: "40px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Screen;
