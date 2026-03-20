const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll('.interactive-surface').forEach((item) => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    item.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(94,163,152,.22), rgba(255,255,255,.76) 42%, rgba(255,255,255,.64) 100%)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.background = '';
  });
});

// efeito do mouse sobre o balão da primeira foto da xiomara, que tem a classe "floating-tag"
const floating = document.querySelector(".floating-tag");

document.addEventListener("mousemove", (e) => {

const x = (window.innerWidth / 2 - e.clientX) / 40;
const y = (window.innerHeight / 2 - e.clientY) / 40;

floating.style.transform =
`translate(${x}px, ${y}px)`;

});


// efeito de contagem animada para os números na seção "hero-stats"
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const target = +counter.getAttribute('data-target');
    const speed = 200;

    const updateCount = () => {

        const count = +counter.innerText;
        const increment = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }

    };

    updateCount();

});

const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
});

// limpar botão
const clearButton = document.getElementById("clearFields");
const fields = document.querySelectorAll(".field");

clearButton.addEventListener("click", () => {
  fields.forEach(field => {
    field.value = "";
  });
});