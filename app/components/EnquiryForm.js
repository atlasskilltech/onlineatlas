"use client";

import { useState } from "react";
import { ArrowRight } from "./ui/icons";

// Reusable enquiry form. Fields are data-driven so other Programs sections can
// reuse this component (optionally overriding heading/subtitle via props).
const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Enter your name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "Enter your phone", autoComplete: "tel" },
  { name: "city", label: "City", type: "text", placeholder: "Enter your city", autoComplete: "address-level2" },
];

export default function EnquiryForm({
  heading = "Adapt Early or Fall Behind",
  subtitle = (
    <>
      60% of business tasks are{" "}
      <span className="font-semibold text-atlas-navy">becoming AI-driven</span>,
      stay relevant!
    </>
  ),
}) {
  const [values, setValues] = useState({ name: "", email: "", phone: "", city: "" });
  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-[28px] bg-white p-5 text-atlas-navy shadow-2xl shadow-black/30 sm:p-6"
    >
      <h2 className="text-xl font-extrabold sm:text-2xl">{heading}</h2>
      <p className="mt-1.5 text-sm text-gray-500">{subtitle}</p>

      <div className="mt-5 space-y-4">
        {FIELDS.map((f) => (
          <div key={f.name}>
            <label htmlFor={`enquiry-${f.name}`} className="block text-sm font-bold">
              {f.label} <span className="text-red-500">*</span>
            </label>
            <input
              id={`enquiry-${f.name}`}
              name={f.name}
              type={f.type}
              required
              value={values[f.name]}
              onChange={onChange}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              className="mt-1.5 w-full rounded-xl border border-black/10 bg-[#f6f7ed] px-4 py-3 text-sm text-atlas-navy placeholder:uppercase placeholder:tracking-wide placeholder:text-gray-400 focus:border-atlas-navy/30 focus:outline-none focus:ring-2 focus:ring-atlas-navy/10"
            />
          </div>
        ))}
      </div>

      {/* Reuses the homepage card's green CTA token */}
      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#529649] py-3.5 text-base font-bold text-atlas-navy transition-colors hover:bg-[#47853f]"
      >
        Apply Now
        <ArrowRight />
      </button>
    </form>
  );
}
