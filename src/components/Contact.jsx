import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <div className="pb-20 border-t border-stone-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects,
            or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Address */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center p-6 bg-stone-900/50 rounded-xl hover:bg-stone-900/70 transition-all duration-300"
          >
            <div className="mb-4 p-3 bg-stone-800 rounded-full">
              <MdLocationOn className="text-2xl text-stone-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-stone-200">
              Location
            </h3>
            <p className="text-stone-400 leading-relaxed">{CONTACT.address}</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-stone-900/50 rounded-xl hover:bg-stone-900/70 transition-all duration-300"
          >
            <div className="mb-4 p-3 bg-stone-800 rounded-full">
              <MdEmail className="text-2xl text-stone-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-stone-200">Email</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-stone-400 hover:text-blue-400 transition-colors duration-300 underline underline-offset-4"
            >
              {CONTACT.email}
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center p-6 bg-stone-900/50 rounded-xl hover:bg-stone-900/70 transition-all duration-300"
          >
            <div className="mb-4 p-3 bg-stone-800 rounded-full">
              <MdPhone className="text-2xl text-stone-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-stone-200">Phone</h3>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="text-stone-400 hover:text-green-400 transition-colors duration-300"
            >
              {CONTACT.phoneNo}
            </a>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-stone-400 mb-6">
            Ready to start a project together?
          </p>
          <a
            href={`mailto:${CONTACT.email}?subject=Project Inquiry`}
            className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-3 rounded-full font-semibold hover:bg-stone-200 transition-colors duration-300"
          >
            <MdEmail className="text-lg" />
            Send Message
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
