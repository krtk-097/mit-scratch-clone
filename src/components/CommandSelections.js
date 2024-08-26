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
import RotateAntiClockwise from "./Commands/RotateAntiClockwise";
import RotateClockwise from "./Commands/RotateClockwise";
import SayForSeconds from "./Commands/SayForSeconds";
import ShiftByX from "./Commands/ShiftByX";
import ShiftByY from "./Commands/ShiftByY";
import SizeDeterminer from "./Commands/SizeDeterminer";
import StartFlag from "./Commands/StartFlag";
import Talk from "./Commands/Talk";
import Think from "./Commands/Think";
import ThinkForSeconds from "./Commands/ThinkForSeconds";

const CommandSelections = (key, id) => {
  // eslint-disable-next-line default-case
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
      return <RotateAntiClockwise value={id} />;
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
    case "SAY_FOR_SECONDS":
      return <SayForSeconds value={id} />;
    case "THINK_FOR_SECONDS":
      return <ThinkForSeconds value={id} />;
    case "THINK":
      return <Think value={id} />;
  }
};

export default CommandSelections;
