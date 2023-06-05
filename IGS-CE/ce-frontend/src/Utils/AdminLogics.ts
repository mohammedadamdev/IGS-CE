import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPropertyData } from "../Redux/PropertySlice";
import { Property, getUniqueValuesFromArray } from "./Constants";


export const AdminLogics = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch<any>(fetchPropertyData());
  }, []);
  const properties: Property[] = useSelector(
    (state: any) => state.PropertySlice.propertyData
  );
    // console.log(properties)
  const [searchTerm, setSearchTerm] = React.useState("");
  const [visibleProperties, setVisibleProperties] =
    React.useState<Property[]>(properties);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;
  const [selectedCity, setSelectedCity] = React.useState<string>("All");
  const [propertyType, setPropertyType] = React.useState<string>("All");
  const types = getUniqueValuesFromArray(properties, "PropertyType");
  const cities = getUniqueValuesFromArray(properties, "Property_Location");



  const filteredProperties = React.useMemo(() => {
    let filtered = properties.filter(
      (property) =>
        property.PropertyTitle.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        property.Property_Address.toLowerCase().includes(
          searchTerm.toLowerCase()
        )
    );
    if (propertyType !== "All") {
      filtered = filtered.filter(
        (property) => property.PropertyType === propertyType
      );
    }
    if (selectedCity !== "All") {
      filtered = filtered.filter(
        (property) => property.Property_Location === selectedCity
      );
    }
    return filtered;
  }, [properties, searchTerm, propertyType, selectedCity]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visible = filteredProperties.slice(startIndex, endIndex);

  React.useEffect(() => {
    setVisibleProperties(visible);
  }, [visible]);

  const handleFilterChange = (key: string, value: string) => {
    if (key === "city") {
      setSelectedCity(value);
    } else if (key === "type") {
      setPropertyType(value);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleClearClick = () => {
    // clear the search term and reset visibleProperties
    setSearchTerm("");
    setPropertyType("All");
    setSelectedCity("All");
    setVisibleProperties(properties);
  };

  return {
    handleClearClick,
    handlePageChange,
    handleFilterChange,
    types,
    filteredProperties,
    cities,
    visibleProperties,
    totalPages,
    searchTerm,
    setSearchTerm,
    selectedCity,
    propertyType,
    currentPage
  };
};
