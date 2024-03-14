import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const headerStyle =
    'className="hover:scale-105 hover:text-primary cursor-pointer';

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="logo.svg" alt="logo" width={180} height={100} />
        <div className="md:flex items-center gap-6 hidden">
          <h2 className={headerStyle}>Home</h2>
          <h2 className={headerStyle}>Services</h2>
          <h2 className={headerStyle}>About us</h2>
        </div>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;