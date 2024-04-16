import { db } from "@/db";

export default async function Home() {
  const rooms = await db.query.room.findMany();

  return (
    <main className="flex justify-center">
      {rooms.map((room) => {
        return (
          <div key={room.id} className="font-bold text-red-800">
            {room.name}
          </div>
        );
      })}
    </main>
  );
}
