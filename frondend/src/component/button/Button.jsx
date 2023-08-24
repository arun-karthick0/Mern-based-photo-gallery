import { AiFillPlusCircle } from "react-icons/ai";
import "./button.css";
import axios from "axios";

function Button() {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    console.log(formData);

    axios
      .post("/api/upload", formData)
      .then((res) => alert("image successfully uploaded"))
      .catch((err) => alert(err));
  };

  return (
    <>
      <label className="button" htmlFor="file_picker">
        <AiFillPlusCircle className="circle" />
        <input
          hidden
          type="file"
          id="file_picker"
          name="file_picker"
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
    </>
  );
}

export default Button;
