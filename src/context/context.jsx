import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Context.Provider value={{ 
      selectedProject, 
      setSelectedProject,
      modalOpen,
      setModalOpen
    }}>
      {children}
    </Context.Provider>
  );
};