"use client";

import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import { useEffect, useState } from "react";

const BusinessByCategory = ({ params }) => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    params && getBusinessList();
  }, [params]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} />
    </div>
  );
};

export default BusinessByCategory;
