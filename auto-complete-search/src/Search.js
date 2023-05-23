import React, { useEffect, useState } from "react";

export default function Search() {
  const [apiData, setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
          .then((response) => response.json())
          .then((res) => {
            setApiData(res.states);
            setFilterData(res.states);
          });
      } catch (error) {}
    }

    fetchData();
  }, []);

  function stateName(event) {
    let inputValue = event.target.value;
    if(!inputValue) {
        setFilterData(apiData);
        return;
    }
    let data = apiData.filter(function (el) {
      if (el.state_name.toLowerCase().startsWith(inputValue)) {
        return el;
      }
    });
    setFilterData(data)
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        marginTop: '2rem'
      }}
    >
      <div style={{width: '450px'}}>
        <div style={{ display: "flex" }}>
          <input style={{width: '100%', padding: '1rem', borderRadius: '5px'}} onChange={stateName} placeholder="search state" />
        </div>
        <div style={{ width: '100%', height: '450px', overflowY: "scroll" }}>
        {filterData.map(nm => <div style={{padding: '.5rem', 
            borderBottom: '1px solid #e7e0e0'}}>{nm.state_name}</div>)}
        </div>
      </div>
    </div>
  );
}
