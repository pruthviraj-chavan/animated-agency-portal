import { useState } from 'react';

const MeetingBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with your EmailJS credentials
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_8pd6z0e", // Your EmailJS Service ID
          template_id: "template_4mkxe1g", // Your EmailJS Template ID
          user_id: "3FhUp3n8UpSEe_rpT", // Your EmailJS Public Key
          template_params: {
            to_email: "team.divektor@gmail.com",
            from_name: formData.name,
            from_email: formData.email,
            meeting_date: formData.date,
            meeting_time: formData.time,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", date: "", time: "", message: "" });
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (err) {
      setError("An error occurred while sending the email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient animate-scale-in">
          Schedule a Meeting
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Book a discovery call with our team to discuss your project requirements.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-lg">
          {isSuccess && (
            <div className="mb-6 text-green-500 text-center">
              Your meeting request has been sent successfully!
            </div>
          )}
          {error && (
            <div className="mb-6 text-red-500 text-center">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-agency-purple/50 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-agency-blue focus:border-agency-blue"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-agency-purple/50 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-agency-blue focus:border-agency-blue"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-300">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-agency-purple/50 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-agency-blue focus:border-agency-blue"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-300">
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-agency-purple/50 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-agency-blue focus:border-agency-blue"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Additional Information (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-agency-purple/50 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-agency-blue focus:border-agency-blue"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-agency-purple to-agency-blue text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition duration-300"
          >
            {isLoading ? "Submitting..." : "Book Meeting"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MeetingBookingForm;
