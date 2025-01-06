import React, { useState } from "react";
import "./index.css";
import headsetimage from "./assets/headsetimage.png";
import ratingstars from "./assets/ratingstars.png";

const sections = [
  {
    id: 1,
    title1: "BEST SELLER",
    title2: "HDR - F 140",
    description:
      "There are many variations of passages of lorem Ipsum available, but the majority have suffered alterations in some form, by injected humour, or randomised words which don't look even slighty believable.",
    originalPrice: "$41",
    discountPrice: "$31",
    image: headsetimage,
  },
  {
    id: 2,
    title1: "NEW ARRIVAL",
    title2: "GAMING PRO X",
    description:
      "A high-quality gaming headset that delivers exceptional sound clarity and comfort during extended gaming sessions.",
    originalPrice: "$59",
    discountPrice: "$49",
    image: headsetimage,
  },
  {
    id: 3,
    title1: "TOP RATED",
    title2: "AUDIO MAX 360",
    description:
      "Experience superior audio quality with the Audio Max 360, perfect for music lovers and audiophiles.",
    originalPrice: "$99",
    discountPrice: "$79",
    image: headsetimage,
  },
];

function FeatProd() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  return (
    <div className="feat-prod-container">
      <div className="slider">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`section ${
              index === currentSection ? "visible" : "hidden"
            }`}
          >
            <div className="feat-prod-box">
              <img
                src={section.image}
                alt={section.title2}
                style={{
                  objectFit: "contain",
                  position: "relative",
                }}
              />
              <div className="feat-prod-box-info">
                <h1>{section.title1}</h1>
                <h2>{section.title2}</h2>
                <p>{section.description}</p>
                <img
                  src={ratingstars}
                  height={25}
                  alt="Rating Stars"
                />
                <h3>
                  <span className="original-price">
                    {section.originalPrice}
                  </span>{" "}
                  {section.discountPrice}
                </h3>
                <div className="feat-prod-box-info-button-area">
                  <button className="button-81">Add to Cart</button>
                  <button className="button-81">More Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="button-81" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default FeatProd;
