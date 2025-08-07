import { useState } from "react";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  message: string;
  consent: boolean;
}

export interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  type?: string;
  message?: string;
  consent?: string;
}

const defaultFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  type: "",
  message: "",
  consent: false,
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(defaultFormData);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  function updateForm(field: keyof ContactFormData, value: string | boolean) {
    setFormData((x) => ({
      ...x,
      [field]: value,
    }));

    if (formErrors[field]) {
      setFormErrors((x) => {
        const updated = { ...x };
        delete updated[field];
        return updated;
      });
    }
  }

  function validateForm(): boolean {
    const errors: ContactFormErrors = {};

    if (formData.firstName.trim().length === 0) {
      errors.firstName = "This field is required";
    }

    if (formData.lastName.trim().length === 0) {
      errors.lastName = "This field is required";
    }

    if (formData.message.trim().length === 0) {
      errors.message = "This field is required";
    }

    if (formData.type === "") {
      errors.type = "Please select a query type";
    }

    if (formData.consent !== true) {
      errors.consent = "To submit this form, please consent to being contacted";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email.trim().length === 0) {
      errors.email = "This field is required";
    } else if (emailRegex.test(formData.email) === false) {
      errors.email = "Please enter a valid email address";
    }

    setFormErrors(errors);

    const isValid = Object.keys(errors).length === 0;
    return isValid;
  }

  return {
    formData,
    formErrors,
    validateForm,
    updateForm,
  };
}
