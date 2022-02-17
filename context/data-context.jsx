import React from "react";
export default DataContext = React.createContext({
  items: [
    {
      code: "0",
      type: "Piwo",
      brand: "Beczkowe",
      name: "mocne wiśnia 9%",
      rate: 5,
    },
  ],
  editData: () => {},
});
