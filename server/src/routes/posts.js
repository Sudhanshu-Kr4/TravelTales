import { Router } from "express";
import { createPost, getPosts} from "../controllers/posts.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();


router.route("/").get(getPosts);

router.route("/").post(
  upload.fields([{
    name : "selectedFile",
    maxCount: 1,
  }]),
  createPost);

// router.route("/ :id").patch(updatePost);



export default router;