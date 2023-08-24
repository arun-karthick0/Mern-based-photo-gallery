import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/api/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div>
      <h3>Photo Gallery</h3>
      <div className="grid_item" style={{ width: "300px", height: "300px" }}>
        {data?.map((item, _id) => {
          <div key={_id}>
            <img src={`http://localhost:5550/uploads/${item}`}></img>;
          </div>;
        })}
      </div>
    </div>
  );
};

export default Home;
