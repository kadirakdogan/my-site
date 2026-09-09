import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kadir Akdoğan — IT Specialist",
    short_name: "Kadir Akdoğan",
    description: "Professional profile of Kadir Akdoğan: IT Support Specialist, Network & Systems Administrator.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#111111",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
