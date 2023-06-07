import React, { useEffect, useState } from "react";
import axios from "axios";

interface IDCardRequest {
  id: number;
  fullname: string;
  email: string;
  mobile: string;
  reg_number: string;
  faculty: string;
  department: string;
  courses: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const IDCardRequests: React.FC = () => {
  const [idCardRequests, setIdCardRequests] = useState<IDCardRequest[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // Fetch ID card requests from the server
    axios
      .get("http://localhost:3000/api/idcard-requests")
      .then((response) => {
        setIdCardRequests(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching ID card requests:", error);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredRequests = idCardRequests.filter((request) =>
    request.reg_number.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>ID Card Requests</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Registration Number"
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      {idCardRequests.length === 0 ? (
        <p>No ID card requests found.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Registration Number</th>
                <th>Mobile Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.fullname}</td>
                  <td>{request.reg_number}</td>
                  <td>{request.mobile}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IDCardRequests;
