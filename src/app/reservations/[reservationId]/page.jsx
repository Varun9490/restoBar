// app/reservations/confirmation/[reservationId]/page.jsx
"use client";
import Link from "next/link";

export default function ReservationConfirmation({ params }) {
  const { reservationId } = params;

  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Reservation Confirmed!
        </h1>
        <p className="text-amber-100/70 mb-8">
          Your reservation ID is{" "}
          <span className="font-semibold">{reservationId}</span>.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-md bg-amber-100/10 hover:bg-amber-100/20 text-amber-100"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
