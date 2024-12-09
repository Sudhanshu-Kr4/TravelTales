import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../store/postslice";


function Layout(){
  const postData = useSelector((state) => state.posts.items);
  const postStatus = useSelector((state) => state.posts.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(getPosts());
    }
  },[dispatch,postStatus])

  return(
      <NavBar className='bg-slate-700'/>
  )
}

export default Layout;