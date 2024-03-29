"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./_component/BookingHistoryList";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";

const MyBookings = () => {
  const { data } = useSession();
  const [bookingHistory, setBookingHistory] = useState(null);

  useEffect(() => {
    data && getUserBookingHistory();
  }, [data]);

  const getUserBookingHistory = () => {
    GlobalApi.getUserBookingHistory(data.user.email).then((resp) => {
      console.log(resp);
      setBookingHistory(resp.bookings);
    });
  };

  const filterData = (type) => {
    if (bookingHistory) {
      const result = bookingHistory.filter((item) =>
        type === "booked"
          ? new Date(item.date) > new Date()
          : new Date(item.date) < new Date()
      );

      return result;
    }
  };

  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[20px] my-2">My Bookings</h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingHistoryList bookingHistory={filterData("booked")} />
        </TabsContent>
        <TabsContent value="completed">
          <BookingHistoryList bookingHistory={filterData("completed")} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBookings;
