import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [url, setUrl] = useState("");
  const [isclicked, setIsclicked] = useState(false);
  const [shortID, setShortID] = useState("");
  const [shortURL, setShortURL] = useState("");
  const handleCLick = async () => {
    try {
      // Send the URL as an object, Axios will automatically convert it to JSON
      const response = await axios.post("http://localhost:8000/url", {
        url: url,
      });
      console.log("Shortened URL:", response.data);
      setShortID(response.data.id);
      setShortURL("http://localhost:8000/" + response.data.id);
      setIsclicked(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="py-8 w-full flex md:flex-row flex-col">
        <input
          className="_input"
          type="text"
          placeholder="Enter your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleCLick}
          className="outline_btn h-10 w-full mt-5 md:mx-4"
        >
          Shorten it
        </button>
      </div>
      <div className="flex justify-center">
        {isclicked ? (
          <>
            <div className="glassmorphism w-[15em] md:w-[40em] flex justify-center items-center flex-col">
              <h4 className="desc">Shortened URL</h4>
              <p className="long_text">{shortURL}</p>
              <Link to={`/analytics/${shortID}`} className="black_btn mt-8">
                Get Analytics
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
