import { useState } from "react";
import GetData from "../helpers/GetData";

const HandlePost = () => {
  const [data, setData] = useState(null);

  GetData(setData);

  return (
    <div>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default HandlePost;
