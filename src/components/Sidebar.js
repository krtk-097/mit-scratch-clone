import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import CommandSelections from "./CommandSelections.js";

export default function Sidebar() {
  const MotionList = [
    "SHIFTX",
    "SHIFTY",
    "JUMPTO",
    "JUMP_TO_X",
    "JUMP_TO_Y",
    "JUMPTO_RANDOM",
    "ROTATE_ANGLE",
    "TURN_CLOCKWISE",
    "TURN_COUNTERCLOCKWISE",
  ];
  const LockList = [
    "TALK",
    "MODIFY_SIZE",
    "MODIFY_COLOR",
    "MODIFY_BG_COLOR",
    "DEFINE_SIZE",
  ];
  const ControlList = ["PAUSE", "LOOP", "START_FLAG"];

  const [expandedCategory, setExpandedCategory] = useState("motion");

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <div className="md:w-60 w-24 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-bold text-white-700 mr-2 mb-2">
        Sidebar
      </div>
      <Droppable droppableId="block-1" type="actionValue">
        {(value) => (
          <ul
            {...value.droppableProps}
            ref={value.innerRef}
            className="actionValue my-3"
          >
            <li className="mt-3">
              <span
                className="bg-gray-300 rounded-md p-1 flex items-center cursor-pointer"
                onClick={() => toggleCategory("motion")}
              >
                <h1>MOTION</h1>
              </span>
              {expandedCategory === "motion" && (
                <ul>
                  {MotionList.map((item, index) => (
                    <Draggable
                      key={`${item}-actionValue`}
                      draggableId={`${item}-actionValue`}
                      index={index}
                      type="block-1"
                    >
                      {(value) => (
                        <li
                          ref={value.innerRef}
                          {...value.draggableProps}
                          {...value.dragHandleProps}
                          className="my-4 ml-4"
                        >
                          {CommandSelections(item)}
                        </li>
                      )}
                    </Draggable>
                  ))}
                </ul>
              )}
            </li>
            <li className="mt-3">
              <span
                className="bg-gray-300 rounded-md p-1 flex items-center cursor-pointer"
                onClick={() => toggleCategory("looks")}
              >
                <h1>LOOKS</h1>
              </span>
              {expandedCategory === "looks" && (
                <ul>
                  {LockList.map((item, index) => (
                    <Draggable
                      key={`${item}-actionValue`}
                      draggableId={`${item}-actionValue`}
                      index={index}
                      type="block-1"
                    >
                      {(value) => (
                        <li
                          ref={value.innerRef}
                          {...value.draggableProps}
                          {...value.dragHandleProps}
                          className="my-4 ml-4"
                        >
                          {CommandSelections(item)}
                        </li>
                      )}
                    </Draggable>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        )}
      </Droppable>
    </div>
  );
}
