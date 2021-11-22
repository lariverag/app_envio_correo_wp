require('dotenv').config()

const accountSID = process.env.TWILIO_ACOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const client = require('twilio')(accountSID, authToken)

// Enviar mensaje de texto
client.messages.create({
    body: 'Bienvenidos a la semana IV del ciclo final Mision TIC.',
    from: '+15673202247',
    to: '+573187080198'
}).then(message => console.log(`Mensaje enviado ${message.sid}`))
// Enviar mensaje a whatsApp
client.messages.create({
    body: 'Bienvenidos a la semana IV del ciclo final Mision TIC.',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+573187080198'
}).then(message => console.log(`Mensaje enviado ${message.sid}`))

const msg = {
    to: 'alfredh103@gmail.com',
    from: 'alfredh103@hotmail.com',
    subject: 'Prueba de SendGrid con NodeJs',
    text: 'Binevenidos a la semana IV del ciclo final Mision TIC',
    bbc: 'lariveragut@unadvirtual.edu.co',
    date: new Date()
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })