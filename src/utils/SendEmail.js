import  nodemailer from "nodemailer";


export async function sendEmail(to,subject,html){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "tariqshreem11@gmail.com",
          pass: "ydze rlkm trpc epze",
        },
      });
    
      const info = await transporter.sendMail({
        from: '"Node 10 👻" <tariqshreem11@gmail.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
      });
}
