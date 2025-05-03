import { defineType, defineField } from "sanity";
import { UserIcon } from "lucide-react";

export const student = defineType({
  name: "student",
  title: "Student",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({ name: "studentId", type: "string", title: "Student ID" }),
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "course", type: "string", title: "Course" }),
    defineField({ name: "image", type: "image", title: "Student Image" }),
    defineField({ name: "phone", type: "string", title: "Phone Number" }),
    defineField({ name: "route", type: "reference", to: [{ type: "route" }], title: "Default Route" }),
    defineField({ name: "bookings", type: "array", of: [{ type: "reference", to: [{ type: "booking" }] }], title: "Booking History" }),
  ],
  preview: { select: { title: "name", subtitle: "studentId" } },
});

export default student;