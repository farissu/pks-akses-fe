import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Navbar: React.FC = () => {
  const searchboxFocus = () => {
    document.getElementById("searchbox")?.focus();
  };

  const divStyle: React.CSSProperties = {
    backgroundColor: "#FF5001",
    height: "70px",
    position: "relative",
    zIndex: 1,
  };

  return (
    <nav className="flex items-center justify-between max-w-md" style={divStyle}>
      {/* Logo img */}
      <img
        src="/icon_white.png?w=100&h=42&q=100&upscale=true&auto=compress,format"
        alt="logo"
        width="5%"
        height="auto"
        style={{
          margin: "0 15px",
          marginTop: "17px",
          marginLeft: "19px",
          marginRight: "25px",
          marginBottom: "20px",
        }}
      />

      {/* Search Box */}
      <div className="box" style={{ marginTop: "15px", marginBottom: "20px"}}>
        <div className="search-box flex">
          <input
            id="searchbox"
            className="placeholder:text-sm italic  px-14 py-1"
            type="text"
            placeholder="Cari apa saja di sini"
            style={{ borderRadius: "16.5px", textAlign: "left", paddingLeft: "10px", outline: "none",  }}
          />
          <label htmlFor="check" className="icon py-2 px-2">
            {/* <IoSearch className="w-7 h-7" onClick={searchboxFocus} /> */}
          </label>
        </div>
      </div>

      {/* Group img */}
      <img
        src="/Ellipse 1.png?w=100&h=42&q=100&upscale=true&auto=compress,format"
        alt="group-logo"
        width={34}
        height={34}
        style={{
          margin: "0 15px",
          marginTop: "17px",
          marginLeft: "1px",
          marginRight: "10px",
          marginBottom: "20px",
          filter: "brightness(0) invert(1)",
        }}
      />

      {/* Additional Styling Divs */}
      <div style={{ position: "absolute", backgroundColor: "#FF5001", top: "60px", width: "100%", height: "75px" }}></div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          width: "100%",
          height: "150px",
          top: "110px",
          left: "0px",
          right: "0px",
          borderRadius: "20px",
        }}
      ></div>

      {/* Text */}
      <p
        style={{
          position: "absolute",
          zIndex: 3,
          left: "20px",
          top: "62px",
          color: "white",
          fontSize: "14px",
          fontStyle: "italic",
        }}
      >
        Assalamu'alaikum, <span style={{ fontWeight: "bold", fontFamily: "'Rajdhani', sans-serif", fontSize: "14px" }}>Rizki Faris</span>
        <br />Di kabupaten Bandung, Ashar jam 15:09
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "12px" }}> (01:23:12)</span>
      </p>
    </nav>
  );
};

export default React.memo(Navbar);
