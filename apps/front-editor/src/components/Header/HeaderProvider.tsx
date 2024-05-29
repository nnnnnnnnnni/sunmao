/* eslint-disable no-unused-vars */
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface HeaderContextProps {
  showComponentTool: boolean;
  setShowComponentTool: (isShow: boolean) => void;
  showLayerTool: boolean;
  setShowLayerTool: (isShow: boolean) => void;
}

export const HeaderContext = createContext<HeaderContextProps>(
  {} as HeaderContextProps
);

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showComponentTool, setShowComponentTool] = useState(true);
  const [showLayerTool, setShowLayerTool] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        showComponentTool,
        setShowComponentTool,
        showLayerTool,
        setShowLayerTool,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
