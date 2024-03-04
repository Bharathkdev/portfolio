// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
// import FormInput from "./FormInput";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_w8b9b1r",
//         "template_k1zhdl8",
//         {
//           from_name: form.name,
//           to_name: "Bharath",
//           from_email: form.email,
//           to_email: "contact.bharathdev@gmail.com",
//           message: form.message,
//         },
//         "WNSNElqGlyMB-dyFM"
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert(
//             "Thank you for your message. I will get back to you as soon as possible."
//           );

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);

//           console.log(error);

//           alert("Something went wrong. Please try again after some time.");
//         }
//       );
//   };

//   return (
//     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <FormInput
//             title="Your Name"
//             value={form.name}
//             type="text"
//             name="name"
//             placeholder="What's your name?"
//             handleChange={handleChange}
//             input
//           />
//           <FormInput
//             title="Your Email"
//             value={form.email}
//             type="email"
//             name="email"
//             placeholder="What's your email?"
//             handleChange={handleChange}
//             input
//           />
//           <FormInput
//             title="Your Message"
//             value={form.message}
//             name="message"
//             placeholder="What do you want to say?"
//             handleChange={handleChange}
//             textArea
//           />

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import FormInput from "./FormInput";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          "service_w8b9b1r",
          "template_k1zhdl8",
          {
            from_name: values.name,
            to_name: "Bharath",
            from_email: values.email,
            to_email: "contact.bharathdev@gmail.com",
            message: values.message,
          },
          "WNSNElqGlyMB-dyFM"
        )
        .then(
          () => {
            alert(
              "Thank you for your message. I will get back to you as soon as possible."
            );
            resetForm();
          },
          (error) => {
            console.log(error);
            alert("Something went wrong. Please try again after some time.");
          }
        )
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <FormInput
            title="Your Name"
            value={formik.values.name}
            type="text"
            name="name"
            placeholder="What's your name?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            input
          />
          <FormInput
            title="Your Email"
            value={formik.values.email}
            type="email"
            name="email"
            placeholder="What's your email?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            input
          />
          <FormInput
            title="Your Message"
            value={formik.values.message}
            name="message"
            placeholder="What do you want to say?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && formik.errors.message}
            textArea
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
