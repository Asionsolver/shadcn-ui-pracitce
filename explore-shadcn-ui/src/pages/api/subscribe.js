// src/pages/api/subscribe.js
export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    // Simulate API delay
    setTimeout(() => {
      const { email } = req.body;
  
      // Simulate email validation
      if (!email.includes('@')) {
        return res.status(400).json({ 
          message: 'Invalid email address' 
        });
      }
  
      // Simulate existing email check
      if (email === 'test@exists.com') {
        return res.status(400).json({ 
          message: 'This email is already subscribed' 
        });
      }
  
      // Success response
      res.status(200).json({ 
        message: 'Subscription successful',
        subscriberId: Math.random().toString(36).substr(2, 9)
      });
    }, 1000); // 1 second delay to simulate network
  }