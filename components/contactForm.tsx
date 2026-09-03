"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(false);

  function validateName(value: string) {
    if (value.trim().length === 0) {
      setNameError("Name is required.");
      return false;
    }
    setNameError("");
    return true;
  }

  function validateEmail(value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      setEmailError("Email is required.");
      return false;
    }
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!ok) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(false);

    const nameOk = validateName(name);
    const emailOk = validateEmail(email);

    if (!nameOk || !emailOk) {
      return;
    }

    setName("");
    setEmail("");
    setSuccess(true);
  }

  return (
    <form
      id="contact-form"
      noValidate
      onSubmit={handleSubmit}
      className="mx-auto max-w-[500px] sm:mx-0"
    >
      <p className="mb-4 max-w-[900px] text-[18px] font-normal leading-relaxed text-white/60 sm:text-[25px]">
        Want to see DataPilot in action? Leave your details and we&apos;ll reach
        out to set up a quick demo.
      </p>

      <div className="mb-4">
        <label
          htmlFor="contact-name"
          className="mb-1 block text-[16px] font-semibold text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          aria-required="true"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (nameError) validateName(e.target.value);
          }}
          onBlur={() => validateName(name)}
          className={`w-full rounded-md border-2 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 outline-none transition-colors focus:border-dp-yellow ${
            nameError ? "border-red-500" : "border-white/30"
          }`}
        />
        {nameError && (
          <p className="mt-1 text-[14px] font-medium text-red-300">
            {nameError}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="contact-email"
          className="mb-1 block text-[16px] font-semibold text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-required="true"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) validateEmail(e.target.value);
          }}
          onBlur={() => validateEmail(email)}
          className={`w-full rounded-md border-2 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 outline-none transition-colors focus:border-dp-yellow ${
            emailError ? "border-red-500" : "border-white/30"
          }`}
        />
        {emailError && (
          <p className="mt-1 text-[14px] font-medium text-red-300">
            {emailError}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-full bg-dp-yellow px-6 py-2.5 font-bold text-dp-navy shadow-md transition hover:brightness-105"
      >
        Submit
      </button>

      {success && (
        <p className="mt-3 text-[16px] font-semibold text-green-300">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}
    </form>
  );
}