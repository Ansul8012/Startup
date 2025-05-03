import { defineType, defineField } from "sanity";


export const booking = defineType({
    name: "booking",
    title: "Booking",
    type: "document",
    fields: [
      defineField({ name: "student", type: "reference", to: [{ type: "student" }], title: "Student" }),
      defineField({ name: "bus", type: "reference", to: [{ type: "bus" }], title: "Bus" }),
      defineField({ name: "seatNumber", type: "number", title: "Seat Number" }),
      defineField({ name: "pickupStop", type: "string", title: "Pickup Stop" }),
      defineField({ name: "status", type: "string", title: "Status", options: { list: ["active", "completed", "cancelled"] } }),
      defineField({ name: "tracking", type: "boolean", title: "Is Tracking Enabled" }),
    ],
    preview: { select: { title: "seatNumber" } },
  });

  export default booking;