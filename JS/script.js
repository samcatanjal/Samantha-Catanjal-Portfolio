document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_rt70kvx', 'template_vxv5i9c', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (error) => {
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    });
});