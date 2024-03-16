"use client";

import { useEffect, useState } from "react";
import GlobalApi from "../../../_services/GlobalApi";
import Image from "next/image";

const CategorySideBar = () => {
  const [hovered, setHovered] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="flex gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer"
            onMouseOver={() => setHovered(index)}
            onMouseOut={() => setHovered(null)}
            style={{
              backgroundColor:
                hovered === index ? `${category.bgcolor.hex}` : "#ffffff",
            }}
          >
            <Image src={category.icon.url} alt="icon" width={30} height={30} />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySideBar;
