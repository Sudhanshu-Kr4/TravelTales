import { BiLike,BiTrash} from 'react-icons/bi';
import { FaEllipsisH } from 'react-icons/fa';
import moment from 'moment';

function Post({post}){
  

  return(
    <>
      <div className="bg-white shadow-xl rounded-lg p-4 w-80 h-160 text-center flex flex-col justify-between" >

        
        <div className="flex justify-between items-center text-gray-500 text-xs mb-2 px-2">
          <span>{post.creator}</span>
          <span>{moment(post.createdAt).fromNow()}</span>
        </div>


        <div className="relative">
          <img
            src={post.selectedFile || "https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg"}
            alt="post"
            className="rounded-lg border-8 border-white w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300 shadow-lg"/>
          <button className="absolute top-2 right-2 p-1 text-white" onClick={() => {}}>
            <FaEllipsisH />
          </button>
        </div>


        <div className="flex-grow mt-4">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3 h-16">{post.message}</p>
          <div className="mt-4 text-gray-400 text-xs line-clamp-1">{post.tags.map((tag) => `#${tag} `)}</div>
        </div>


        <div className="flex justify-between mt-4 text-gray-600 px-4">
          <button className="flex items-center space-x-1">
            <BiLike className="h-5 w-5" />
            <span>Like 0</span>
          </button>
          <button className="flex items-center space-x-1 text-red-500">
            <BiTrash className="h-5 w-5" />
            <span>Delete</span>
          </button>
        </div>


      </div>

    </>
  )
}

export default Post;