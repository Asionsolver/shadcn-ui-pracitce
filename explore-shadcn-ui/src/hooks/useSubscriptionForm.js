import { useState } from "react";
import { validateForm } from "../utils/validation";
import { subscribeUser } from "../utils/api";

export const useSubscriptionForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferences: {
      weekly: false,
      promotional: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePreferenceChange = (type, checked) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [type]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setFormError(null);
    setValidationErrors({});

    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      // Submit form data
      const response = await subscribeUser({
        ...formData,
        subscribedAt: new Date().toISOString(),
      });

      setIsSubmitted(true);

      // Optional: Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        preferences: {
          weekly: false,
          promotional: false,
        },
      });

      // You might want to trigger a success callback
      if (typeof onSuccess === "function") {
        onSuccess(response);
      }
    } catch (error) {
      setFormError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    isSubmitted,
    formError,
    validationErrors,
    handleInputChange,
    handlePreferenceChange,
    handleSubmit,
  };
};
