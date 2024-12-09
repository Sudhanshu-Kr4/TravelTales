import PostMessage from "../models/postMessage.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const getPosts = async(req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({message : error.message})
  }
}



export const createPost = async(req, res) => {

  try {
    const {title, message, creator, tags} = req.body;
    const imageLocalPath = req.files?.selectedFile[0]?.path;
    const dbImageUrl = await uploadOnCloudinary(imageLocalPath);

    const post = new PostMessage({
      title,
      message,
      creator,
      tags,
      createdAt : new Date(),
      selectedFile: dbImageUrl.url,
    });

    const newPost = await post.save();
    res.status(201).json(newPost);
    
  } catch (error) {
    res.status(409).json({message : error.message});
  }

}


// export const updatePost = async(req,res) => {
//   const post = req.body;
//   const {id : _id} = req.params;

//   // if id doesnot exist
//   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with this id');

//   const updatedPost = await PostMessage.findByIdAndUpdate( _id, post, {new : true});
//   res.json(updatedPost);
  
// }