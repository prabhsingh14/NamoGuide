const guideBookingTemplate = (touristName, bookingDate, numberOfPeople) => {
    // Format the booking date
    const formattedDate = new Date(bookingDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>New Booking Confirmation</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
    
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
    
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
    
        .message {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
    
        .body {
          font-size: 16px;
          margin-bottom: 20px;
          text-align: left;
        }
    
        .booking-details {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          text-align: left;
        }
    
        .booking-details ul {
          list-style-type: none;
          padding-left: 0;
        }
    
        .booking-details li {
          margin-bottom: 10px;
        }
    
        .cta {
          display: inline-block;
          padding: 10px 20px;
          background-color: #FFD60A;
          color: #000000;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          margin-top: 20px;
        }
    
        .support {
          font-size: 14px;
          color: #999999;
          margin-top: 20px;
        }
    
        .highlight {
          font-weight: bold;
        }
        
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
          text-align: center;
          color: #777;
          font-size: 14px;
        }
      </style>
    
    </head>
    
    <body>
      <div class="container">
        <a href="https://namoguide.vercel.app"><img class="logo"
            src="https://i.ibb.co/HVTTGwn/logo.png" alt="NAMOGUIDE Logo"></a>
        <div class="message">New Booking Confirmed!</div>
        <div class="body">
          <p>Dear Guide,</p>
          <p>Good news! You have a new booking through NamoGuide.</p>
          
          <div class="booking-details">
            <h3 style="margin-top: 0;">Booking Details:</h3>
            <ul>
              <li><span class="highlight">Tourist Name:</span> ${touristName}</li>
              <li><span class="highlight">Date:</span> ${formattedDate}</li>
              <li><span class="highlight">Group Size:</span> ${numberOfPeople} people</li>
            </ul>
          </div>
          
          <p>Please log in to your NamoGuide account to view complete booking details and contact information for the tourist.</p>
          <p>If you have any questions or need to make changes to this booking, please contact us as soon as possible.</p>
          <p>Thank you for being a valued guide on NamoGuide!</p>
          
          <a href="https://namoguide.vercel.app/guide-dashboard" class="cta">View Booking Details</a>
        </div>
        <div class="support">If you have any questions or need assistance, please feel free to reach out to us at 
            href="mailto:prabhsingh1407@gmail.com">prabhsingh1407@gmail.com</a>. We are here to help!</div>
            
        <div class="footer">
          <p>© ${new Date().getFullYear()} NamoGuide. All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    </body>
    
    </html>`;
  };
  
  export default guideBookingTemplate;