import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  CopyOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("(123) 456-7890");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section
      id="contact"
      className="h-[calc(100vh-4rem)] w-full scroll-mt-20 border-b-2 bg-white"
      aria-label="Contact Information"
    >
      <div className="container mx-auto flex h-full flex-col items-center px-4 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Have questions or want to schedule a cleaning? Reach out to us using
          any of the methods below!
        </p>
        <div className="w-full max-w-xl space-y-6">
          {/* Mobile: Tel Link */}
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-white p-5 text-xl shadow-lg transition-shadow duration-300 hover:text-gray-700 hover:shadow-xl lg:hidden"
            aria-label="Call us at (123) 456-7890"
          >
            <PhoneOutlined className="text-2xl" aria-hidden="true" />
            <span>(123) 456-7890</span>
          </a>

          {/* Desktop: Copy to Clipboard */}
          <button
            onClick={handleCopy}
            className="hidden w-full cursor-pointer items-center space-x-3 rounded-lg border border-gray-200 bg-white p-5 text-xl shadow-lg transition-shadow duration-300 hover:text-gray-700 hover:shadow-xl lg:flex"
            aria-label="Copy phone number to clipboard"
          >
            <PhoneOutlined className="text-2xl" aria-hidden="true" />
            <span>(707) 355-0455</span>
            {copied ? (
              <>
                <span className="text-green-600">Copied!</span>
                <CheckOutlined className="text-green-600" aria-hidden="true" />
              </>
            ) : (
              <CopyOutlined className="text-2xl" aria-hidden="true" />
            )}
          </button>

          <a
            href="mailto:sereneandcleanlife@gmail.com"
            className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-white p-5 text-xl shadow-lg transition-shadow duration-300 hover:text-gray-700 hover:shadow-xl"
            aria-label="Email us at sereneandcleanlife@gmail.com"
          >
            <MailOutlined className="text-2xl" aria-hidden="true" />
            <span>sereneandcleanlife@gmail.com</span>
          </a>
          <a
            href="https://www.facebook.com/sereneandcleanlife"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-white p-5 text-xl shadow-lg transition-shadow duration-300 hover:text-gray-700 hover:shadow-xl"
            aria-label="Visit our Facebook page (opens in new tab)"
          >
            <FacebookOutlined className="text-2xl" aria-hidden="true" />
            <span>Follow us on Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
