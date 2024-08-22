import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [stream, setStreams] = useState([]);
  const [history, setHistory] = useState([]);
  const [newValues, setNewValues] = useState({});

  const indivClick = (action, value) => {
    if (!newValues["block-100"]) {
      newValues["block-100"] = [];
    }
    getIndivstream(action, value);
    setStreams(newValues["block-100"]);
  };
  function getIndivstream(action, value) {
    newValues["block-100"] = [];
    newValues["block-100"].push({
      key: `${action}`.split("-")[0],
      value: value,
    });
  }

  const [blocks, setBlocks] = useState([
    {
      id: "block-1",
      actions: [],
    },
  ]);

  const dragEvent = (actionEvent) => {
    if (!actionEvent.destination) return;

    const destinationblockId = actionEvent.destination.droppableId;
    const draggableId = actionEvent.draggableId.split("-")[0];

    const updatedblocks = blocks.map((block) => {
      if (block.id === destinationblockId) {
        return {
          ...block,
          actions: [...block.actions, `${draggableId}-${block.actions.length}`],
        };
      }
      return block;
    });
    setBlocks(updatedblocks);
  };

  return (
    <div className="bg-blue-400 font-sans">
      <div className="h-screen overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl rounded-br-xl md:mr-2">
          <DragDropContext onDragEnd={dragEvent}>
            <Sidebar />
            <MidArea
              blocks={blocks}
              setBlocks={setBlocks}
              setStreams={setStreams}
            />
          </DragDropContext>
        </div>
        <div className="w-full md:w-3/6 h-screen overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl rounded-bl-xl md:rounded-tr-xl md:rounded-br-xl md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <PreviewArea stream={stream} modifyHistory={setHistory} />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white border-t md:border-t-0 border-l border-gray-200 rounded-tl-xl rounded-bl-xl md:rounded-tr-xl md:rounded-br-xl md:ml-2 md:mt-0">
            <div>
              <div className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-bold text-white-700 ml-2 my-2">
                {"History"}
              </div>
              <span id="block-100">
                {history.map((home, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <div className="flex items-center">
                      <span className="bg-gray-300 ml-5 rounded-full h-6 w-6 flex items-center justify-center text-gray-700 text-sm">
                        {index + 1}
                      </span>
                      <span className="ml-3 bg-gray-300 rounded-md p-1 flex items-center">
                        {home.key + "-" + index + " : " + home.value}
                      </span>
                    </div>
                    <span
                      className="text-green-500 cursor-pointer ml-5"
                      onClick={() =>
                        indivClick(
                          home.key.split("-")[0] + "-" + index,
                          home.value
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
