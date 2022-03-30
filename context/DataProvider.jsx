import { useEffect, useState } from "react";
import DataContext from "./data-context";

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.testDb"); // returns Database object

let dummyData = [
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
    db.transaction((tx) => {
      // tx.executeSql("DROP TABLE IF EXISTS items;");
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS items (code INTEGER,  type TEXT, brand TEXT, name TEXT, rate INTEGER)",
        [],
        (_, { rows }) => {
          tx.executeSql("SELECT * FROM items", [], (_, { rows }) => {
            setItemsDataState(rows._array);
          });
        }
      );
    });
  }, []);

  const selectAndUpdateState = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM items;",
          [],
          (_, { rows }) => {
            setItemsDataState(rows._array);
            resolve(rows._array);
          },
          () => {
            reject("SQL SELECT failed");
          }
        );
      });
    });
  };

  const updateDatabase = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE items SET type=?, brand=?, name=?, rate=? WHERE code == ?",
          [obj.type, obj.brand, obj.name, obj.rate, obj.code],
          () => {
            resolve("Done");
          },
          () => {
            reject("SQL SELECT failed");
          }
        );
      });
    });
  };

  const insertIntoDtabase = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO items (code, type, brand, name, rate) VALUES (?,?,?,?,?)",
          [obj.code, obj.type, obj.brand, obj.name, obj.rate],
          () => {
            resolve("Done");
          },
          () => {
            reject("SQL INSERT failed");
          }
        );
      });
    });
  };

  const checkIfInDatabase = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM items WHERE code = ?",
          [obj.code],
          (_, { rows }) => {
            resolve(rows);
          },
          () => {
            reject("SQL SELECT failed");
          }
        );
      });
    });
  };
  const editDataHandler = (obj) => {
    return new Promise((resolve, reject) => {
      checkIfInDatabase(obj)
        .then((rows) => {
          if (rows.length > 0) {
            return updateDatabase(obj);
          } else {
            return insertIntoDtabase(obj);
          }
        })
        .then(() => {
          return selectAndUpdateState();
        })
        .then(() => {
          resolve();
        });
    });
  };

  const itemsData = {
    items: itemsDataState,
    editData: editDataHandler,
  };

  return (
    <DataContext.Provider value={itemsData}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
