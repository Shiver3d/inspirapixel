<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useFetchUnsplash } from '../composables/useFetchUnsplash.js';

const emit = defineEmits(['search', 'close']);
const props = defineProps({
  isOpen: { type: Boolean, default: false },
  isMobileBottom: { type: Boolean, default: false },
});

const { fetchImages, loading } = useFetchUnsplash();
const searchInput = ref('');
const searchHistory = ref(JSON.parse(localStorage.getItem('searchHistory') || '[]'));

const handleSearch = async (query = searchInput.value) => {
  if (!query.trim()) return;

  // Adicionar ao histórico
  if (!searchHistory.value.includes(query)) {
    searchHistory.value.unshift(query);
    if (searchHistory.value.length > 5) searchHistory.value.pop();
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value));
  }

  searchInput.value = '';
  await fetchImages(query, 1, 12);
  emit('search', query);
};

const handleHistoryClick = (historyQuery) => {
  searchInput.value = historyQuery;
  handleSearch(historyQuery);
};

const handleClose = () => {
  searchInput.value = '';
  emit('close');
};

const clearHistory = () => {
  searchHistory.value = [];
  localStorage.removeItem('searchHistory');
};
</script>

<template>
  <!-- Barra de pesquisa no desktop -->
  <div v-if="!isMobileBottom" class="search-desktop">
    <div class="search-input-container">
      <Icon icon="material-symbols:search" width="20" height="20" class="search-icon" />
      <input
        v-model="searchInput"
        type="text"
        placeholder="Buscar imagens..."
        @keyup.enter="handleSearch"
        class="search-input"
      />
    </div>
  </div>

  <!-- Barra de pesquisa no mobile -->
  <transition name="slide-up" v-if="isMobileBottom">
    <div v-if="isOpen" class="search-modal-overlay" @click="handleClose">
      <div class="search-modal-content" @click.stop>
        <div class="search-modal-header">
          <button class="close-btn" @click="handleClose">
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
          <h2>Buscar Imagens</h2>
        </div>

        <div class="search-input-container-mobile">
          <Icon icon="material-symbols:search" width="20" height="20" class="search-icon" />
          <input
            v-model="searchInput"
            type="text"
            placeholder="Paisagem, natureza, cidade..."
            @keyup.enter="handleSearch"
            class="search-input"
            autofocus
          />
        </div>

        <!-- Loading -->
        <div v-if="loading" class="search-loading">
          Carregando...
        </div>

        <!-- Histórico de pesquisa -->
        <div v-else-if="searchHistory.length > 0" class="search-history">
          <div class="history-header">
            <span>Histórico</span>
            <button @click="clearHistory" class="clear-btn">Limpar</button>
          </div>
          <div class="history-list">
            <button
              v-for="(item, idx) in searchHistory"
              :key="idx"
              @click="handleHistoryClick(item)"
              class="history-item"
            >
              <Icon icon="material-symbols:history" width="18" height="18" />
              {{ item }}
            </button>
          </div>
        </div>

        <!-- Sugestões -->
        <div v-else class="search-suggestions">
          <p>Sugestões populares:</p>
          <div class="suggestions-grid">
            <button
              v-for="suggestion in ['Paisagem', 'Natureza', 'Cidade', 'Praia', 'Montanha', 'Floresta']"
              :key="suggestion"
              @click="handleSearch(suggestion)"
              class="suggestion-btn"
            >
              {{ suggestion }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.search-desktop {
  display: flex;
  align-items: center;
}

.search-input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  border-radius: 20px;
  max-width: 300px;
  transition: all 0.3s ease;

  &:hover,
  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(229, 77, 125, 0.1);
  }
}

.search-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: var(--color-text-primary);
  font-size: 0.9rem;
  min-width: 150px;

  &::placeholder {
    color: var(--color-text-tertiary);
  }
}

.search-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.search-modal-content {
  background: var(--color-bg-primary);
  border-radius: 20px 20px 0 0;
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

.search-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 12px;

  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-text-secondary);
    flex: 1;
  }
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: var(--color-text-primary);
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary);
  }
}

.search-input-container-mobile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: var(--color-bg-secondary);
  border-radius: 12px;
  margin-bottom: 20px;

  .search-input {
    flex: 1;
  }
}

.search-loading {
  padding: 40px 20px;
  text-align: center;
  color: var(--color-text-tertiary);
}

/* Search history */
.search-history {
  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 4px;

    span {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-text-tertiary);
      text-transform: uppercase;
    }

    .clear-btn {
      background: transparent;
      border: none;
      color: var(--color-primary);
      cursor: pointer;
      font-size: 0.85rem;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .history-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .history-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 12px;
    background: transparent;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-bg-secondary);
    }

    :deep(svg) {
      color: var(--color-text-tertiary);
    }
  }
}

.search-suggestions {
  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-tertiary);
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .suggestions-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .suggestion-btn {
    padding: 12px 16px;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    color: var(--color-text-primary);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: var(--color-primary);
      color: white;
      border-color: var(--color-primary);
    }
  }
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .search-desktop {
    display: none;
  }
}
</style>
