<template>
  <div class="tournament-table">
    <h2>Турнирная таблица</h2>
    <table>
      <thead>
        <tr>
          <th>Позиция</th>
          <th>Команда</th>
          <th>И</th>
          <th>В</th>
          <th>Н</th>
          <th>П</th>
          <th>ГЗ</th>
          <th>ГП</th>
          <th>О</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in teams" :key="team.id">
          <td>{{ index + 1 }}</td>
          <td class="team-name">
            <img :src="team.logo" :alt="team.name" class="team-logo" />
            {{ team.name }}
          </td>
          <td>{{ team.games }}</td>
          <td>{{ team.wins }}</td>
          <td>{{ team.draws }}</td>
          <td>{{ team.losses }}</td>
          <td>{{ team.goalsFor }}</td>
          <td>{{ team.goalsAgainst }}</td>
          <td class="points">{{ team.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teams = ref([
  {
    id: 1,
    name: 'Команда 1',
    logo: '/team1-logo.png',
    games: 10,
    wins: 7,
    draws: 2,
    losses: 1,
    goalsFor: 22,
    goalsAgainst: 10,
    points: 23
  },
  // Добавьте больше команд здесь
])
</script>

<style scoped>
.tournament-table {
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

th {
  background: #f5f5f5;
  font-weight: bold;
  color: #666;
}

.team-name {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
}

.team-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.points {
  font-weight: bold;
  color: #2a5298;
}

tr:hover {
  background: #f9f9f9;
}

@media (max-width: 768px) {
  .tournament-table {
    padding: 10px;
  }

  th, td {
    padding: 8px;
    font-size: 0.9rem;
  }

  .team-logo {
    width: 20px;
    height: 20px;
  }
}
</style> 