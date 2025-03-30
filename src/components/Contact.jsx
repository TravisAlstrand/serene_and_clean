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
      className="h-[calc(100vh-4rem)] w-full scroll-mt-20 bg-yellow-500"
      aria-label="Contact Information"
    >
      <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4">
        <h2 className="mb-12 text-3xl font-semibold">Contact Us</h2>
        <div className="flex flex-col items-center space-y-8">
          {/* Mobile: Tel Link */}
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-3 text-xl hover:text-gray-700 lg:hidden"
            aria-label="Call us at (123) 456-7890"
          >
            <PhoneOutlined className="text-2xl" aria-hidden="true" />
            <span>(123) 456-7890</span>
          </a>

          {/* Desktop: Copy to Clipboard */}
          <button
            onClick={handleCopy}
            className="hidden cursor-pointer items-center space-x-3 text-xl hover:text-gray-700 lg:flex"
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
            className="flex items-center space-x-3 text-xl hover:text-gray-700"
            aria-label="Email us at sereneandcleanlife@gmail.com"
          >
            <MailOutlined className="text-2xl" aria-hidden="true" />
            <span>sereneandcleanlife@gmail.com</span>
          </a>
          <a
            href="https://www.facebook.com/sereneandcleanlife"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-xl hover:text-gray-700"
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
