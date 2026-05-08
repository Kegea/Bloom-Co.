const d = document.getElementById('date');
  if (d) { d.min = new Date().toISOString().split('T')[0]; d.value = d.min; }

  function sendWA() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const delivery = document.getElementById('delivery').checked;
    const notes = document.getElementById('notes').value.trim();
    const errDiv = document.getElementById('form-error');
    document.querySelectorAll('.fg input, .fg select').forEach(el => el.classList.remove('error'));
    
    if (!name || !phone || !service) {
      if (!name) document.getElementById('name').classList.add('error');
      if (!phone) document.getElementById('phone').classList.add('error');
      if (!service) document.getElementById('service').classList.add('error');
      
      errDiv.textContent = 'Paki-fill in ang mga highlighted na detalye 🌸';
      errDiv.classList.add('show');
      return;
    }
    errDiv.classList.remove('show');
    let msg = `🌸 *Bloom & Co. Manila — Bagong Order*\n\n`;
    msg += `👤 *Pangalan:* ${name}\n📱 *WhatsApp:* ${phone}\n💐 *Arrangement:* ${service}\n`;
    if (date) msg += `📅 *Petsa:* ${date}\n`;
    if (delivery) msg += `🚚 *Same-Day Delivery:* Oo (+₱150)\n`;
    if (notes) msg += `📝 *Notes:* ${notes}\n`;
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
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
      }, 3000);
    })
    .catch(error => {
      errDiv.textContent = 'Failed to send order. Please try again.';
      errDiv.classList.add('show');
      btn.innerHTML = originalHtml;
      btn.disabled = false;
    });
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
