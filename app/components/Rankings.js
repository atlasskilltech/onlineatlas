import Image from "next/image";

const ITEMS = [
  {
    big: "#5",
    lines: ["Nationally", "(Private B-Schools)"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/times-now.png",
      alt: "Times Now",
      width: 298,
      height: 36,
      className: "h-6 sm:h-7",
    },
  },
  {
    heading: ["Prestigious", "Education Brand"],
    lines: ["Two time in a row", "2024-2025"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/makrsmen-daily.png",
      alt: "Marksmen Daily",
      width: 225,
      height: 63,
      className: "h-11 sm:h-12",
    },
  },
  {
    big: "#1",
    lines: ["Top Emerging", "Management University"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/the-times-of-india.png",
      alt: "Times Education Icons — The Times of India",
      width: 249,
      height: 79,
      className: "h-12 sm:h-14",
    },
  },
  {
    big: "#5",
    lines: ["B-School", "(West Zone)"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/bw-bussinessword.png",
      alt: "BW Businessworld",
      width: 243,
      height: 34,
      className: "h-6 sm:h-7",
    },
  },
];

export default function Rankings() {
  return (
    <section className="bg-[#f6f7ee]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex h-full flex-col items-center text-center text-atlas-navy"
            >
              {/* Stat / heading */}
              {item.big ? (
                <p className="text-6xl font-extrabold leading-none tracking-tight lg:text-7xl">
                  {item.big}
                </p>
              ) : (
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight lg:text-3xl">
                  {item.heading[0]}
                  <br />
                  {item.heading[1]}
                </h3>
              )}

              {/* Supporting text */}
              <p className="mt-3 text-base font-medium leading-snug text-atlas-navy/90 lg:text-lg">
                {item.lines[0]}
                <br />
                {item.lines[1]}
              </p>

              {/* Logo pinned to the bottom so all logos align */}
              <div className="mt-auto flex w-full items-end justify-center pt-8">
                <Image
                  src={item.logo.src}
                  alt={item.logo.alt}
                  width={item.logo.width}
                  height={item.logo.height}
                  className={`${item.logo.className} w-auto`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
