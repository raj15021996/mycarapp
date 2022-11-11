// import React,{useState} from 'react'
// import data from './cars.json'
// import Slider from "react-slick";
// import CarData from './CarCard'
// export default function CarCard() {
//     const [searchTerm, setSearchTerm] = useState("");
       
//   return (
//             <div className="templateContainer">
//                 <div className="searchInput_Container">
//                     <input id="searchInput" type="text" placeholder="Search here..."
//                         onChange={(event) => {
//                             setSearchTerm(event.target.value);
//                         }} />
//                 </div>
//                 <div className="template_Container">
//                     {
                        
//                            data.map((val,index) => {
//                                 return (
//                                     <div className="card-item">
//                                             <CarData data={val} key={index}/>
//                                     </div>
//                                    )
//                             })
//                     }
//             </div>
                   
//          </div>

//   )
// }
 

                        //    data .filter((val) => {
                        //         if (searchTerm == "") {
                        //             return val;
                        //         } else if (val.bodyType.toLowerCase().includes(searchTerm.toLowerCase())) {
                        //             return val;
                        //         }
                        //     })