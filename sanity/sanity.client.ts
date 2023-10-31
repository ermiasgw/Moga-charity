
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "he2jr0to",
  dataset: "production",
  apiVersion: "2023-10-25",
  useCdn: false
};

const client = createClient(config);

export default client;