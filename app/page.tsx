"use client";

import CheckBoxInput from "@/components/CheckBoxInput";
import RadioInput from "@/components/RadioInput";
import RadioInputGroup from "@/components/RadioInputGroup";
import SubmitButton from "@/components/SubmitButton";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import { useContactForm } from "@/hooks/useContactForm";
import { FormEvent } from "react";

export default function DefaultPage() {
  const { formData, formErrors, validateForm, updateForm } = useContactForm();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = validateForm();

    console.log(isValid, formData);
  }

  return (
    <main className="w-[740px] p-500 rounded-[16px] bg-white">
      <form className="flex flex-col gap-500" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-400">
          <h1 className="heading text-grey-900">Contact us</h1>

          <div className="flex gap-200">
            <TextInput
              id="firstName"
              className="flex-1/2"
              error={formErrors.firstName}
              onChange={(x) => updateForm("firstName", x)}
            >
              First Name
            </TextInput>
            <TextInput
              id="lastName"
              className="flex-1/2"
              error={formErrors.lastName}
              onChange={(x) => updateForm("lastName", x)}
            >
              Last Name
            </TextInput>
          </div>

          <TextInput
            id="email"
            error={formErrors.email}
            onChange={(x) => updateForm("email", x)}
          >
            Email Address
          </TextInput>

          <RadioInputGroup
            id="type-group"
            legend="Query Type"
            error={formErrors.type}
          >
            <RadioInput
              id="general"
              name="type"
              value="general"
              className="flex-1/2"
              onSelect={() => updateForm("type", "general")}
            >
              General Enquiry
            </RadioInput>
            <RadioInput
              id="support"
              name="type"
              value="support"
              className="flex-1/2"
              onSelect={() => updateForm("type", "support")}
            >
              Support Request
            </RadioInput>
          </RadioInputGroup>
          <TextArea
            id="message"
            error={formErrors.message}
            onChange={(x) => updateForm("message", x)}
          >
            Message
          </TextArea>
        </div>

        <CheckBoxInput
          id="consent"
          error={formErrors.consent}
          onChange={(x) => updateForm("consent", x)}
        >
          I consent to being contacted by the team
        </CheckBoxInput>

        <SubmitButton>Submit</SubmitButton>
      </form>
    </main>
  );
}
