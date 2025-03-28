<template>
  <div class="home-container">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Логотип" class="logo" />
    </div>
    
    <div class="buttons-container">
      <router-link to="/tournament" class="main-button">
        <span class="button-icon">🏆</span>
        Турнирная таблица
      </router-link>
      
      <router-link to="/matches" class="main-button">
        <span class="button-icon">⚽</span>
        Матчи
      </router-link>
    </div>
  </div>
</template>

<script setup>
const goToTournamentTable = () => {
  // Здесь будет навигация к турнирной таблице
  console.log('Переход к турнирной таблице')
}

const goToMatches = () => {
  // Здесь будет навигация к матчам
  console.log('Переход к матчам')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 20px;
}

.logo-container {
  margin-bottom: 50px;
}

.logo {
  width: 200px;
  height: auto;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
}

.main-button {
  padding: 20px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
}

.main-button:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.2);
}

.button-icon {
  font-size: 1.5rem;
}

@media (max-width: 480px) {
  .buttons-container {
    padding: 0 20px;
  }
  
  .main-button {
    font-size: 1rem;
    padding: 15px;
  }
}
</style> 