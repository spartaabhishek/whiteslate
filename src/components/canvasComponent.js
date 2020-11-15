import React, { useState, useRef, useEffect } from "react";

const { fabric } = window;

// this component takes one prop, data, which is an object with data.sizePixels, an array that represents the width,height of the "backgroundObject"

const CanvasComponent = ({ data }) => {
  const canvasContainer = useRef();
  const canvasRef = useRef();
  const fabricRef = useRef();
  const [error, setError] = useState();

  const initCanvas = ({ canvas, size }) => {
    console.log("*** canvas init");
    console.log(canvas);

    let rect = new fabric.Rect({
      width: size[0],
      height: size[1],
      fill: "white",
      left: 0,
      top: 0,
      selectable: false,
      excludeFromExport: true,
    });
    canvas.add(rect);

    rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: "red",
      left: 100,
      top: 100,
    });
    canvas.add(rect);
  };

  // INIT
  useEffect(() => {
    if (!canvasRef.current) return;
    if (fabricRef.current) return;
    const canvas = new fabric.Canvas("canvas", {
      width: canvasContainer.current.clientWidth,
      height: canvasContainer.current.clientHeight,
      selection: false, // disables drag-to-select
      backgroundColor: "lightGrey",
    });
    fabricRef.current = canvas;
    initCanvas({ canvas, size: data.sizePixels });
  });

  // INPUT CHECKING
  if (!data || !Array.isArray(data.sizePixels))
    setError("Sorry, we could not open this item.");

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minHeight: "60vh",
        }}
      >
        <div style={{ flex: 3, backgroundColor: "green" }}>Controls</div>
        <div
          ref={canvasContainer}
          style={{ flex: 7, backgroundColor: "white" }}
        >
          <canvas
            id="canvas"
            ref={canvasRef}
            style={{ border: "1px solid red" }}
          />
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => {
            const json = fabricRef.current.toDatalessJSON();
            setDebugJSON(JSON.stringify(json, null, 2));
          }}
        >
          Make JSON
        </button>
      </div>
    </>
  );
};

export default CanvasComponent;
