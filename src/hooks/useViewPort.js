import React, { useEffect, useState } from "react";
import { DESKTOP, MOBILE, TABLET } from "../constants";

function useViewPort() {
  const [viewPort, setViewPort] = useState(window.innerWidth);
  useEffect(() => {
    const handleViewPort = () => {
      setViewPort(window.innerWidth);
    };
    window.addEventListener("resize", handleViewPort);
    return () => window.removeEventListener("resize", handleViewPort);
  });
  if (viewPort <= 767) {
    return MOBILE;
  }
  if (767 < viewPort && viewPort <= 1028) {
    return TABLET;
  }
  if (viewPort > 1028) {
    return DESKTOP;
  }
}

export default useViewPort;
