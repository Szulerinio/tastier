import { useState } from "react";
import DataContext from "./data-context";
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
  const editDataHandler = (obj) => {
    let temp = itemsDataState.findIndex((x) => x.code == obj.code);
    console.log(JSON.stringify(temp));
    if (temp != -1) {
      setItemsDataState((prevState) => {
        console.log(JSON.stringify(prevState));
        let temporary = [...prevState];
        console.log(JSON.stringify(temporary));
        temporary[temp] = obj;
        return temporary;
      });
    } else {
      setItemsDataState((prevState) => {
        let temporary = [...prevState, obj];

        return temporary;
      });
    }
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
