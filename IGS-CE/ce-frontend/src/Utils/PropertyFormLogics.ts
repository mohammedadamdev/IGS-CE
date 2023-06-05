import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { snackBarOpen, snackBarOpenMsg } from "../Redux/PropertySlice";

export const PropertyFormLogics = () => {
  const dispatch = useDispatch();

  const url = useSelector((state: any) => state.ClientSlice.Url);
  const request = useSelector((state: any) => state.PropertySlice.request);
  const requestObject = useSelector(
    (state: any) => state.PropertySlice.formData
  );
  //   console.log(requestObject);
  const [values, setValues] = useState<any>(
    request === "Post"
      ? {
          PropertyTitle: "",
          PropertyType: "Select",
          Property_ListingType: "Select",
          Property_Location: "",
          Property_Address: "",
          Property_OverallSqft: null,
          Property_Blocks: null,
          Property_Floors: null,
          Property_Flats: null,
          Property_1BHK: null,
          Property_2BHK: null,
          Property_3BHK: null,
          Property_ImgURL: "",
          Property_Amenities: [],
        }
      : requestObject
  );
  const handleClear = () => {
    setValues({
      PropertyTitle: "",
      PropertyType: "Select",
      Property_ListingType: "Select",
      Property_Location: "",
      Property_Address: "",
      Property_OverallSqft: null,
      Property_Blocks: null,
      Property_Floors: null,
      Property_Flats: null,
      Property_1BHK: null,
      Property_2BHK: null,
      Property_3BHK: null,
      Property_ImgURL: "",
      Property_Amenities: [],
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

  const handleCheckbox = (e: any) => {
    if (values.Property_Amenities.includes(e.target.value)) {
      setValues((prevValues: any) => ({
        ...prevValues,
        Property_Amenities: prevValues.Property_Amenities.filter(
          (item: any) => item !== e.target.value
        ),
      }));
    } else {
      setValues((prevValues: any) => ({
        ...prevValues,
        Property_Amenities: [...prevValues.Property_Amenities, e.target.value],
      }));
    }
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`${url}/property/${id}/delete`)
      .then((res) => {
        console.log(res.data);
        window.alert("Property Delete successfully");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });
  };

  const handleSubmit = () => {
    if (request === "Post") {
      axios
        .post(`${url}/property/`, values)
        .then((res) => {
          console.log(res.data, "ssssss");
          dispatch<any>(snackBarOpenMsg<any>(res.data.Response));
          dispatch<any>(snackBarOpen<any>(true));
        })
        .catch((err) => {
          console.log(err);
          dispatch<any>(snackBarOpenMsg<any>("Please enter a valid Image URL"));

          window.alert("Please enter a valid Image URL");
        });
    }
    if (request === "Edit") {
      axios
        .put(`${url}/property/${requestObject.Property_ID}/update`, values)
        .then((res) => {
          console.log(res.data);
          dispatch<any>(snackBarOpen<any>(true));
        })
        .catch((err) => {
          console.log(err);
          dispatch<any>(snackBarOpenMsg<any>("Please enter a valid Image URL"));
          window.alert("Please enter a valid Image URL");
        });
    }
    setValues({
      Property_Title: "",
      Property_Type: "Select",
      Listing_Type: "Select",
      Location: "",
      Address: "",
      Overall_sqft: null,
      Blocks: null,
      Floors: null,
      Flats: null,
      One_BHK: null,
      Two_BHK: null,
      Three_BHK: null,
      ImgURL: "",
      Property_amenities: [],
    });
  };
  return {
    handleChange,
    values,
    handleCheckbox,
    handleSubmit,
    handleDelete,
    handleClear,
  };
};
