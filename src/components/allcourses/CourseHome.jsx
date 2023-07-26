import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import TutorCard from "./TutorCard"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <TutorCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
