import React, { useEffect, useRef } from "react";
import { ConnectionLinesProps } from "../types/types";
import { rearrangeArray } from "../utils/format";

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ functions }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    rearrangeArray(functions, [1, 2, 4, 5, 3]).forEach((func, index) => {
      if (index === functions.length - 1) return;

      const currentCard = document.getElementById(`function-${func.id}`);
      const nextCard = document.getElementById(
        `function-${functions[index + 1].id}`,
      );
      debugger;
      if (currentCard && nextCard) {
        const currentRect = currentCard.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        const canvasRect = canvas.getBoundingClientRect();
        const offsetX = canvasRect.left;
        const offsetY = canvasRect.top;

        const startX = currentRect.right - offsetX;
        const startY = currentRect.top + currentRect.height / 2 - offsetY;

        const endX = nextRect.left - offsetX;
        const endY = nextRect.top + nextRect.height / 2 - offsetY;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = "#00aaff";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  }, [functions]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default ConnectionLines;
