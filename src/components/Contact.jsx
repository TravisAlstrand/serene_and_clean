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
      className="border-sage-light/20 bg-warm-white w-full scroll-mt-20 border-b"
      aria-label="Contact Information"
    >
      <div className="container mx-auto flex h-full flex-col items-center px-4 py-20 md:py-24">
        <h2 className="text-forest mb-16 text-center text-7xl font-bold md:text-8xl">
          Contact Us
        </h2>
        <p className="text-text-secondary mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed md:text-xl">
          Have questions or want to schedule a cleaning? Reach out to us using
          any of the methods below!
        </p>
        <div className="w-full max-w-xl space-y-6">
          {/* Mobile: Tel Link */}
          <a
            href="tel:+7073550455"
            className="border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:bg-cream-dark hover:shadow-natural flex items-center space-x-3 rounded-lg border-2 p-6 text-xl transition-all duration-300 lg:hidden"
            aria-label="Call us at (707) 355-0455"
          >
            <PhoneOutlined
              className="text-forest text-2xl"
              aria-hidden="true"
            />
            <span className="text-forest font-medium">(707) 355-0455</span>
          </a>

          {/* Desktop: Copy to Clipboard */}
          <button
            onClick={handleCopy}
            className="border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:bg-cream-dark hover:shadow-natural hidden w-full cursor-pointer items-center justify-between rounded-lg border-2 p-6 text-xl transition-all duration-300 lg:flex"
            aria-label="Copy phone number to clipboard"
          >
            <div className="flex items-center space-x-3">
              <PhoneOutlined
                className="text-forest text-2xl"
                aria-hidden="true"
              />
              <span className="text-forest font-medium">(707) 355-0455</span>
            </div>
            {copied ? (
              <div className="flex items-center space-x-2">
                <span className="text-moss font-semibold">Copied!</span>
                <CheckOutlined className="text-moss" aria-hidden="true" />
              </div>
            ) : (
              <CopyOutlined
                className="text-sage hover:text-moss text-xl transition-colors"
                aria-hidden="true"
              />
            )}
          </button>

          <a
            href="mailto:sereneandcleanlife@gmail.com"
            className="border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:bg-cream-dark hover:shadow-natural flex items-center space-x-3 rounded-lg border-2 p-6 text-xl transition-all duration-300"
            aria-label="Email us at sereneandcleanlife@gmail.com"
          >
            <MailOutlined className="text-forest text-2xl" aria-hidden="true" />
            <span className="text-forest font-medium break-all">
              sereneandcleanlife@gmail.com
            </span>
          </a>
          <a
            href="https://www.facebook.com/sereneandcleanlife"
            target="_blank"
            rel="noopener noreferrer"
            className="border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:bg-cream-dark hover:shadow-natural flex items-center space-x-3 rounded-lg border-2 p-6 text-xl transition-all duration-300"
            aria-label="Visit our Facebook page (opens in new tab)"
          >
            <FacebookOutlined
              className="text-forest text-2xl"
              aria-hidden="true"
            />
            <span className="text-forest font-medium">
              Follow us on Facebook
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
