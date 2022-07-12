const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
const backLink =
    `<a href="../index.html" class="nav-link-img nav-expand-link-img">
      <img src="../img/Favicon-16b.png" alt="Logo Moscati" class="logo-nav-bar">
    </a>
    <li class="nav-item">
	      <a class="nav-link nav-back-link" href="javascript:;">
		        Regresar
	      </a>
    </li>`;

navExpand.forEach(item => {
  item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
  item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
  item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
});

const ham = document.getElementById('ham');
ham.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-toggled');
  document.body.classList.remove('nav-is-showed');
});

const containerFluid = document.getElementById('container-fluid');
containerFluid.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-showed');
  document.body.classList.remove('nav-is-toggled');
});

const siteFooter = document.getElementById('site-footer');
siteFooter.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-showed');
  document.body.classList.remove('nav-is-toggled');
});