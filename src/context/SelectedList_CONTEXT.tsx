//
//
//

import React, { createContext, useState, useContext } from "react";

interface ListContextType {
  selectedList_ID: string | null;
  selectedList_NAME: string | null;
  SET_SelectedListId: (id: string) => void;
  SET_SelectedListName: (name: string) => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const SelectedList_PROVIDER: React.FC = ({ children }) => {
  const [selectedList_ID, SET_SelectedListId] = useState<string | null>(null);
  const [selectedList_NAME, SET_SelectedListName] = useState<string | null>(
    null
  );

  return (
    <ListContext.Provider
      value={{
        selectedList_ID,
        selectedList_NAME,
        SET_SelectedListId,
        SET_SelectedListName,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const USE_selectedList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider");
  }
  return context;
};
