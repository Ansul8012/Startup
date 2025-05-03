import { defineType, defineField } from "sanity";

export const route = defineType({
    name: "route",
    title: "Route",
    type: "document",
    fields: [
      defineField({ name: "name", type: "string", title: "Route Name" }),
      defineField({ name: "stops", type: "array", of: [{ type: "string" }], title: "Stops" }),
    ],
    preview: { select: { title: "name" } },
  });

export default route;