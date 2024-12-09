import { BiLike,BiTrash} from 'react-icons/bi';
import { FaEllipsisH } from 'react-icons/fa';
import moment from 'moment';

function HomePost({post}){
  

  return(
    <>
      <div className="bg-slate-300  border-gray-400 border-2 border-solid shadow-xl rounded-lg p-4 min-w-full h-160 text-center flex flex-col justify-between" >

        
        <div className='flex gap-1 items-center content-center pl-2' >
          <div >
            <img src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"  className="rounded-full w-10"/>
          </div>
          <div className="flex flex-col justify-between items-start text-gray-500 text-xs mb-2 px-2 pt-2">  
            <span>{post.creator}</span>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>      
        </div>


        <div className="relative ">
          <div className='w-full h-80 overflow-hidden flex justify-center items-center'>
            <img
              src={post.selectedFile || "https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg"}
              alt="post"
              className="w-full h-full object-cover rounded-lg"/>
          </div>  
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

export default HomePost;