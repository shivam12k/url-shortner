import { useEffect, useState } from "react";
import Graph from "../components/Graph";
import axios from "axios";
import { useParams } from "react-router-dom";
import LineGraph from "../components/LineGraph";
const Analytics = () => {
  const { id } = useParams();
  const [totalClicks, setTotalClick] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getInsights = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/analytics/${id}`
        );
        console.log(response.data);
        setTotalClick(response.data.totalClicks);
        let arr = [];
        for (let i = 0; i < response.data.analytics.length; i++) {
         
          console.log("data",response.data.analytics[i]);
          arr.push(response.data.analytics[i].timestamp);
        }
        setUsers(arr);
        console.log("users", users);
      } catch (error) {
        console.log(error.message);
      }
    };
    getInsights();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="desc ">User Analytics</h1>
      <div className=" mt-4">
        <div
          role="alert"
          className="max-w-[300px] p-2 bg-indigo-800 rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        >
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            {totalClicks}
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
          Total user visits
          </span>
        </div>
        <div className="glassmorphism mt-4">
          <Graph data={users} />
          {/* <LineGraph data={users}/> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
