import { useContext, useState, useEffect, createContext } from "react";
import { getCollectionUser } from "../utils/firebaseStorage";

const TableContext = createContext();

export function useTable() {
  return useContext(TableContext);
}

export function TableProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleData = async (type) => {
    setLoading(true);
    try {
      const response = await getCollectionUser(type);
      setLoading(false);
      setData(response);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const value = {};

  return (
    <TableContext.Provider value={value}>
      {!loading && children}
    </TableContext.Provider>
  );
}
