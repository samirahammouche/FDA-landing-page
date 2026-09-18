"use client";

import { useEffect, useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [success, setSuccess] = useState(false);

  function validateName(value: string) {
    const valid = value.trim().length > 0;
    setNameValid(valid);
    if (!valid) {
      setNameError("Name is required.");
      return false;
    }
    setNameError("");
    return true;
  }

  function validateEmail(value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      setEmailValid(false);
      setEmailError("Email is required.");
      return false;
    }
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    setEmailValid(ok);
    if (!ok) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  }

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (nameTouched) validateName(name);
      if (emailTouched) validateEmail(email);
    }, 300);
    return () => window.clearTimeout(timeout);
  }, [name, email, nameTouched, emailTouched]);

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
    setNameValid(false);
    setEmailValid(false);
    setNameTouched(false);
    setEmailTouched(false);
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
            setNameTouched(true);
            setName(e.target.value);
          }}
          onBlur={() => {
            setNameTouched(true);
            validateName(name);
          }}
          className={`w-full rounded-md border-2 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 outline-none transition-colors focus:border-dp-yellow ${
            nameError ? "border-red-500" : nameValid ? "border-green-500" : "border-white/30"
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
            setEmailTouched(true);
            setEmail(e.target.value);
          }}
          onBlur={() => {
            setEmailTouched(true);
            validateEmail(email);
          }}
          className={`w-full rounded-md border-2 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 outline-none transition-colors focus:border-dp-yellow ${
            emailError ? "border-red-500" : emailValid ? "border-green-500" : "border-white/30"
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