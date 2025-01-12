import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_igq2r6s";
const TEMPLATE_ID = "template_gp7e4c4";
const PUBLIC_KEY = "lkvCVeyXunFFW4r4d";

const ContactForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        // alert("SUCCESS");
      },
      (error) => {
        console.log(error.text);
        // alert("FAILED");
      }
    );
    e.target.reset();
  }

  return (
    <div className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Get in Touch</h1>
      </div>
      <form>
        <div className={styles.input}>
          <label>Full Name</label>
          <input type="text" name="from_name" />
        </div>

        <div className={styles.input}>
          <label>Email</label>
          <input type="email" name="from_email" />
        </div>

        <div className={styles.input}>
          <p>Message</p>
          <textarea name="message" />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
