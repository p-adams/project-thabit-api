import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";
import { convertIslamicDistance, convertIslamicWeight } from "./main.ts";

Deno.test("Distance", () => {
  assertEquals(7.46, convertIslamicDistance("Farsakh (فرسخ)", 2, "us"));
});

Deno.test("Weight", () => {
  assertEquals(14.875, convertIslamicWeight("Mithqal (مثقال)", 3.5, "metric"));
});
