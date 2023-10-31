import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getHero() {
  return client.fetch(
    groq`*[_type == "hero"]{
      _id,
      welcomeMessage,
      heroImage {alt, "image": asset->url}
    }`
  );
}