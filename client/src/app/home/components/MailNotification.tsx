"use client"

import { subscribe } from "@/app/actions";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-4xl bg-black rounded-md border-none p-5"
      aria-disabled={pending}
    >
      Submit
    </button>
  );
}

const MailNotification = () => {

  const [state, formAction] = useFormState(subscribe, initialState);

  return (
    <div className="w-full flex items-center justify-center bg-white relative">
      <div>
        <img
          src="/HomeImages/banner.png"
          alt=""
          className="blur-sm border-none"
        />
        <form
          action={formAction}
          method="POST"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-10"
        >
          <label htmlFor="subscribe" className="text-5xl font-bold">
            Get Email Notification
          </label>
          <input
            type="text"
            id="subscribe"
            name="email"
            placeholder="subscribe@email.com"
            className="text-4xl p-5 rounded-md border-none text-black"
            required
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default MailNotification;
