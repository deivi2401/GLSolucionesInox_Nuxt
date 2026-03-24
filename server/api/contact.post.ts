import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    // Leer los datos del formulario (FormData)
    const formData = await readMultipartFormData(event)

    if (!formData) {
           throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'No form data received'
      })
    }

    let name = ''
    let email = ''
    let details = ''
    const attachments = []

    for (const field of formData) {
      if (field.name === 'name') name = field.data.toString()
      else if (field.name === 'email') email = field.data.toString()
      else if (field.name === 'details') details = field.data.toString()
      else if (field.name === 'files' && field.filename) {
        attachments.push({
          filename: field.filename,
          content: field.data,
          contentType: field.type
        })
      }
    }

    if (!name || !email || !details) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Missing required fields'
      })
    }

    // Configuración del transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // O el servicio que utilices
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })

    const mailOptions = {
      from: `"GL Soluciones Inox Web" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || 'glsolucionesinox@gmail.com',
      replyTo: email,
      subject: `Nueva cotización de proyecto web: ${name}`,
      text: `Has recibido una nueva solicitud de cotización desde la página web.\n\n` +
            `Nombre: ${name}\n` +
            `Correo: ${email}\n\n` +
            `Detalles del proyecto:\n${details}\n\n` +
            `Archivos adjuntos: ${attachments.length > 0 ? attachments.length : 'Ninguno'}`,
      html: `
        <h2>Nueva Solicitud de Cotización</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <h3>Detalles del proyecto:</h3>
        <p style="white-space: pre-wrap;">${details}</p>
        <br/>
        <p><em>Enviado desde el formulario de contacto de la web.</em></p>
      `,
      attachments
    }

    const info = await transporter.sendMail(mailOptions)

    return { success: true, messageId: info.messageId }

  } catch (error) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to send email. Please check server configuration.'
    })
  }
})
