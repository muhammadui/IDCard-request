import { useState } from "react";
import axios from "axios";

import "./Home.css";
import facultiesData from "./faculties.json";
import infinityChallengeLogo from "./n1-whte.svg";
import infinityChallengeLogoDefault from "./n1.svg";

const Home = () => {
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
  };

  const handleDepartmentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDepartment(event.target.value);
    setCourses(
      departments?.find((d) => d.name === event.target.value)?.courses || []
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/students", {
        fullname,
        email,
        mobile,
        reg_number,
        faculty,
        department,
        courses,
      });

      alert(response.data.message);
      console.log(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          console.log("Network error");
        }
      } else {
        console.log("Unknown error occurred");
      }
    }
  };

  return (
    <>
      <main>
        <div className="regstration__wrapper">
          <div className="left__reg__col">
            <div className="animation__container">
              <div className="infinity__logo">
                <img src={infinityChallengeLogo} alt="" srcSet="" />
              </div>
            </div>
            <div className="animation__title ">
              <p className="challenge__title">
                Request your <br /> School ID Card <br /> instantly!
              </p>
            </div>
            <div className="animation__subtitle">
              <p>Enjoy convenient Access to School facilities & services</p>
            </div>
          </div>
          <div className="right__reg__col">
            <div className="registration__hero__title__subtitle">
              <div className="registration__title">
                <h1>
                  Request your <br /> School ID Card <br /> instantly!
                </h1>

                <div className="infinity__logo">
                  <img src={infinityChallengeLogoDefault} alt="" srcSet="" />
                </div>
                <h3 className="challenge__subtitile">
                  Enjoy convenient Access to School facilities & services
                </h3>
              </div>
            </div>
            <div className="registration__form">
              <form onSubmit={handleSubmit} className="registration__form">
                <p className="register__form">Register for the Challenge</p>

                <div className="email__container">
                  <label htmlFor="fullname">Team Name</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    required
                    placeholder="John"
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
                  Department:
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
                  Courses:
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
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
