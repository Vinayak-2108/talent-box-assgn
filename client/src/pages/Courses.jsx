import React, { useEffect, useState } from "react";
import "../styles/courses.css";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import { Link, useNavigate } from "react-router-dom";
import { auth_user, get_all_courses } from "../controllers/user";


function Courses() {
    const navigate = useNavigate();
    let [forms, setForms] = useState([]);
    let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user_token")) {
          let obj = {
            token: localStorage.getItem("user_token"),
          };
          auth_user(obj).then((data) => {
            if (data.tag) {
              setIsUserLoggedIn(true);
              let obj = {
                id: JSON.parse(
                  atob(localStorage.getItem("user_token").split(".")[1])
                ).id,
              };
              get_all_courses(obj).then((data) => {
                console.log(data);
                setForms(data);
              });
            } else {
              setIsUserLoggedIn(false);
            }
          });
        }
      }, []);

    return (
        <>
            <Navbar />
            {isUserLoggedIn ? (
            <div className="h-full bg-[#F5F6F7] text-white flex flex-col items-center justify-center">
                <div className="w-4/6 flex flex-col items-center mt-16 text-[#1b1b32]">
                    <div className="courses-hero mb-8">
                        Welcome to freeCodeCamp.org
                    </div>
                    <div className="quote mb-4">
                        "I am not young enough to know everything."
                        <div className="footer">- Oscar Wilde</div>
                    </div>

                    <div className="courses-container flex flex-col gap-4 mb-3">
                        {forms ? forms.map((form) => {
                            return (
                                <Course
                                    title={form.course_title}
                                    duration={form.course_duration}
                                />
                            );
                        }): ('')}
                    </div>
                </div>
            </div>
            ):(<div className="text-black h-screen flex justify-center items-center font-black text-5xl">You are not logged in</div>)}
            
        </>
    );
}

export default Courses;
