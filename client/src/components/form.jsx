import { useDispatch } from "react-redux";
import { useState } from "react";
import { createPost } from "../store/postslice";

function Form(){

  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setPostData({...postData, selectedFile : e.target.value})
    setSelectedFile(e.target.files[0]);  // capture the file input
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('creator', postData.creator);
    formData.append('title', postData.title);
    formData.append('message', postData.message);
    formData.append('tags', postData.tags);
    formData.append('selectedFile', selectedFile);  // add the selected file

    dispatch(createPost(formData)); 
    // dispatch(createPost(postData))
  }

  const clear = () => { }

  return (
    <div class="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container">
      <h2 class="text-2xl font-semibold text-white mb-6">Tell your travel tale</h2>
      <form action="https://fabform.io/f/insert-form-id" method="POST" onSubmit={handleSubmit}>
        <div class="mb-4">
          <input type="text" id="title" onChange={(e) => setPostData({ ...postData, creator: e.target.value })} value={postData.creator} name="creator" placeholder="Creator" required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"/>
        </div>
        <div class="mb-4">
          <input type="text" id="title" onChange={(e) => setPostData({ ...postData, title: e.target.value })} value={postData.title} name="title" placeholder="Title" required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"/>
        </div>
        <div class="mb-3">
          <textarea id="message" onChange={(e) => setPostData({ ...postData, message: e.target.value })} value={postData.message} name="message" rows="3" placeholder="Message" required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white resize-none overflow-y-auto"></textarea>
        </div>
        <div class="mb-4">
          <input type="tags" id="tags" onChange={(e) => setPostData({ ...postData, tags: e.target.value })} value={postData.tags} name="tags" placeholder="Tags" required
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"/>
        </div>
        <div class="mb-4">
          <input id="file_input" onChange={handleFileChange} value={postData.selectedFile} type="file" class="block w-full text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer bg-gray-700 focus:outline-none focus:border-blue-500"/>
          <p class="mt-1 text-sm text-gray-400">SVG, PNG, JPG or GIF (Max 800x400px).</p>
        </div>
        <div class="flex space-x-4">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Submit
          </button>

          <button type="button" class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red" onClick={clear}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
