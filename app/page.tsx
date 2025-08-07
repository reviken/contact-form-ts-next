"use client";

import CheckBoxInputProps from "@/components/CheckBoxInput";
import RadioInput from "@/components/RadioInput";
import RadioInputGroup from "@/components/RadioInputGroup";
import SubmitButton from "@/components/SubmitButton";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import { FormEvent } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  message: string;
  consent: boolean;
}

export default function DefaultPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const contactFormData: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      type: formData.get("type") as string,
      message: formData.get("message") as string,
      consent: formData.get("consent") === "on",
    };

    console.log(contactFormData);
  }

  return (
    <main className="w-[740px] p-500 rounded-[16px] bg-white">
      <form className="flex flex-col gap-500" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-400">
          <h1 className="heading text-grey-900">Contact us</h1>

          <div className="flex gap-200">
            <TextInput id="firstName" className="flex-1/2">
              First Name
            </TextInput>
            <TextInput id="lastName" className="flex-1/2">
              Last Name
            </TextInput>
          </div>

          <TextInput id="email">Email Address</TextInput>

          <RadioInputGroup legend="Query Type">
            <RadioInput
              id="general"
              name="type"
              value="general"
              className="flex-1/2"
            >
              General Enquiry
            </RadioInput>
            <RadioInput
              id="support"
              name="type"
              value="support"
              className="flex-1/2"
            >
              Support Request
            </RadioInput>
          </RadioInputGroup>
          <TextArea id="message">Message</TextArea>
        </div>

        <CheckBoxInputProps id="consent">
          I consent to being contacted by the team
        </CheckBoxInputProps>

        <SubmitButton>Submit</SubmitButton>
      </form>
    </main>
  );
}
