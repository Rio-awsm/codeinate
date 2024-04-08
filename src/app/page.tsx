import { db } from "@/db";

export default async function Home() {
  const items = await db.query.testing.findMany();

  return (
    <main>
      {items.map((item) => {
        return (
          <div key={item.id} className="font-bold text-red-800">
            {item.name}
          </div>
        );
      })}
    </main>
  );
}
