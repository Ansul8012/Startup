import { defineType, defineField } from "sanity";


export const bus = defineType({
    name: "bus",
    title: "Bus",
    type: "document",
    fields: [
      defineField({ name: "busNumber", type: "string", title: "Bus Number" }),
      defineField({ name: "route", type: "reference", to: [{ type: "route" }], title: "Route" }),
      defineField({ name: "image", type: "image", title: "Bus Image" }),
      defineField({ name: "isActive", type: "boolean", title: "Is Active (Started)" }),
      defineField({ name: "availableSeats", type: "number", title: "Available Seats" }),
      defineField({ name: "conductor", type: "reference", to: [{ type: "conductor" }], title: "Conductor" }),
      defineField({ name: "liveLocation", type: "geopoint", title: "Live Location" }),
      defineField({ name: "startTime", type: "datetime", title: "Start Time" }),
      defineField({ name: "students", type: "array", of: [{ type: "reference", to: [{ type: "student" }] }], title: "Booked Students" }),
    ],
    preview: { select: { title: "busNumber" } },
  });

export default bus;