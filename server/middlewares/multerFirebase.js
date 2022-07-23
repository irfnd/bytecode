require("dotenv").config();
const { BUCKET_NAME } = process.env;

const multer = require("multer");
const firebaseStorage = require("multer-firebase-storage");
const firebaseInstance = require("../utils/FirebaseInstance");

const upload = (prefix, folder, field) => {
  return multer({
    storage: firebaseStorage(
      {
        bucketName: BUCKET_NAME,
        directoryPath: folder,
        namePrefix: prefix,
        unique: true,
        public: true,
      },
      firebaseInstance
    ),
    fileFilter: (req, file, cb) => {
      console.log(file);
      if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!", { cause: "BAD_REQUEST" }));
      }
    },
  }).single(field);
};

module.exports = upload;
