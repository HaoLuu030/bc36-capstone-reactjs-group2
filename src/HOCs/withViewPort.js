import React from "react";
import useViewPort from "../hooks/useViewPort";

function withViewPort(Component) {
  function UpdatedComponent() {
    const viewPort = useViewPort();
    return <Component viewPort={viewPort} />;
  }

  return UpdatedComponent;
}

export default withViewPort;
