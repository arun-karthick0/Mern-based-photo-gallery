import multer from "multer";
import path from "path";

// storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname,
      "-" + Date.now() + `${path.extname(file.originalname)}`
    );
  },
});

// allowed types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const multerMiddleware = multer({ storage: storage, fileFilter });
// console.log(multerMiddleware);

export default multerMiddleware;
