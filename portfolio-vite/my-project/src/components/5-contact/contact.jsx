import React from "react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contact from "../../animation/contact.json";

import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
function Contact() {
  const [state, handleSubmit] = useForm("myyrnrnd");

  return (
    <section className="contact-us px-6" id="contact">
      <h1 className=" dark:text-slate-200 text-gray-700 text-3xl mb-5">
        <span className="icon-envelope mr-3"> </span>
        Contact Me
      </h1>
      <p className="dark:text-slate-300 text-gray-600 mb-8 leading-6	">
        
      </p>

      <div className="flex justify-between">
        <form action="" className="px-3 flex flex-col" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label
              htmlFor="email"
              className="dark:text-slate-300 text-gray-600"
            >
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex mt-8 items-center">
            <label
              htmlFor="message"
              className="dark:text-slate-300 text-gray-600"
            >
              You message:
            </label>
            <textarea name="message" id="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="submit self-center"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
          {state.succeeded && (
            <p className="text-md flex items-center">
              <Lottie
                animationData={doneAnimation}
                className="h-16"
                loop={false}
              />
              Your message has been sent
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie animationData={contact} className="h-96 contact-animation" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
