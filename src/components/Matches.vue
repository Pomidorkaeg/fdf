<template>
  <div class="matches">
    <h2>Матчи</h2>
    <div class="matches-filter">
      <button 
        v-for="filter in filters" 
        :key="filter.id"
        :class="['filter-btn', { active: currentFilter === filter.id }]"
        @click="currentFilter = filter.id"
      >
        {{ filter.name }}
      </button>
    </div>
    
    <div class="matches-list">
      <div v-for="match in filteredMatches" :key="match.id" class="match-card">
        <div class="match-date">{{ match.date }}</div>
        <div class="match-teams">
          <div class="team">
            <img :src="match.team1.logo" :alt="match.team1.name" class="team-logo" />
            <span>{{ match.team1.name }}</span>
          </div>
          <div class="match-score">
            <span>{{ match.score.team1 }}</span>
            <span class="score-divider">:</span>
            <span>{{ match.score.team2 }}</span>
          </div>
          <div class="team">
            <img :src="match.team2.logo" :alt="match.team2.name" class="team-logo" />
            <span>{{ match.team2.name }}</span>
          </div>
        </div>
        <div class="match-info">
          <span>{{ match.stadium }}</span>
          <span>{{ match.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentFilter = ref('all')

const filters = [
  { id: 'all', name: 'Все матчи' },
  { id: 'upcoming', name: 'Предстоящие' },
  { id: 'completed', name: 'Завершенные' }
]

const matches = ref([
  {
    id: 1,
    date: '27.03.2024',
    time: '19:00',
    team1: {
      name: 'Команда 1',
      logo: '/team1-logo.png'
    },
    team2: {
      name: 'Команда 2',
      logo: '/team2-logo.png'
    },
    score: {
      team1: 2,
      team2: 1
    },
    stadium: 'Стадион 1',
    status: 'completed'
  },
  // Добавьте больше матчей здесь
])

const filteredMatches = computed(() => {
  if (currentFilter.value === 'all') return matches.value
  return matches.value.filter(match => match.status === currentFilter.value)
})
</script>

<style scoped>
.matches {
  padding: 20px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.matches-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: #f5f5f5;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: #2a5298;
  color: white;
}

.matches-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.match-card {
  background: white;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.match-date {
  color: #666;
  margin-bottom: 10px;
}

.match-teams {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.team {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.team-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.match-score {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 20px;
}

.score-divider {
  color: #666;
}

.match-info {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .matches {
    padding: 10px;
  }

  .team-logo {
    width: 24px;
    height: 24px;
  }

  .match-score {
    font-size: 1.2rem;
    padding: 0 10px;
  }
}
</style> 