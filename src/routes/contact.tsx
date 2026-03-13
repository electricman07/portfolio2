import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  fab,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// Define TypeScript interface for form data
interface IFormInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

// Yup validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required").max(50),
  lastName: yup.string().required("Last name is required").max(50),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number"),
  email: yup.string().required("Email is required").email("Invalid email"),
  message: yup.string().required("Message is required").max(500),
});

const RouteComponent: React.FC = () => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data: IFormInput) => {
    try {
      console.log("Form Data:", data);
      alert("Form submitted successfully!");
      reset(); // Clear form after submission
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className=" sections flex flex-col items-center m-20 rounded-xl h-screen">
      <h2 className=" section-title p-2.5 w-auto text-center rounded-xl mt-5 text-5xl">
        Contact Me
      </h2>
      <p className="mt-5 bg-(--accent-secondary) rounded-xl p-5 shadow-(--box-shadow)">
        Whether you have a question about my services, want to discuss a
        potential project, or just want to say hello, I'm here to help. Feel
        free to reach out using the contact form below or through any of the
        provided contact information. I look forward to connecting with you!
      </p>

      <div className="flex mt-10 rounded-xl shadow-(--box-shadow)">
        <div className="min-w-lg bg-(--accent-secondary)  rounded-bl-xl rounded-tl-xl p-10 text-(9)--text-primary)">
          <div>
            <h3 className="text-center p-10 text-4xl">Contact Details</h3>
          </div>
          <div className="flex flex-col h-4/5 justify-between">
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-(--bg-primary)"
                />
                <span className="font-bold"> Phone: </span>778-586-2240
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-(--bg-primary)"
                />
                <span className="font-bold"> Email:</span>gmpopowich@gmail.com
              </p>
            </div>

            <div className="text-4xl flex justify-center">
              <ul className="social-icons flex">
                <li>
                  <a
                    href="https://twitter.com/popowich_glen"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <FontAwesomeIcon
                      className="text-[#000000]"
                      icon={faXTwitter}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/electricman07"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon
                      className="text-[#e4405f]"
                      icon={faInstagram}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/glen.popowich.1"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon
                      className="text-[#3b5998]"
                      icon={faFacebook}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/electricman07"
                    target="_blank"
                    aria-label="Github"
                  >
                    <FontAwesomeIcon className="text-[#333]" icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/glen-popowich-31a389152"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <FontAwesomeIcon
                      className="text-[#0077b5]"
                      icon={faLinkedin}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[500px} h-full">
          <form
            className="min-w-lg max-w-2xl mx-auto p-6 bg-(--bg-primary) shadow-lg rounded-r-xl space-y-4"
            onSubmit={handleSubmit(onSubmit)}
            style={{
              maxWidth: "400px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div>
              <label className="block text-sm font-medium text-(--text-secondary)">
                First Name
              </label>
              <input
                {...register("firstName")}
                className="mt-1 block w-full rounded-md border-(--accent-secondary) shadow-sm focus:border-(--accent-secondary) focus:ring focus:ring-(--accent-secondary) focus:ring-opacity-50 bg-(--bg-background) p-1.5"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-(--text-secondary)">
                Last Name
              </label>
              <input
                {...register("lastName")}
                className="mt-1 block w-full rounded-md border-(--accent-secondary) shadow-sm focus:border-(--accent-secondary) focus:ring focus:ring-(--accent-secondary) focus:ring-opacity-50 bg-(--bg-background) p-1.5"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-(--text-secondary)">
                Phone Number
              </label>
              <input
                {...register("phone")}
                className="mt-1 block w-full rounded-md border-(--accent-secondary) shadow-sm focus:border-(--accent-secondary) focus:ring focus:ring-(--accent-secondary) focus:ring-opacity-50 bg-(--bg-background) p-1.5"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-(--text-secondary)">
                Email
              </label>
              <input
                {...register("email")}
                className="mt-1 block w-full rounded-md border-(--accent-secondary) shadow-sm focus:border-(--accent-secondary) focus:ring focus:ring-(--accent-secondary) focus:ring-opacity-50 bg-(--bg-background) p-1.5"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-(--text-secondary)">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="mt-1 block w-full rounded-md border-(--accent-secondary) shadow-sm focus:border-(--accent-secondary) focus:ring focus:ring-(--accent-secondary) focus:ring-opacity-50 bg-(--bg-background) p-1.5"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});
