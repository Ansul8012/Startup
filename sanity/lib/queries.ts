import { defineQuery } from "next-sanity";

export const STUDENT_BY_EMAIL_QUERY = defineQuery(`
  *[_type == "student" && email == $email][0]{
    _id,
    name,
    email,
    phone,
    course,
    studentId,
    image,
    route->{
      _id,
      name,
      stops
    },
    bookings[]->{
      _id,
      seatNumber,
      status,
      pickupStop,
      tracking,
      bus->{
        _id,
        busNumber,
        availableSeats,
        startTime,
        isActive,
        route->{
          name,
          stops
        },
        conductor->{
          name,
          email,
          phone,
          image
        }
      }
    }
  }
`);
