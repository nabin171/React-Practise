// // "use client";
// // import React, { useState } from "react";

// // const Dummy = () => {
// //   const [selectedVehicle, setSelectedVehicle] = useState("economy");
// //   const vehicles = {
// //     economy: { price: 100, time: "15 min", icon: "🚗", color: "primary" },
// //     standard: {
// //       price: 160,
// //       time: "12 min",
// //       icon: "🚙",
// //       color: "secondary",
// //     },
// //     premium: { price: 200, time: "10 min", icon: "🚘", color: "success" },
// //   };
// //   return (
// //     <div>
// //       <button
// //         onClick={() => setSelectedVehicle("economy")}
// //         className="bg-red-50 p-2 m-2 rounded"
// //       >
// //         Economy
// //       </button>
// //       <button
// //         onClick={() => setSelectedVehicle("standard")}
// //         className="bg-red-50 p-2 m-2 rounded"
// //       >
// //         Standard
// //       </button>
// //       <button
// //         onClick={() => setSelectedVehicle("premium")}
// //         className="bg-red-50 p-2 m-2 rounded"
// //       >
// //         Premium
// //       </button>
// //       <p>Selected Vehicles:{selectedVehicle}</p>
// //       <p>
// //         Price of {selectedVehicle}:{vehicles[selectedVehicle].price}
// //       </p>
// //       <p>
// //         Time for {selectedVehicle}:{vehicles[selectedVehicle].time}
// //       </p>
// //     </div>
// //   );
// // };

// // export default Dummy;




//   import React, { useState } from 'react'
  
//   const Dummy = () => {

//   const [task, setTask] = useState([
//     {
//       id: "1",
//       text: "Read Book",
//       address: "balkot",
//     },
//     { id: "2", text: "Read copy", address: "kaushalter" },
//     { id: "3", text: "Read magazines", address: "thimi" },
//     { id: "4", text: "Read diary", address: "dhapakhel" },
//   ]);

//     return (
//       <div>
//         <p>{task.map((item)=>
//         <li>{item.text}</li>
//         )}</p>
//         hey
//       </div>
//     )
//   }
  
//   export default Dummy

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
