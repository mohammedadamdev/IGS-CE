import axios from "axios";
import React, { useEffect, useState } from "react";
import { snackBarOpen, snackBarOpenMsg } from "../Redux/PropertySlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../Redux/LoginSlice";

const AddUserFormLogics = () => {
  const dispatch = useDispatch();
  const url = useSelector((state: any) => state.ClientSlice.Url);
  const role = localStorage.getItem("role");
  const [values, setValues] = useState<any>({
    mobile_no: "",
    password1: "changeme",
    password2: "changeme",
    full_name: "",
    email: "",
    role:
      role === "superuser"
        ? "admin"
        : role === "admin"
        ? "owner"
        : role === "owner"
        ? "tenent"
        : "",
    construction_name: "",
    gst_no: "",
    city: "",
    address: "",
  });
  const handleClear = () => {
    setValues({
      mobile_no: "",
      password1: "",
      password2: "",
      full_name: "",
      email: "",
      role: "",
      construction_name: "",
      gst_no: "",
      city: "",
      address: "",
    });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues((preVal: any) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {
    axios
      .post(`${url}/user/signup/`, values)
      .then((res) => {
        console.log(res.data);
        dispatch<any>(snackBarOpenMsg<any>(res.data.response));
        dispatch<any>(snackBarOpen<any>(true));
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });

    setValues({
      mobile_no: "",
      password1: "",
      password2: "",
      full_name: "",
      email: "",
      role: "",
      construction_name: "",
      gst_no: "",
      city: "",
      address: "",
    });
  };

  return { handleClear, handleSubmit, handleChange, values };
};

export default AddUserFormLogics;
