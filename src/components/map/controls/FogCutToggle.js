import React from "react";
import { IconButton } from "theme-ui";

import CutOnIcon from "../../../icons/FogCutOnIcon";
import CutOffIcon from "../../../icons/FogCutOffIcon";

function FogCutToggle({ useFogCut, onFogCutChange }) {
  return (
    <IconButton
      aria-label={
        useFogCut ? "Disable Fog Cutting (C)" : "Enable Fog Cutting (C)"
      }
      title={useFogCut ? "Disable Fog Cutting (C)" : "Enable Fog Cutting (C)"}
      onClick={() => onFogCutChange(!useFogCut)}
    >
      {useFogCut ? <CutOnIcon /> : <CutOffIcon />}
    </IconButton>
  );
}

export default FogCutToggle;
