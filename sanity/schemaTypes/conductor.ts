import { defineType, defineField } from "sanity";
import { UserIcon } from "lucide-react";

export const conductor = defineType({
    name: "conductor",
    title: "Conductor",
    type: "document",
    icon: UserIcon,
    fields: [
      defineField({ name: "conductorId", type: "string", title: "Conductor ID" }),
      defineField({ name: "name", type: "string", title: "Name" }),
      defineField({ name: "email", type: "string", title: "Email" }),
      defineField({ name: "image", type: "image", title: "Conductor Image" }),
      defineField({ name: "phone", type: "string", title: "Phone Number" }),
      defineField({ name: "startedBus", type: "reference", to: [{ type: "bus" }], title: "Started Bus" }),
      defineField({ name: "notifications", type: "array", of: [{ type: "reference", to: [{ type: "notification" }] }], title: "Notifications Sent" }),
    ],
    preview: { select: { title: "name", subtitle: "conductorId" } },
  });

export default conductor;