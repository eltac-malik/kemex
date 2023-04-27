import React, { useEffect, useState } from "react";

export const useScreen = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleDisplayResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleDisplayResize);
    return () => {
      window.removeEventListener("resize", handleDisplayResize);
    };
  });
  return screenSize>900;
};