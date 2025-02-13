import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card } from "../components/ui/card";
import { CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

const formSteps = [
  "Device Info",
  "Personal Info",
  "Issue Description",
  "Confirmation",
];

const BookRepairPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceModel: "",
    issue: "",
  });
  const [errors, setErrors] = useState({
    deviceType: "",
    deviceModel: "",
    name: "",
    email: "",
    phone: "",
    issue: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear errors when user starts typing
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  // Validate current step
  const validateStep = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (currentStep === 0) {
      if (!deviceType) {
        newErrors.deviceType = "Device type is required";
        isValid = false;
      }
      if (!formData.deviceModel.trim()) {
        newErrors.deviceModel = "Device model is required";
        isValid = false;
      }
    }

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
        isValid = false;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone is required";
        isValid = false;
      }
    }

    if (currentStep === 2 && !formData.issue.trim()) {
      newErrors.issue = "Issue description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle next step
  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1));
    }
  };

  // Handle previous step
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateStep()) {
      try {
        const response = await fetch("https://formspree.io/f/mnnjbokw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            deviceType,
          }),
        });

        if (response.ok) {
          toast.success(
            "We've received your repair request. We'll contact you shortly to confirm the details."
          );

          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            deviceModel: "",
            issue: "",
          });
          setDeviceType("");
          setCurrentStep(0);
        } else {
          toast.error("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-blue-950 opacity-50" />
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Book a Repair
              </h1>
              <p className="text-xl text-gray-300">
                Get your device fixed by our expert technicians. Fast, reliable,
                and hassle-free.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex justify-between">
                  {formSteps.map((step, index) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index <= currentStep
                            ? "bg-cyan-400 text-black"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {index < currentStep ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className="text-sm mt-2 text-gray-400">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${(currentStep / (formSteps.length - 1)) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <Card className="bg-gray-900/80 backdrop-blur-lg border-gray-700 p-8">
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {currentStep === 0 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                          Device Information
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="device-type"
                              className="block text-sm font-medium text-gray-300 mb-1"
                            >
                              Device Type
                            </label>
                            <Select
                              onValueChange={setDeviceType}
                              value={deviceType}
                            >
                              <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                                <SelectValue placeholder="Select device type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="smartphone">
                                  Smartphone
                                </SelectItem>
                                <SelectItem value="tablet">Tablet</SelectItem>
                                <SelectItem value="watch">
                                  SmartWatch
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.deviceType && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.deviceType}
                              </p>
                            )}
                          </div>
                          {deviceType && (
                            <div>
                              <label
                                htmlFor="device-model"
                                className="block text-sm font-medium text-gray-300 mb-1"
                              >
                                Device Model
                              </label>
                              <Input
                                id="device-model"
                                name="deviceModel"
                                value={formData.deviceModel}
                                onChange={handleInputChange}
                                placeholder="e.g. iPhone 12, Samsung Galaxy S21"
                                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                              />
                              {errors.deviceModel && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.deviceModel}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 1 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                          Personal Information
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-300 mb-1"
                            >
                              Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your Name"
                              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                            />
                            {errors.name && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-300 mb-1"
                            >
                              Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your@email.com"
                              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-300 mb-1"
                            >
                              Phone
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="09 123 4567"
                              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                          Issue Description
                        </h2>
                        <div>
                          <label
                            htmlFor="issue"
                            className="block text-sm font-medium text-gray-300 mb-1"
                          >
                            Describe the Issue
                          </label>
                          <Textarea
                            id="issue"
                            name="issue"
                            value={formData.issue}
                            onChange={handleInputChange}
                            placeholder="Please describe the problem with your device"
                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                            rows={4}
                          />
                          {errors.issue && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.issue}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                          Confirmation
                        </h2>
                        <div className="space-y-4">
                          <p className="text-gray-300">
                            Please review your information:
                          </p>
                          <ul className="list-disc list-inside text-gray-300">
                            <li>Device Type: {deviceType}</li>
                            <li>Device Model: {formData.deviceModel}</li>
                            <li>Name: {formData.name}</li>
                            <li>Email: {formData.email}</li>
                            <li>Phone: {formData.phone}</li>
                          </ul>
                          <p className="text-gray-300">Issue Description:</p>
                          <p className="text-gray-400 italic">
                            {formData.issue}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8 flex justify-between">
                    {currentStep > 0 && (
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                      >
                        Previous
                      </Button>
                    )}
                    {currentStep < formSteps.length - 1 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Book Repair"}
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Our Repair Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repairSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-black font-bold text-lg mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const repairSteps = [
  {
    title: "Book Your Repair",
    description:
      "Fill out our online form or give us a call to schedule your repair.",
  },
  {
    title: "Device Diagnosis",
    description:
      "Our expert technicians will assess your device and provide a detailed diagnosis.",
  },
  {
    title: "Repair and Quality Check",
    description:
      "We'll fix your device and perform thorough quality checks to ensure everything is working perfectly.",
  },
  {
    title: "Pick Up Your Device",
    description:
      "Once the repair is complete, you can pick up your device or we'll ship it back to you.",
  },
];

export default BookRepairPage;
