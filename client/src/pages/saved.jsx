import { FiPaperclip } from "react-icons/fi";
import HomePost from "../components/homepost";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Saved(){

  const posts = useSelector((state) => state.posts.items);




  const mmt = [
    "./mmt/1.png",
    "./mmt/2.jpg",
    "./mmt/3.jpg",
    "./mmt/4.jpg",
    "./mmt/5.png",
    "./mmt/6.webp"
  ]

    const [currentmmt, setCurrentmmt] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
      timeOut =
        autoPlay &&
        setTimeout(() => {
          slideRight();
        }, 2500);
    });


    const slideRight = () => {
      setCurrentmmt(currentmmt === mmt.length - 1 ? 0 : currentmmt + 1);
    };

    const slideLeft = () => {
      setCurrentmmt(currentmmt === 0 ? mmt.length - 1 : currentmmt - 1);
    };

    


  const yatra = [
    "./yatra/1.jpg",
    "./yatra/2.jpg",
    "./yatra/3.jpg",
    "./yatra/5.jpg"
  ]

  const [currentYatra, setCurrentYatra] = useState(0);
  const [autoPlayYatra, setAutoPlayYatra] = useState(true);
  let timeOutYatra = null;

  useEffect(() => {
    timeOutYatra = autoPlayYatra && setTimeout(() => {
        slideRightYatra();
      }, 2500);
  });


  const slideRightYatra = () => {
    setCurrentYatra(currentYatra === yatra.length - 1 ? 0 : currentYatra + 1);
  };

  const slideLeftYatra = () => {
    setCurrentYatra(currentYatra === 0 ? yatra.length - 1 : currentYatra - 1);
  };


  const Airbnb = [
    "./airbnb/1.jpg",
    "./airbnb/2.jpg",
    "./airbnb/2.webp",
    "./airbnb/4.jpg",
  ]

  const [currentAirbnb, setCurrentAirbnb] = useState(0);
  const [autoPlayAirbnb, setAutoPlayAirbnb] = useState(true);
  let timeOutAirbnb = null;

  useEffect(() => {
    timeOutAirbnb = autoPlayAirbnb && setTimeout(() => {
        slideRightAirbnb();
      }, 2500);
  });


  const slideRightAirbnb = () => {
    setCurrentAirbnb(currentAirbnb === Airbnb.length - 1 ? 0 : currentAirbnb + 1);
  };

  const slideLeftAirbnb = () => {
    setCurrentAirbnb(currentAirbnb === 0 ? Airbnb.length - 1 : currentAirbnb - 1);
  };




  return(
    <div className="flex min-h-full min-w-full pt-6 m-0 gap-6 bg-slate-500">
      {/* left side with search bar and single posts */}
      <div className="flex-auto flex flex-col gap-16 md:mr-80 mr-16 ">

        {/* upper part with create post */}
        <div className="min-w-full h-36  px-6 py-6 bg-slate-300 flex flex-col justify-center gap-2 border-gray-400 border-2 border-solid rounded-md">
          {/* dp and search bar */}
          <div className=" flex justify-center gap-1">
            <div >
              <img src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"  className="rounded-full w-10"/>
            </div>
              <input type="text" placeholder="What's on your mind..." className="flex-1 w-full py-2 px-4 border border-gray-500 rounded-full  hover:border-blue-950 " />
          </div>

          {/* attachment and button create post */}
          <div className="flex justify-between items-center content-center px-4 pt-4 pb-2 ">
            <div>
              <label htmlFor="file-upload" className="cursor-pointer" >
                <FiPaperclip className="text-black-500 text-xl hover:text-2xl" />
              </label>
              <input id="file-upload" type="file" accept="image/*" className="hidden" />
            </div>
            <button className="bg-slate-700 text-white text-xs w-20 h-8 rounded-lg border-gray-200 border-x border-y border-solid hover:border-2 hover:border-blue-400">
              Post
            </button>
          </div>
        </div>


        {/* single post card */}
          {/* posts */}
          <div className="flex gap-10 flex-wrap justify-start items-center content-center ">
              {posts.map((post) => ( <HomePost post={post} key={post._id}/>))}
    
          </div>
      </div>


      {/* right part with advertisement */}
      <div className=" fixed right-0 top-0 md:w-72 w-16  min-h-screen gap-2 flex flex-col justify-evenly items-center content-center bg-slate-500">

        <div className="relative w-60 h-60  mt-2" 
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          {mmt.map((image, index) => (<div key={index} className={` w-60 h-60 bg-gray-500 absolute rounded-xl overflow-hidden border-gray-400 border-2 border-solid  flex  duration-1000   ${ index==currentmmt ? 'opacity-1 transform scale-100  pointer-events-auto ' : 'opacity-0 transform scale-75 pointer-events-none' } `}>
            <div className="relative">
              <img src={image} className="w-full h-60 object-cover" />
            </div>
            <div className="absolute bottom-0 bg-blue-300 bg-opacity-50 w-full h-8 flex items-center justify-center hover:bg-blue-400 hover:bg-opacity-70 cursor-pointer duration-300">
              <a href="https://www.makemytrip.com" className="text-black font-semibold">Link</a>
            </div>
          </div>))
          }
          <div className="text-3xl absolute left-3 top-28 transform translate-y-[-50%] duration-300 cursor-pointer" onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className="text-3xl absolute right-2 top-28 transform translate-y-[-50%] duration-300 cursor-pointer" onClick={slideRight}>
            &rsaquo;
          </div>
        </div>


        <div className="relative w-60 h-60 m-2  "
          onMouseEnter={() => {
            setAutoPlayYatra(false);
            clearTimeout(timeOutYatra);
          }}
          onMouseLeave={() => {
            setAutoPlayYatra(true);
          }}
        >
          {yatra.map((image, index) => (<div key={index} className={` w-60 h-60 bg-gray-500 absolute rounded-xl overflow-hidden border-gray-400 border-2 border-solid  flex  duration-1000     ${ index== currentYatra? 'opacity-1 transform scale-100  pointer-events-auto ' : 'opacity-0 transform scale-75 pointer-events-none' } `}>
            <div className="relative">
              <img src={image} className="w-full h-60 object-cover" />
            </div>
            <div className="absolute bottom-0 bg-blue-300 bg-opacity-50 w-full h-8 flex items-center justify-center hover:bg-blue-400 hover:bg-opacity-70 cursor-pointer duration-300">
              <a href="https://www.yatra.com" className="text-black font-semibold">Link</a>
            </div>
          </div>))
          }
          <div className="text-3xl absolute left-3 top-24 cursor-pointer " onClick={slideLeftYatra}>
            &lsaquo;
          </div>
          <div className="text-3xl absolute right-2 top-24 cursor-pointer " onClick={slideRightYatra}>
            &rsaquo;
          </div>
        </div>


        <div className="relative w-60 h-60 mb-2" 
          onMouseEnter={() => {
            setAutoPlayAirbnb(false);
            clearTimeout(timeOutAirbnb);
          }}
          onMouseLeave={() => {
            setAutoPlayAirbnb(true);
          }}
        >
          {Airbnb.map((image, index) => (<div key={index} className={` w-60 h-60 bg-gray-500 absolute rounded-xl overflow-hidden border-gray-400 border-2 border-solid  flex  duration-1000    ${ index===currentAirbnb ? 'opacity-1 transform scale-100  pointer-events-auto ' : 'opacity-0 transform scale-75 pointer-events-none' } `}>
            <div className="relative">
              <img src={image} className="w-full h-60 object-cover" />
            </div>
            <div className="absolute bottom-0 bg-blue-300 bg-opacity-50 w-full h-8 flex items-center justify-center hover:bg-blue-400 hover:bg-opacity-70 cursor-pointer duration-300">
              <a href="https://www.airbnb.co.in/" className="text-black font-semibold">Link</a>
            </div>
          </div>))
          }
          <div className="text-3xl absolute left-3 top-24 cursor-pointer " onClick={slideLeftAirbnb}>
            &lsaquo;
          </div>
          <div className="text-3xl absolute right-2 top-24 cursor-pointer" onClick={slideRightAirbnb}>
            &rsaquo;
          </div>
        </div>
        </div>
    </div>
  )
}

export default Saved;