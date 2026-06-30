import Image from "next/image";

// Check-list row reusing the existing green check icon asset.
export default function FeatureItem({ children, className = "" }) {
  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <Image
        src="/ui-assets/icons-image/green/right.png"
        alt=""
        aria-hidden="true"
        width={26}
        height={26}
        className="mt-0.5 h-5 w-5 shrink-0"
      />
      <span>{children}</span>
    </li>
  );
}
