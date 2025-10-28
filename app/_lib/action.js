"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

// Updating Guest
export async function updateGuest(formData) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in for accessing this feature");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid nationalID");

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

// Creating Bookings
export const createBooking = async function (bookingData, formData) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in for accessing this feature");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observation: formData.get("observation").slice(0, 1000),
    extraPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  // console.log(newBooking);
  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
};

// Deleting Reservation
export async function deleteReservation(bookingId) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in for accessing this feature");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservation");
}

// Updating Booking
export const updateBooking = async (formData) => {
  const bookingId = Number(formData.get("bookingId"));

  // 1.) Authentication
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in for accessing this feature");

  // 2.) Authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  // 3.) Building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observation: formData.get("observation").slice(0, 1000),
  };

  // 4.) Mutation
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // 5.) Error handling
  if (error) throw new Error("Guest could not be updated");

  // 6.) Revalidation
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // 7.) Redirecting
  redirect("/account/reservations");
};

// Signing In
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

// Signing Out
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
