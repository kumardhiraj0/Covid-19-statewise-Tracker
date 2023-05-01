import React, { useEffect, useState } from "react";
import "../CovidTracker/covid.css";
//const Api = "https://api.rootnet.in/covid19-in/stats/latest";
const CovidTracker = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    //const res = await fetch("https://data.covid19india.org/data.json");
    const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest")
    const actualData = await res.json();
    //setData(actualData.statewise);
    //console.log(actualData);
    setData(actualData.data.regional);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <h2 style={{backgroundColor:"gainsboro"}}>INDIA Covid Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Active cases</th>
            {/* <th>Confirmed</th> */}
            <th>Discharged</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
            {/* {
                data.map((currData)=>{
                    return(
                        <>
                        <tr>
                            <td>{currData.state}</td>
                            <td>{currData.active}</td>
                            <td>{currData.confirmed}</td>
                            <td>{currData.deaths}</td>
                        </tr>
                        </>
                    )
                })
            } */}


{
                data.map((currData)=>{
                    return(
                        <>
                        <tr>
                            <td>{currData.loc}</td>
                            <td>{currData.totalConfirmed}</td>
                            <td>{currData.discharged}</td>
                            <td>{currData.deaths}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
    </>
  );
};
export default CovidTracker;
