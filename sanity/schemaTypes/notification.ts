import { defineType, defineField } from "sanity";



export const notification = defineType({
    name: "notification",
    title: "Notification",
    type: "document",
    fields: [
      defineField({ name: "recipient", type: "reference", to: [{ type: "student" }], title: "Recipient Student" }),
      defineField({ name: "message", type: "string", title: "Message" }),
      defineField({ name: "sentAt", type: "datetime", title: "Sent At" }),
      defineField({ name: "byConductor", type: "reference", to: [{ type: "conductor" }], title: "Sent By Conductor" }),
    ],
    preview: { select: { title: "message" } },
  });

export default notification;