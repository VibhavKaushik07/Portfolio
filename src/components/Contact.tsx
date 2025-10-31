import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "emailjs-com";

// 1) zod schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validate with zod
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          formattedErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      // 2) send with EmailJS
      await emailjs.send(
        "service_re8mkir", // e.g. "service_rzcryx5"
        "template_dprskgi", // e.g. "template_1a2b3c"
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "bXy-gZ0sinufbJ0PH" // e.g. "yOURpUbLIcKEY_123"
      );

      // 3) on success
      toast({
        title: "Message sent! 🎉",
        description: "Heya! Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Hmm… couldn't send it",
        description:
          "Something went wrong while sending. You can also email me directly at vibhavkaushik200207@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="space-y-12">
      {/* heading */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Get In Touch</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Let's discuss how data can drive your business forward
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-card border border-border/50 rounded-xl p-8 card-hover">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            {/* message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                placeholder="Want to convert raw data into business insights?..."
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-lg glow-effect hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-card border border-border/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="mailto:vibhavkaushik200207@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">vibhavkaushik200207@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/vibhav-kaushik-37ab55249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-white">LinkedIn</p>
                  <p className="text-foreground font-medium">Profile</p>
                </div>
              </a>

              <a
                href="https://github.com/VibhavKaushik07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-white">GitHub</p>
                  <p className="text-foreground font-medium">Repository</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">Available for Opportunities</h3>
            <p className="text-muted-foreground">
              I'm currently open to new Data Analytics roles, Junior Data Scientists and Front End Developer.
              Let's connect and discuss how I can add value to your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
