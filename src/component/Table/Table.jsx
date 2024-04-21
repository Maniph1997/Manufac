import React, { useState, useEffect } from "react";
import data from "../Data/Data";
import "./table.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Table = () => {
  const history = useHistory();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    history.push(`/transaction/${selectedValue}`);
  };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/api");
  //       console.log("Response:", response.data); // Log the data, not the entire response object
  //       setData(response.data); // Set the data in the state
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // Call the async function
  // }, []);

  console.log("Data in state:", data); // Log the data in state
  return (
    <div>
      <div className="heading">
        <h2>Transaction Table</h2>
      </div>
      <div className="userTable">
        <div className="dashboard-wrapper">
          <div className="dashboard">
            Transaction <br />
            Dashboard
          </div>
        </div>

        <div className="main-header">
          <div className="searchbar">
            <input type="text" placeholder="Search Transaction" />
          </div>
          <div className="dropdown">
            <select onChange={handleSelectChange}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
        </div>
        <table className="table" border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Sold</th>
              <th>DateOfSale</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.id}.</td>
                <td>{item.title} </td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <img
                    height={100}
                    width={100}
                    src={item.image}
                    alt="Product"
                  />
                </td>
                <td>{item.sold}</td>
                <td>{item.dateOfSale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
