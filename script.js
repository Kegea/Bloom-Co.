<<<<<<< HEAD
const d = document.getElementById('date');
  if (d) { d.min = new Date().toISOString().split('T')[0]; d.value = d.min; }

  function sendWA() {
=======
document.addEventListener('DOMContentLoaded', () => {

  // Set minimum date for delivery input
  const d = document.getElementById('date');
  if (d) { d.min = new Date().toISOString().split('T')[0]; d.value = d.min; }

  // Order form submission via n8n webhook
  window.sendWA = function() {
>>>>>>> 9af667b (Initial commit: Bloom & Co. Manila landing page)
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const delivery = document.getElementById('delivery').checked;
    const notes = document.getElementById('notes').value.trim();
    const errDiv = document.getElementById('form-error');
<<<<<<< HEAD
    document.querySelectorAll('.fg input, .fg select').forEach(el => el.classList.remove('error'));
    
=======

    document.querySelectorAll('.fg input, .fg select').forEach(el => el.classList.remove('error'));

>>>>>>> 9af667b (Initial commit: Bloom & Co. Manila landing page)
    if (!name || !phone || !service) {
      if (!name) document.getElementById('name').classList.add('error');
      if (!phone) document.getElementById('phone').classList.add('error');
      if (!service) document.getElementById('service').classList.add('error');
<<<<<<< HEAD
      
=======
>>>>>>> 9af667b (Initial commit: Bloom & Co. Manila landing page)
      errDiv.textContent = 'Paki-fill in ang mga highlighted na detalye 🌸';
      errDiv.classList.add('show');
      return;
    }
    errDiv.classList.remove('show');
<<<<<<< HEAD
=======

>>>>>>> 9af667b (Initial commit: Bloom & Co. Manila landing page)
    let msg = `🌸 *Bloom & Co. Manila — Bagong Order*\n\n`;
    msg += `👤 *Pangalan:* ${name}\n📱 *WhatsApp:* ${phone}\n💐 *Arrangement:* ${service}\n`;
    if (date) msg += `📅 *Petsa:* ${date}\n`;
    if (delivery) msg += `🚚 *Same-Day Delivery:* Oo (+₱150)\n`;
    if (notes) msg += `📝 *Notes:* ${notes}\n`;
<<<<<<< HEAD
=======

>>>>>>> 9af667b (Initial commit: Bloom & Co. Manila landing page)
    const payload = { name, phone, service, date, delivery, notes, formattedMessage: msg };
    const btn = document.querySelector('.wa-btn');
    const originalHtml = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    fetch('https://mindgeek.app.n8n.cloud/webhook-test/Baberbotwhatsapp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      btn.innerHTML = 'Order Sent! 🌸';
      document.querySelectorAll('.fg input, .fg select, .fg textarea').forEach(el => el.value = '');
      document.getElementById('delivery').checked = false;
<<<<<<< HEAD
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
      }, 3000);
    })
    .catch(error => {
=======
      setTimeout(() => { btn.innerHTML = originalHtml; btn.disabled = false; }, 3000);
    })
    .catch(() => {
>>>>>>> 9af667b (Initial commit: Bloom & Co. Manila landing page)
      errDiv.textContent = 'Failed to send order. Please try again.';
      errDiv.classList.add('show');
      btn.innerHTML = originalHtml;
      btn.disabled = false;
    });
<<<<<<< HEAD
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
=======
  };

  // Reveal-on-scroll — fixed for production/Vercel deployments
  const revealEls = document.querySelectorAll('.reveal');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => obs.observe(el));

  // Immediately reveal anything already visible in the viewport on page load
  requestAnimationFrame(() => {
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('in');
        obs.unobserve(el);
      }
    });
  });

});
>>>>>>> 9af667b (Initial commit: Bloom & Co. Manila landing page)
