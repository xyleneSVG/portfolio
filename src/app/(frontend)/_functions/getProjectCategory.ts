"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getProjectCategory() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "categoryProject",
  });
  return result.docs || [];
}