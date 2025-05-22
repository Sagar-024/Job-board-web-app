import { motion } from "framer-motion";

const companyNames = [
  "Google", "Amazon", "Microsoft", "Netflix", "Tesla",
  "Apple", "Facebook", "Samsung", "Intel", "IBM",
  "Adobe", "Salesforce", "Spotify", "PayPal", "Uber",
  "Twitter", "Snapchat", "Oracle", "Nvidia", "LinkedIn"
];

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <motion.div
        className="flex space-x-10 w-full text-3xl font-semibold font-mono text-gray-900"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {companyNames.map((company, index) => (
          <span key={index}>{company}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
