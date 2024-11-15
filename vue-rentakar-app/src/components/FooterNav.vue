<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <img src="@/assets/RTKlogo.png" alt="Logo" class="logo" />
        <p>Votre partenaire pour des solutions fiables.</p>
      </div>


      <div class="footer-links">
        <h3>Liens Utiles</h3>
        <ul>
          <li><a href="/about">À propos</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-social">
        <h3>Suivez-nous</h3>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>


      <div class="footer-contact">
        <h3>Contactez-nous</h3>
        <p>+33 1 23 45 67 89</p>
        <p>contact@rentakar.co</p>
        <p>145 rue de la route, Router, France</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Rentakar. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterNav",
};
</script>

<style scoped>
.footer {
  background-color: #222222;
  color: #ffffff;
  padding: 5px 0;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-logo {
  max-width: 200px;
}

.footer-logo .logo {
  width: 100px;
  margin-bottom: 10px;
}

.footer-links,
.footer-social,
.footer-contact {
  flex: 1;
  min-width: 200px;
  margin-top: 10px;
}

.footer-links h3,
.footer-social h3,
.footer-contact h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 5px;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-social .social-icons {
  display: flex;
  gap: 10px;
}

.footer-social .social-icons a {
  color: #ffffff;
  font-size: 1.5rem;
}

.footer-contact p {
  margin: 5px 0;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444444;
  font-size: 0.8rem;
}
</style>
