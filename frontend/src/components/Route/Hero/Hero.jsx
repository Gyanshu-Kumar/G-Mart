import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import background from "./ggg.jpg";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[100vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 20px", // Add padding to create space from edges
        position: "relative", // Ensure relative positioning for absolute children
      }}
    >
      <div
        style={{
          position: "absolute", // Absolute positioning for the text container
          top: "50%", // Position vertically at the middle
          left: "5cm", // Move 5cm to the left
          transform: "translateY(-50%)", // Center the container vertically
          textAlign: "left", // Align text to the left
        }}
      >
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#cdfc49] font-[600] capitalize`}
        >
          We Bring the <br /> Store to Your Door..
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffffe7]">
          
          Your Comfort is Our Priority
        </p>
        <div className={`${styles.button} mt-5`}>
          <Link to="/products" className="inline-block">
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
