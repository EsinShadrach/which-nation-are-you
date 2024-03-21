import React from "react";

type ResultProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
};

import Image from "next/image";
import earth from "~/public/earth.png";
import fire from "~/public/fire.png";
import water from "~/public/water.png";
import air from "~/public/air.png";
import elementJson from "~/public/element.json";
import { TypographyH2, TypographyH4 } from "~/utils/utilities";

const elementColors = {
  earth: {
    bg: "bg-green-300",
    fg: "text-yellow-800",
    bodyColor: "bg-green-50",
  },
  fire: { bg: "bg-red-500", fg: "text-orange-900", bodyColor: "bg-red-50" },
  water: { bg: "bg-blue-500", fg: "text-cyan-900", bodyColor: "bg-blue-50" },
  air: { bg: "bg-cyan-200", fg: "text-sky-900", bodyColor: "bg-cyan-50" },
};

export default function Results({ params }: ResultProps) {
  const paramElement = params.element ?? ("earth" as keyof typeof elementJson);
  const elementKey = paramElement as keyof typeof elementJson;

  function handleImage() {
    if (elementKey == "fire") {
      return fire;
    }

    if (elementKey == "water") {
      return water;
    }

    if (elementKey == "air") {
      return air;
    }

    return earth;
  }

  const element = elementColors[elementKey];

  return (
    <body className={`${element["bg"]} ${element["fg"]}`} lang="en">
      <main className={`min-h-svh ${element["bodyColor"]}`}>
        <div className="relative w-full h-96 overflow-x-clip">
          <div className="absolute inset-0 z-10 w-full backdrop-blur-xl h-96" />
          <div className={`absolute w-full p-6 rounded-lg ${element["bg"]}`}>
            <Image
              alt={`${paramElement} Nation`}
              src={handleImage()}
              className="mx-auto h-80 scale-125"
            />
          </div>
          <div className="absolute z-20 w-full p-6 mx-3">
            <Image
              alt={`${paramElement} Nation`}
              src={handleImage()}
              className="mx-auto object-cove h-80"
            />
          </div>
        </div>
        <section className="container p-3 mx-auto">
          <div className="relative">
            <TypographyH2 className="relative z-10 mx-auto text-center w-fit">
              You&apos;re{" "}
              {paramElement.split("")[0].toUpperCase() + paramElement.slice(1)}
            </TypographyH2>
          </div>
          <ul>
            {elementJson[elementKey].map((element, index) => (
              <li key={index} className="py-3">
                <TypographyH4>{element.title}: </TypographyH4>
                <p>{element.subtitle}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </body>
  );
}
