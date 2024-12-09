// import { useEffect } from "react";
// import Form from "./components/form"
// import Posts from "./components/posts"
// import { FaMapLocationDot } from "react-icons/fa6";
// import { useSelector, useDispatch } from "react-redux";
// import { getPosts } from "./store/postslice";
// import NavBar from "./components/navbar";


// function App() {

//   const postData = useSelector((state) => state.posts.items);
//   const postStatus = useSelector((state) => state.posts.status);
//   console.log("postData is : ",postData);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (postStatus === 'idle') {
//       dispatch(getPosts());
//     }
//   },[dispatch,postStatus])


//   return (
//     <div className=" mx-auto bg-gray-300 m-0 b-0 py-0 px-0 flex">
//       {/* <header className="bg-slate-700 p-4 shadow-md flex justify-center items-center mt-6 mb-10 mx-6 rounded-2xl">
//       <div className="flex items-center">
//       <FaMapLocationDot className="w-10 h-10 mr-5 text-blue-300" />
//       <h1 className="text-4xl font-bold text-neutral-50">TravelTales</h1>
//     </div>
//   </header> */}

//       <NavBar></NavBar>

//       <div className="transition duration-300 flex-1 ml-60 py-6 px-6">
//         <div className=" mx-auto">
//           <div className="flex flex-wrap gap-6 justify-between items-start">
//               <Posts />
            
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
