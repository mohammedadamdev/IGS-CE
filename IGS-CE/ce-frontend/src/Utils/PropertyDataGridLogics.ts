import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientDataFiltered, fetchClientData } from "../Redux/ClientSlice";
import { useParams } from "react-router-dom";
import { getUniqueValuesFromArray } from "./Constants";
import axios from "axios";

export const PropertyDataLogics = () => {
  const { id, propertyName }: any = useParams();
  const [data, setData] = React.useState([]);
  //   const getData = () => {
  //     axios
  //       .get("https://3.226.14.5:7000/clients/")
  //       .then((res) => setData(res.data));
  //   };
  const Idx = parseInt(id);
  const dispatch = useDispatch();
  const Data: any = useSelector((state: any) => state.ClientSlice.clientData);
  const [block, setBlock] = React.useState<string>("All");
  const [search, setSearch] = React.useState<string>("");
  const FilteredData = data.filter(
    (item: any) => item.Client_PropertyID === Idx
  );
  const blockType = getUniqueValuesFromArray(FilteredData, "Client_Block");
  const handleFilterChange = (key: string, value: string) => {
    if (key === "block") {
      setBlock(value);
    }
  };
  React.useEffect(() => {
    dispatch<any>(fetchClientData());
    // getData();
  }, []);

  const filteredClients = React.useMemo(() => {
    let filtered = FilteredData.filter(
      (property: any) =>
        property.Client_FullName.toLowerCase().includes(search.toLowerCase()) ||
        property.Client_ListingType.toLowerCase().includes(search.toLowerCase())
    );
    if (block !== "All") {
      filtered = filtered.filter(
        (property: any) => property.Client_Block === block
      );
    }
    return filtered;
  }, [search, block, Data, FilteredData]);

  React.useEffect(() => {
    dispatch<any>(
      clientDataFiltered<any>({ filteredClientData: filteredClients })
      );
  }, [filteredClients]);

  return {
    Data,
    block,
    blockType,
    setBlock,
    handleFilterChange,
    search,
    setSearch,
    propertyName,
  };
};
