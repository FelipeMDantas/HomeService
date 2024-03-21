import { Calendar, Clock, MapPin, User } from "lucide-react";
import Image from "next/image";

const BookingHistoryList = ({ bookingHistory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {bookingHistory?.map((booking, index) => (
        <div key={index} className="flex gap-4 border rounded-lg p-4 mb-5">
          <Image
            src={booking?.businessList?.images[0]?.url}
            alt="image"
            width={130}
            height={130}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">{booking.businessList?.name}</h2>
            <h2 className="flex gap-2 text-primary">
              <User /> {booking.businessList?.contactPerson}
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <MapPin className="text-primary" />
              {booking.businessList?.address}
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <Calendar className="text-primary" /> Service on:
              <span className="text-black"> {booking.date}</span>
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <Clock className="text-primary" /> Service on:
              <span className="text-black"> {booking.time}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistoryList;
