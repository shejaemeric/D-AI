import React from "react";
import KCTitle from "../reusable/KCTitle";
import KCButton from "../reusable/form/KCButton";

import downloadIcon from "../../assets/icons/downloadIcon.svg";
import CarouselItem from "./CarouselItem";

function Carousel() {
  return (
    <div id="models">
      <KCTitle
        subtitle="AI MODELS"
        title="Download the document for More details ON THE AI models"
      >
        <KCButton icon={<img src={downloadIcon} alt="download" />}>
          Download descriptions
        </KCButton>
      </KCTitle>
      <CarouselItem />
    </div>
  );
}

export default Carousel;
