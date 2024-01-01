import React, { useEffect } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState
  } = useForm<Inputs>();

  const { errors } = formState;

  const onError = (errors: FieldErrors<Inputs>) => {
    toast.error("Please fill in all the fields!");
  }

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {

    await toast.promise(
      changeLocation(formData.subject, formData.name, formData.message),
      {
        loading: "Redirecting to mail app...",
        success: <b>You can send the email now!</b>,
        error: <b>Redirect failed.</b>,
      }
    );
  };

  const changeLocation = (subject: string, name: string, message: string) => {
    return new Promise<void>((resolve, reject) => {
      try {
        window.location.href = `mailto:jiayi031209@gmail.com?subject=${subject}&body=Hi, my name is ${name}. ${message}`;
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col  maw-w-full justify-evenly mx-auto items-center z-0 p-9">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 mt-24">
        <h4 className="text-2xl font-semibold text-slate-800 dark:text-blue-200 text-center">
          Nice to meet you.{" "}
          <span className="animate-pulse underline decoration-[#3e557a]/50 dark:decoration-[#d8dde6]/50">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-4 w-4 lg:h-5 lg:w-5 text-[#916ef0]/70 dark:text-[#d4c9f2] mb-1" />
            <p className="text-md">+4407518476680</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-4 w-4 lg:h-5 lg:w-5 text-[#916ef0]/70 dark:text-[#d4c9f2] mb-1" />
            <p className="text-md">Rodice Court, Nottingham</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-4 w-4 lg:h-5 lg:w-5 text-[#916ef0]/70 dark:text-[#d4c9f2] mb-1" />
            <p className="text-md">jiayi031209@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", { required: "Name is requried" })}
              type="text"
              className="w-1/2 contactInput"
              placeholder="Name"
            />
            <input
              {...register("email", { required: "Email is requried" })}
              type="email"
              className="w-1/2 contactInput"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject", { required: "Subject is requried" })}
            type="text"
            className="contactInput"
            placeholder="Subject"
          />
          <textarea
            {...register("message", { required: "Message is requried" })}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="py-3 px-8 rounded-md bg-[#271752]/70 text-slate-200 font-semibold dark:bg-[#d4cce6]/70 dark:text-slate-800 hover:bg-[#271752]/60 dark:hover:bg-slate-400 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
