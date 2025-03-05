// app/reservations/page.jsx
"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReservationsPage() {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    branch: "",
    message: "",
  });

  const handleReservation = (e) => {
    e.preventDefault();
    // Ideally, you would call an API endpoint here to save the reservation
    toast.success("Your reservation request has been sent!");
    // Reset the form
    setReservationData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
      branch: "",
      message: "",
    });
  };

  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-white/5 backdrop-blur-lg border border-amber-900/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Book a Table</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleReservation} className="space-y-6">
              <Input
                placeholder="Your Name"
                className="placeholder:text-amber-100/50 text-white"
                value={reservationData.name}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    name: e.target.value,
                  })
                }
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="placeholder:text-amber-100/50 text-white"
                value={reservationData.email}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="date"
                placeholder="Reservation Date"
                className="mt-4 placeholder:text-white/50 text-white"
                value={reservationData.date}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    date: e.target.value,
                  })
                }
              />
              <Input
                type="time"
                placeholder="Reservation Time"
                className="placeholder:text-white/50 text-white"
                value={reservationData.time}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    time: e.target.value,
                  })
                }
              />
              <Input
                type="number"
                placeholder="Number of Guests"
                className="placeholder:text-white/50 text-white"
                value={reservationData.guests}
                min={1}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    guests: e.target.value,
                  })
                }
              />
              {/* Coffee Shop Branch Select */}
              <select
                value={reservationData.branch}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    branch: e.target.value,
                  })
                }
                className="w-full p-3 rounded-md bg-white/5 border border-amber-900/20 text-white placeholder:text-white"
              >
                <option value="" disabled>
                  Select Coffee Shop Branch
                </option>
                <option value="branch1">Coffee Shop 1</option>
                <option value="branch2">Coffee Shop 2</option>
                <option value="branch3">Coffee Shop 3</option>
              </select>
              <Textarea
                placeholder="Additional Notes"
                className="h-24 placeholder:text-amber-100/50"
                value={reservationData.message}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    message: e.target.value,
                  })
                }
              />
              <Button type="submit">Submit Reservation</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
