import { Request, Response } from "express";
import ContactModel from "../models/ContactModel";
import sendEmail from "../utils/sendMail"; // Import the email utility

/**
 * @desc    Submit a new contact message and notify admin
 * @route   POST /api/contact
 * @access  Public
 */
export const createContactMessage = async (req: Request, res: Response) => {
  const { name, email, phone, companyName, message } = req.body;

  // Basic validation
  if (!name || !email || !companyName || !message) {
    return res.status(400).json({ message: "Please provide all required fields." });
  }

  try {
    // 1. Save the contact message to the database
    const newContact = await ContactModel.create({
      name,
      email,
      phone,
      companyName,
      message,
    });

    // // 2. Send an email notification to the admin
    // const adminEmail = process.env.ADMIN_EMAIL;
    // if (adminEmail) {
    //   const emailSubject = `New Contact Form Submission from ${name}`;
    //   const emailHtml = `
    //     <h1>New Contact Message</h1>
    //     <p>You have received a new message from your website's contact form.</p>
    //     <h2>Details:</h2>
    //     <ul>
    //       <li><strong>Name:</strong> ${name}</li>
    //       <li><strong>Company:</strong> ${companyName}</li>
    //       <li><strong>Email:</strong> ${email}</li>
    //       <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
    //     </ul>
    //     <h2>Message:</h2>
    //     <p>${message}</p>
    //   `;

    //   await sendEmail({
    //     to: adminEmail,
    //     subject: emailSubject,
    //     html: emailHtml,
    //   });
    // } else {
    //     console.warn("ADMIN_EMAIL not set. Skipping email notification.");
    // }

    res.status(201).json({
      message: "Your message has been received! We will get back to you shortly.",
      data: newContact,
    });
  } catch (error: any) {
    // Catches both database and email errors
    console.error("Error in createContactMessage:", error);
    res.status(500).json({ message: "An error occurred while processing your request.", error: error.message });
  }
};

// ... (getAllContactMessages, getContactMessageById, deleteContactMessage functions remain the same)

/**
 * @desc    Get all contact messages
 * @route   GET /api/contact
 * @access  Private/Admin
 */
export const getAllContactMessages = async (req: Request, res: Response) => {
  // ... (no changes here)
  try {
    const contacts = await ContactModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error: any) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


/**
 * @desc    Get a single contact message by ID
 * @route   GET /api/contact/:id
 * @access  Private/Admin
 */
export const getContactMessageById = async (req: Request, res: Response) => {
  // ... (no changes here)
  try {
    const contact = await ContactModel.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact message not found." });
    }
    res.status(200).json(contact);
  } catch (error: any) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


/**
 * @desc    Delete a contact message
 * @route   DELETE /api/contact/:id
 * @access  Private/Admin
 */
export const deleteContactMessage = async (req: Request, res: Response) => {
  // ... (no changes here)
  try {
    const contact = await ContactModel.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact message not found." });
    }
    res.status(200).json({ message: "Contact message deleted successfully." });
  } catch (error: any) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};