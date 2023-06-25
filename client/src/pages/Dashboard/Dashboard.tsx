import { SignOutButton, UserProfile } from "@clerk/clerk-react";
import IDCardRequests from "../../components/IDCardRequests";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard__navbar">
        <p>Welcome Bro</p>
        <SignOutButton />
      </div>
      {/* <UserProfile /> */}
      <IDCardRequests />
    </>
  );
};

export default Dashboard;
