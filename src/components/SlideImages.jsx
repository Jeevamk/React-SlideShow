import { useState } from "react";
import { Slides } from "../utils/constants/slideImages";
import { useEffect } from "react";

const SlideImages = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? Slides.length - 1 : activeImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % Slides.length);
  };

  useEffect(()=> {
  const timer = setTimeout(()=>{
    handleNextClick()
   },5000)
   return ()=>{
    clearTimeout(timer)
   }
  },[activeImageIndex])

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="font-bold p-4 m-10" onClick={handlePrevClick}>
        Prev
      </button>
      {Slides.map((url, i) => (
        // eslint-disable-next-line react/jsx-key
        <img key={url} src={url} className={"w-96 " + (activeImageIndex===i ? "block":"hidden")} />
      ))}

      <button className="font-bold p-4 m-10" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default SlideImages;
