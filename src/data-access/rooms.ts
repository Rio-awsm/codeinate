import { db } from "@/db";
import { Room, room } from "@/db/schema";
import { eq } from "drizzle-orm";
import { like } from "drizzle-orm";
import { getSession } from "@/lib/auth";
import { unstable_noStore } from "next/cache";

export async function getRooms() {
    unstable_noStore()
    const rooms = db.query.room.findMany();
      return rooms;
} 