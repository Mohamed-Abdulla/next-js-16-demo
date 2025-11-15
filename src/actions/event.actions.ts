"use server";

import connectDB from "@/lib/mongodb";
import { Event } from "../../database";

export async function createEventAction(formData: FormData) {
  await connectDB();

  try {
    const raw = Object.fromEntries(formData.entries());

    // Convert repeated fields (agenda[], tags[]) properly
    const agenda = formData.getAll("agenda") as string[];
    const tags = formData.getAll("tags") as string[];

    const eventData = {
      ...raw,
      agenda,
      tags,
    };

    const createdEvent = await Event.create(eventData);

    return {
      success: true,
      message: "Event created successfully",
      event: JSON.parse(JSON.stringify(createdEvent)),
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Event Creation Failed",
      error: e.message || "Unknown error",
    };
  }
}
