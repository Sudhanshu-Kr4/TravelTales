import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/index'


export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const { data } = await api.fetchPosts();
  return data; 
});

export const createPost = createAsyncThunk('posts/createPost' , async (post) => {
  const { data } = await api.createPost(post);
  return data;
})

const initialState = {
  items: [],
  status: 'idle', 
  error: null,
};

const postSlice = createSlice({
  name : "posts",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'loading';  
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.items = action.payload; 
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.error.message; 
      });

    builder
      .addCase(createPost.pending, (state) => {
        state.status = 'loading';  
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'succeeded';  
        state.items.push(action.payload);  
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.error.message;  
      });  
  }
})

export default postSlice.reducer;