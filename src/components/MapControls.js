import React from "react";
import { Flex, Box, IconButton } from "theme-ui";

import AddMapButton from "./AddMapButton";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";
import PanToolIcon from "../icons/PanToolIcon";
import BrushToolIcon from "../icons/BrushToolIcon";
import EraseToolIcon from "../icons/EraseToolIcon";
import UndoIcon from "../icons/UndoIcon";
import RedoIcon from "../icons/RedoIcon";

function MapControls({
  onMapChange,
  onToolChange,
  selectedTool,
  onUndo,
  onRedo,
}) {
  const divider = (
    <Box
      my={2}
      bg="text"
      sx={{ height: "2px", width: "24px", borderRadius: "2px", opacity: 0.5 }}
    ></Box>
  );
  return (
    <Flex
      p={2}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <IconButton aria-label="Expand More" title="Expand More">
        <ExpandMoreIcon />
      </IconButton>
      <AddMapButton onMapChange={onMapChange} />
      {divider}
      <IconButton
        aria-label="Pan Tool"
        title="Pan Tool"
        onClick={() => onToolChange("pan")}
        sx={{ color: selectedTool === "pan" ? "primary" : "text" }}
      >
        <PanToolIcon />
      </IconButton>
      <IconButton
        aria-label="Brush Tool"
        title="Brush Tool"
        onClick={() => onToolChange("brush")}
        sx={{ color: selectedTool === "brush" ? "primary" : "text" }}
      >
        <BrushToolIcon />
      </IconButton>
      <IconButton
        aria-label="Erase Tool"
        title="Erase Tool"
        onClick={() => onToolChange("erase")}
        sx={{ color: selectedTool === "erase" ? "primary" : "text" }}
      >
        <EraseToolIcon />
      </IconButton>
      {divider}
      <IconButton aria-label="Undo" title="Undo">
        <UndoIcon />
      </IconButton>
      <IconButton aria-label="Redo" title="Redo">
        <RedoIcon />
      </IconButton>
    </Flex>
  );
}

export default MapControls;
