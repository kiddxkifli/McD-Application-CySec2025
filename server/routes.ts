import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully", 
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Download CV endpoint
  app.get("/api/download-cv", async (req, res) => {
    const cvContent = `MUHAMMAD KAMAL HAJI KIFLI
Digital Marketing Specialist
📧 kiddkifli@gmail.com  📱 +6737447226  📍 Brunei Darussalam

════════════════════════════════════════════════════════════════════════════════════

SUMMARY                                                                    STRENGTHS

I am a highly motivated and adaptable professional with robust marketing   🎯 Analytical Thinker
skills and diverse experience in digital marketing, brand visibility,        Strong analytical skills for marketing
and content creation. I aim to leverage my strong marketing skills,          data interpretation.
visual communication expertise, and proactive approach to make a
significant contribution wherever I plant foot into.                      ⏱️ Deadline Oriented
                                                                             Proven ability to work under
                                                                             pressure and meet tight deadlines.

EXPERIENCE                                                                 💡 Creative Thinker
                                                                             Creative approach to problem-
Administrative Secretary (FAC/212 - Finance)                                solving and content creation.
Brunei Shell Petroleum Co. Sdn. Bhd.
• Played a key role in organizing and maintaining financial records,
  ensuring smooth document retrieval and compliance.
• Improved workflow efficiency by introducing a structured filing system.

Digital Marketing Analyst                                                 KEY ACHIEVEMENTS
BUE Enterprise
• Integrated AI tools into digital marketing strategies, significantly     🤖 AI Integration in Marketing
  improving workflow efficiency.                                             Successfully integrated AI tools into
• Implemented data-driven decision making to enhance campaign                marketing strategies that improved
  performance.                                                               workflow efficiency by over 30%.

Visual Marketing Assistant                                                 📈 Successful Marketing Campaign
The Kugelblitz                                                              Developed a comprehensive
• Created compelling visual content that effectively conveyed brand          marketing campaign that increased
  identity.                                                                  brand engagement by 25%.
• Enhanced communication through strategic visual campaigns.

Marketing & Design Administrator
BTHC Moshware
• Developed impactful marketing materials that enhanced brand visibility.
• Collaborated with cross-functional teams to boost customer engagement.

IT Support Analyst
CIC Environmental Services Sdn Bhd
• Provided timely technical support, ensuring minimal disruption to
  daily operations.
• Assisted in transitioning office systems to a cloud-based platform
  for better accessibility and security.

Logistic Operation Supervisor
Brunei LNG Sdn Bhd
• Monitored and maintained plant operations with strict adherence to
  safety protocols.
• Assisted in streamlining plant procedures, leading to more efficient
  workflows.

Hoisting Equipment Rigger
Megalift Sdn Bhd
• Maintained high safety standards in equipment handling, preventing
  operational hazards.

════════════════════════════════════════════════════════════════════════════════════

EDUCATION

Level 5 Diploma in Network and Security                                     Brunei
Politeknik Brunei

7 O Levels in Pure Science                                                  Brunei
SMPW KB

════════════════════════════════════════════════════════════════════════════════════

Downloaded from: Professional Portfolio Website
Contact: kiddkifli@gmail.com | Through website contact form`;

    res.setHeader('Content-Disposition', 'attachment; filename="Muhammad-Kamal-Hj-Kifli-CV.txt"');
    res.setHeader('Content-Type', 'text/plain');
    res.send(cvContent);
  });

  const httpServer = createServer(app);
  return httpServer;
}
