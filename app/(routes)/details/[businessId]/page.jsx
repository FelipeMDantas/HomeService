"use client";

import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BusinessInfo from "../_components/BusinessInfo";

const BusinessDetail = ({ params }) => {
  const { data, status } = useSession();

  const [business, setBusiness] = useState([]);

  useEffect(() => {
    params && getBusinessById();
  }, [params]);

  useEffect(() => {
    checkUserAuth();
  }, []);

  const getBusinessById = () => {
    GlobalApi.getBusinessById(params.businessId).then((resp) => {
      setBusiness(resp.businessList);
    });
  };

  const checkUserAuth = () => {
    if (status === "loading") return <p>Loading...</p>;

    if (status === "unauthenticated") signIn("descope");
  };

  return (
    status === "authenticated" && (
      <div className="py-8 md:py-20 px-10 md:px-36">
        <BusinessInfo />
      </div>
    )
  );
};

export default BusinessDetail;
