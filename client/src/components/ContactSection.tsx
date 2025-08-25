import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema)
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    
    // For GitHub Pages deployment, use mailto instead of backend
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject || 'General Inquiry'}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const mailtoUrl = `mailto:kiddkifli@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "Email Client Opening",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const subjectValue = watch("subject");

  return (
    <section id="contact" className="py-20 bg-dark-bg/50" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold text-matrix-green mb-4">[CONTACT.SYS]</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-matrix-green to-cyber-cyan mx-auto"></div>
        </div>
        
        <div 
          ref={elementRef}
          className={`max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info */}
          <div className="terminal-window rounded-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
              <span className="text-sm text-gray-400 font-mono ml-4">contact_info.sh</span>
            </div>
            
            <h3 className="text-2xl font-cyber font-bold text-matrix-green mb-6">Initialize Connection</h3>
            
            <div className="space-y-4 font-mono text-sm" data-testid="contact-info">
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-cyber-cyan w-5"></i>
                <span className="text-white">Brunei Darussalam</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-cyber-cyan w-5"></i>
                <span className="text-white">kiddkifli@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fab fa-whatsapp text-cyber-cyan w-5"></i>
                <span className="text-white">+6737447226 //whatsapp only</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-shield-alt text-cyber-cyan w-5"></i>
                <span className="text-white">Security Clearance: Available</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-darker-bg rounded border border-matrix-green/30">
              <p className="text-matrix-green font-mono text-xs mb-2">$ system_status</p>
              <p className="text-white font-mono text-xs">► Available for cybersecurity roles</p>
              <p className="text-white font-mono text-xs">► Open to consultation projects</p>
              <p className="text-white font-mono text-xs">► Response time: &lt; 24 hours</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="terminal-window rounded-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
              <span className="text-sm text-gray-400 font-mono ml-4">secure_message.form</span>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-matrix-green font-mono text-sm mb-2">Name:</label>
                <Input
                  {...register("name")}
                  className="w-full bg-terminal-bg border border-matrix-green/50 rounded px-4 py-3 text-white font-mono focus:border-matrix-green focus:outline-none"
                  placeholder="Enter your name..."
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-red-400 font-mono text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-matrix-green font-mono text-sm mb-2">Email:</label>
                <Input
                  {...register("email")}
                  type="email"
                  className="w-full bg-terminal-bg border border-matrix-green/50 rounded px-4 py-3 text-white font-mono focus:border-matrix-green focus:outline-none"
                  placeholder="your.email@domain.com"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-red-400 font-mono text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-matrix-green font-mono text-sm mb-2">Subject:</label>
                <Select onValueChange={(value) => setValue("subject", value)} data-testid="select-subject">
                  <SelectTrigger className="w-full bg-terminal-bg border border-matrix-green/50 rounded px-4 py-3 text-white font-mono focus:border-matrix-green focus:outline-none">
                    <SelectValue placeholder="Select inquiry type..." />
                  </SelectTrigger>
                  <SelectContent className="bg-terminal-bg border border-matrix-green/50 text-white">
                    <SelectItem value="security">Security Consultation</SelectItem>
                    <SelectItem value="forensics">Digital Forensics</SelectItem>
                    <SelectItem value="employment">Employment Opportunity</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && (
                  <p className="text-red-400 font-mono text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-matrix-green font-mono text-sm mb-2">Message:</label>
                <Textarea
                  {...register("message")}
                  rows={5}
                  className="w-full bg-terminal-bg border border-matrix-green/50 rounded px-4 py-3 text-white font-mono focus:border-matrix-green focus:outline-none resize-none"
                  placeholder="Describe your security requirements or inquiry..."
                  data-testid="textarea-message"
                />
                {errors.message && (
                  <p className="text-red-400 font-mono text-xs mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit"
                className="w-full neon-button px-6 py-3 rounded-lg font-mono font-semibold disabled:opacity-50"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {isSubmitting ? "Opening Email Client..." : "Send Encrypted Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
