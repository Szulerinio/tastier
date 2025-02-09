import { useEffect, useState } from "react";
import DataContext from "./data-context";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabaseSync("db.testDb"); // returns Database object
const dummyData = [
  {
    code: "0",
    type: "Piwo",
    brand: "Beczkowe",
    name: "mocne wiśnia 9%",
    rate: 5,
  },
  {
    code: "1",
    type: "Piwo",
    brand: "Beczkowe",
    name: "mocne wiśnia 9%",
    rate: 4,
  },
];

const DataProvider = (props) => {
  const [itemsDataState, setItemsDataState] = useState(dummyData);

  useEffect(() => {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS items (code INTEGER,  type TEXT, brand TEXT, name TEXT, rate INTEGER);
    `);
    setItemsDataState(db.getAllSync("SELECT * FROM items"));
  }, []);

  const selectAndUpdateState = () => {
    const rows = db.getAllSync("SELECT * FROM items;");
    setItemsDataState(rows);
    return rows;
  };

  const updateDatabase = (obj) => {
    db.runSync(
      "UPDATE items SET type=?, brand=?, name=?, rate=? WHERE code = ?;",
      [obj.type.trim(), obj.brand.trim(), obj.name.trim(), obj.rate, obj.code]
    );
    return "Done";
  };

  const insertIntoDatabase = (obj) => {
    db.runSync(
      "INSERT INTO items (code, type, brand, name, rate) VALUES (?,?,?,?,?)",
      [obj.code.trim(), obj.type.trim(), obj.brand.trim(), obj.name, obj.rate]
    );
    return "Done";
  };

  const checkIfInDatabase = (obj) => {
    return db.getFirstSync("SELECT * FROM items WHERE code = ?", [obj.code]);
  };

  const deleteFromDatabase = (obj) => {
    return db.runAsync("DELETE FROM items WHERE code = ?", [obj.code]);
  };

  const editDataHandler = (obj) => {
    const item = checkIfInDatabase(obj);
    if (!!item) {
      updateDatabase(obj);
    } else {
      insertIntoDatabase(obj);
    }
    selectAndUpdateState();
  };

  const deleteDataHandler = (obj) => {
    const item = checkIfInDatabase(obj);
    if (!!item) {
      deleteFromDatabase(obj);
    }
    selectAndUpdateState();
  };

  const itemsData = {
    items: itemsDataState,
    editData: editDataHandler,
    deleteData: deleteDataHandler,
  };

  return (
    <DataContext.Provider value={itemsData}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
