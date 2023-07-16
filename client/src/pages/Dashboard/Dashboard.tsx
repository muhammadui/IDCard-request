import { SignOutButton, UserProfile } from "@clerk/clerk-react";
import IDCardRequests from "../../components/IDCardRequests";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard__navbar">
        <p className="admin__name"> Welcome Admin</p>
      </div>
      {/* <UserProfile /> */}
      <IDCardRequests />

      <SignOutButton />
    </>
  );
};

export default Dashboard;
