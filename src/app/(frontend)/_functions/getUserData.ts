"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getUserData() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "profile",
    limit: 1,
  });
  return result.docs[0] || null;
}