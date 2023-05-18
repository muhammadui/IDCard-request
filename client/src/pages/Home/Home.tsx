import { useState } from "react";
import axios from "axios";

import "./Home.css";
import facultiesData from "./faculties.json";
import IDCard from "./IDCard.svg";
import IDCardWithShadow from "./IDCardWithShadow.svg";

const Home = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [courses, setCourses] = useState<string[]>([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [reg_number, setRegNumber] = useState("");

  const faculties = facultiesData.faculties;
  const departments = faculty
    ? faculties.find((f) => f.name === faculty)?.departments
    : [];

  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFaculty(event.target.value);
    setDepartment("");
    setCourses([]);
    setIsFormSubmitted(false); // Reset the isFormSubmitted variable
  };

  const handleDepartmentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDepartment(event.target.value);
    setCourses(
      departments?.find((d) => d.name === event.target.value)?.courses || []
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsFormSubmitted(true);
  };
  const paymentURL = import.meta.env.VITE_PAYMENT_URL;
  // const handlePayment = async () => {
  //   // Send payment request to payment gateway
  //   const paymentResponse = await axios.post(`${paymentURL}`, {
  //     amount: 1500,
  //     email,
  //     mobile,
  //     // other required fields
  //   });

  //   if (paymentResponse.data.status === "success") {
  //     // Send data to server to store in database
  //     const response = await axios.post("http://localhost:3000/api/save-data", {
  //       fullname,
  //       email,
  //       mobile,
  //       reg_number,
  //       faculty,
  //       department,
  //       courses,
  //     });

  //     // Show success message or redirect to a success page
  //   } else {
  //     // Show error message
  //   }
  // };

  const handlePayment = async () => {
    try {
      const paymentResponse = await axios.post(`${paymentURL}`, {
        amount: 1500,
        email,
        mobile,
        // other required fields
      });

      if (paymentResponse.data.status === "success") {
        // Redirect to the payment page
        window.location.href = paymentResponse.data.data.link;
      } else {
        // Show error message
        console.error("Payment request failed");
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <>
      <main>
        <div className="regstration__wrapper">
          <div className="left__reg__col">
            <div className="animation__title ">
              <p className="challenge__title">
                Request your <br /> School ID Card <br /> instantly!
              </p>
            </div>
            <div className="animation__subtitle">
              <p>Enjoy convenient access to school facilities & services</p>
            </div>
            <div className="animation__container">
              <div className="infinity__logo">
                <img src={IDCard} alt="" srcSet="" />
              </div>
            </div>
          </div>
          <div className="right__reg__col">
            <div className="registration__hero__title__subtitle">
              <div className="registration__title">
                <div className="infinity__logo">
                  <img src={IDCardWithShadow} alt="" srcSet="" />
                </div>
                <h1>
                  Request your <br /> School ID Card <br /> instantly!
                </h1>

                <h3 className="challenge__subtitile">
                  Enjoy convenient access to school facilities & services
                </h3>
              </div>
            </div>
            <div className="registration__form">
              <form className="registration__form " onSubmit={handleSubmit}>
                <p className="register__form">Fill the form below</p>
                <p className="payment__notification">
                  Note that, you’ll be charge ₦1500 for processing fee
                </p>

                <div className="email__container">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    required
                    placeholder="Muhammad Ahmad"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>

                <div className="email__container">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="your_email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="email__container">
                  <label htmlFor="mobile">Phone Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    required
                    placeholder="080112233XX"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="email__container">
                  <label htmlFor="reg">Reg Number</label>
                  <input
                    type="text"
                    name="reg"
                    id="reg"
                    required
                    placeholder="11/44760X/Y"
                    value={reg_number}
                    onChange={(e) => setRegNumber(e.target.value)}
                  />
                </div>
                <div className="email__container">
                  <label>
                    Faculty:
                    <select value={faculty} onChange={handleFacultyChange}>
                      <option value="">Select a faculty</option>
                      {faculties.map((f) => (
                        <option key={f.name} value={f.name}>
                          {f.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="label__container"></div>
                <div className="label__container"></div>

                <br />
                <label>
                  Department
                  <select value={department} onChange={handleDepartmentChange}>
                    <option value="">Select a department</option>

                    {departments ? (
                      departments.map((d) => (
                        <option key={d.name} value={d.name}>
                          {d.name}
                        </option>
                      ))
                    ) : (
                      <p>Loading...</p>
                    )}
                  </select>
                </label>
                <br />
                <label>
                  Course Option
                  <select
                    value={courses}
                    onChange={(e) =>
                      setCourses(
                        Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        )
                      )
                    }
                  >
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <br />

                {/* <button onClick={handlePayment}>Request ID</button> */}

                <button onClick={handlePayment} type="submit">
                  Request ID
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
