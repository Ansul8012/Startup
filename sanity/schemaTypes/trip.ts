import { defineType, defineField } from "sanity";


export const trip = defineType({
    name: "trip",
    title: "Trip",
    type: "document",
    fields: [
      defineField({ name: "bus", type: "reference", to: [{ type: "bus" }], title: "Bus" }),
      defineField({ name: "conductor", type: "reference", to: [{ type: "conductor" }], title: "Conductor" }),
      defineField({ name: "route", type: "reference", to: [{ type: "route" }], title: "Route" }),
      defineField({ name: "startTime", type: "datetime", title: "Start Time" }),
      defineField({ name: "isActive", type: "boolean", title: "Is Trip Active" }),
      defineField({ name: "liveLocation", type: "geopoint", title: "Live Location" }),
      defineField({ name: "students", type: "array", of: [{ type: "reference", to: [{ type: "student" }] }], title: "Registered Students" }),
    ],
    preview: {
      select: { title: "bus.busNumber", subtitle: "startTime" },
    },
  });
  

  export default trip;