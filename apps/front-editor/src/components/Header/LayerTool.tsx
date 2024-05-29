"use clinent";
import { useHeaderContext } from "./HeaderProvider";

export const LayerTool = () => {
  const { showLayerTool } = useHeaderContext();
  return (
    showLayerTool && (
      <div className="fixed bg-white shadow-lg rounded-xl bottom-4 left-4 top-14 w-72 p-2 z-10">
        LayerTool
      </div>
    )
  );
};
