import Post from "./post";
import { useSelector } from "react-redux";

function Posts(){
  const posts = useSelector((state) => state.posts.items);

  return(
    !posts.length ? <h1 class="justify-center h-30 text-xl font-bold">
    No post is available
  </h1> :
    <div className="flex gap-10 flex-wrap justify-start items-center content-center ">
      {posts.map((post) => ( <Post post={post} key={post._id}/>))}
    
    </div>
  )
}

export default Posts;