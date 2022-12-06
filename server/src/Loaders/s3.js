import config from "../config/index.js";
import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-northeast-2",
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
});
