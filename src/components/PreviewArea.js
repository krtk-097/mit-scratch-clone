import React, { useCallback, useRef, useState } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ stream, modifyHistory }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const previewAreaRef = useRef(null);

  const handleMouseDown = useCallback((e, initialPosition) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setOriginalPosition(initialPosition);
  }, []);

  const handleMouseUp = useCallback(
    (finalPosition) => {
      setIsDragging(false);
      if (previewAreaRef.current) {
        const rect = previewAreaRef.current.getBoundingClientRect();
        if (
          finalPosition.x < rect.left ||
          finalPosition.x > rect.right ||
          finalPosition.y < rect.top ||
          finalPosition.y > rect.bottom
        ) {
          return originalPosition;
        }
      }
      return null;
    },
    [originalPosition]
  );

  return (
    <div className="flex-1 h-full overflow-auto relative" ref={previewAreaRef}>
      <div className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-bold text-white-700 ml-2 my-2">
        {"Preview Area"}
      </div>

      <div className="p-4">
        <div className="sprites">
          <CatSprite
            stream={stream}
            isDragging={isDragging}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            dragStart={dragStart}
            modifyHistory={modifyHistory}
          />
        </div>
      </div>
    </div>
  );
}
