import User from "../models/userModels.js";

// image upload
export const imageUpload = (req, res) => {
  const photo = req.file;
  if (!req.file) {
    console.log("image not uploaded");
  } else {
    console.log(photo);
  }
  const upload = User.create({ photos: photo.path }).then((data) => {
      console.log("upload successful");
      console.log(data);
      res.json(data);
    })
    .catch((err) => console.log(err));
};

// get photos
export const getAllPhotos = async (req, res) => {
  const getAll = await User.find().sort({ createdAt: "descending" });
  res.json(getAll);
};
