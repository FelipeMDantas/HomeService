import Image from "next/image";

const CategoryList = ({ category }) => {
  return (
    <div className="mx-4 md:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {category.length > 0
        ? category.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-2 p-5 rounded-lg cursor-pointer 
              hover:scale-110 transition-all ease-in-out`}
              style={{ backgroundColor: `${category.bgcolor.hex}` }}
            >
              <Image
                src={category.icon.url}
                alt="icon"
                width={35}
                height={35}
              />
              <h2 className="text-gray-700">{category.name}</h2>
            </div>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
            />
          ))}
    </div>
  );
};

export default CategoryList;
