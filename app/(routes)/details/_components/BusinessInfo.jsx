import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import Image from "next/image";

const BusinessInfo = ({ business }) => {
  return (
    <div className="md:flex gap-4 items-center">
      <Image
        src={business.images[0]?.url}
        alt={business.name}
        width={150}
        height={200}
        className="rounded-full h-[150px] object-cover"
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-baseline gap-3 mt-4 md:mt-0">
          <h2 className="text-primary bg-purple-100 rounded-full py-1 px-2">
            {business.category?.name}
          </h2>
          <h2 className="text-[40px] font-bold">{business.name}</h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <MapPin />
            {business.address}
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <Mail />
            {business.email}
          </h2>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <Button>
            <Share />
          </Button>
          <h2 className="flex text-xl text-primary">
            <User />
            {business.contactPerson}
          </h2>
          <h2 className="flex text-xl text-gray-500">
            <Clock />
            Available from 8 AM to 10 PM
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
