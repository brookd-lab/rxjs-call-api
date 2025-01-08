import { useState } from "react";
import GetData from "../helpers/GetData";

const HandlePost = () => {
  const [data, setData] = useState();

  const handleClick = () => {
    GetData(setData);
    // console.log(data);
  }

  return (
    <div>
      <button onClick={handleClick}>Set Data</button>
      {data && <pre>{data.token.slice(-10)}: {data.expiration.slice(-6)}</pre>}
    </div>
  );
};

export default HandlePost;
