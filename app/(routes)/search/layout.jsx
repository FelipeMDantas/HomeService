import CategorySideBar from "./_components/CategorySideBar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="">
        <CategorySideBar />
      </div>
      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default Layout;
