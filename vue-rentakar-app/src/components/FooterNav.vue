<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="https://github.com/RDelory74/VueRentakar" target="_blank" rel="noopener noreferrer" class="footer-link">
          <i class="github-icon">
            <!-- Icon SVG inline -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </i>
          GitHub
        </a>
        <router-link to="/cgv" class="footer-link">CGV</router-link>
      </div>
      <div class="copyright">
        © {{ new Date().getFullYear() }} RentAKar. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  padding: 1.5rem 0;
  color: white;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.footer-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.footer-link:hover {
  background-color: rgba(66, 185, 131, 0.1);
}

.github-icon {
  display: flex;
  align-items: center;
}

.copyright {
  color: #a8a8a8;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>