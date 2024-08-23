import React from "react";
import Loop from "./Commands/Loop";
import ModifyBgColor from "./Commands/ModifyBgColor";
import ModifyColor from "./Commands/ModifyColor";
import ModifySize from "./Commands/ModifySize";
import NavigateTo from "./Commands/NavigateTo";
import NavigateToRandom from "./Commands/NavigateToRandom";
import NavigateToX from "./Commands/NavigateToX";
import NavigateToY from "./Commands/NavigateToY";
import Pause from "./Commands/Pause";
import RotateAngle from "./Commands/RotateAngle";
import RotateAnticlockwise from "./Commands/RotateAnticlockwise";
import RotateClockwise from "./Commands/RotateClockwise";
import ShiftByX from "./Commands/ShiftByX";
import ShiftByY from "./Commands/ShiftByY";
import SizeDeterminer from "./Commands/SizeDeterminer";
import StartFlag from "./Commands/StartFlag";
import Talk from "./Commands/Talk";

export const CommandSelections = (key, id) => {
  switch (key.toUpperCase()) {
    case "SHIFTX":
      return <ShiftByX value={id} />;
    case "SHIFTY":
      return <ShiftByY value={id} />;
    case "JUMPTO":
      return <NavigateTo value={id} />;
    case "JUMPTO_RANDOM":
      return <NavigateToRandom value={id} />;
    case "ROTATE_ANGLE":
      return <RotateAngle value={id} />;
    case "TURN_CLOCKWISE":
      return <RotateClockwise value={id} />;
    case "TURN_COUNTERCLOCKWISE":
      return <RotateAnticlockwise value={id} />;
    case "TALK":
      return <Talk value={id} />;
    case "MODIFY_SIZE":
      return <ModifySize value={id} />;
    case "MODIFY_COLOR":
      return <ModifyColor value={id} />;
    case "MODIFY_BG_COLOR":
      return <ModifyBgColor value={id} />;
    case "DEFINE_SIZE":
      return <SizeDeterminer value={id} />;
    case "PAUSE":
      return <Pause value={id} />;
    case "LOOP":
      return <Loop value={id} />;
    case "START_FLAG":
      return <StartFlag value={id} />;
    case "JUMP_TO_X":
      return <NavigateToX value={id} />;
    case "JUMP_TO_Y":
      return <NavigateToY value={id} />;
  }
};
