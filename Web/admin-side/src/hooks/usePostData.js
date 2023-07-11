import { useState } from "react";

const usePostData = () => {
  const [loading, setLoading] = useState(false);
  const [getResponse, setGetResponse] = useState([]);

  const dispatcher = async (theUrl, options) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(theUrl, options);
      const responseJson = await response.json();

      setGetResponse(responseJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getResponse,
    dispatcher,
  };
};

export default usePostData;
