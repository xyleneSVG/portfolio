"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getUserProjects() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "project",
  });
  return result.docs || [];
}