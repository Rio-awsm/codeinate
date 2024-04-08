import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  uuid,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const testing = pgTable("testing", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
});
