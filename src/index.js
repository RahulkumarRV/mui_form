import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
const data = [
  {
    id: 1,
    name: "Introduction to Programming",
    type: "Online Course",
    duration: "4 weeks",
    enrolled: 120,
    instructor: "John Doe",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 2,
    name: "Web Development",
    type: "In-person Course",
    duration: "8 weeks",
    enrolled: 75,
    instructor: "Jane Smith",
    approval: "Pending",
    status: "Inactive"
  },
  {
    id: 3,
    name: "Data Science",
    type: "Hybrid Course",
    duration: "12 weeks",
    enrolled: 50,
    instructor: "Bob Johnson",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 4,
    name: "Mobile App Development",
    type: "Online Course",
    duration: "6 weeks",
    enrolled: 90,
    instructor: "Sara Lee",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 5,
    name: "Game Design",
    type: "In-person Course",
    duration: "10 weeks",
    enrolled: 40,
    instructor: "Mike Smith",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 6,
    name: "Artificial Intelligence",
    type: "Online Course",
    duration: "8 weeks",
    enrolled: 60,
    instructor: "Tom Jones",
    approval: "Pending",
    status: "Inactive"
  },
  {
    id: 7,
    name: "Digital Marketing",
    type: "Hybrid Course",
    duration: "10 weeks",
    enrolled: 80,
    instructor: "Alex Smith",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 8,
    name: "Computer Networking",
    type: "In-person Course",
    duration: "12 weeks",
    enrolled: 55,
    instructor: "Lisa Brown",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 9,
    name: "Cloud Computing",
    type: "Online Course",
    duration: "6 weeks",
    enrolled: 70,
    instructor: "Jason Lee",
    approval: "Pending",
    status: "Inactive"
  },
  {
    id: 10,
    name: "Project Management",
    type: "Hybrid Course",
    duration: "8 weeks",
    enrolled: 65,
    instructor: "Emily Davis",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 11,
    name: "UI/UX Design",
    type: "In-person Course",
    duration: "10 weeks",
    enrolled: 45,
    instructor: "Kelly Green",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 12,
    name: "Cybersecurity",
    type: "Online Course",
    duration: "12 weeks",
    enrolled: 30,
    instructor: "Joe Black",
    approval: "Approved",
    status: "Active"
  },
  {
    id: 13,
    name: "Graphic Design",
    type: "In-person Course",
    duration: "6 weeks",
    enrolled: 50,
    instructor: "Maria Martinez",
    approval: "Pending",
    status: "Inactive"
  }
];

ReactDOM.render(<Demo data={data} />, document.querySelector("#root"));
