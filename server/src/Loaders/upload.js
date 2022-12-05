import multer from "multer";
import multerS3 from "multer-s3";
import config from "../config/index.js";
import AWS from "aws-sdk";

const s3 = new AWS.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: function (req, file, callback) {
      callback(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});

export default upload;
