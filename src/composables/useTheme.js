import { ref, watch } from 'vue';

const isDark = ref(false);

// Verificar o localStorage e preferências do sistema
const initTheme = () => {
  const saved = localStorage.getItem('theme-mode');
  
  if (saved) {
    // Se o usuário salvou uma preferência, usar essa
    isDark.value = saved === 'dark';
  } else {
    // Senão, verificar a preferência do sistema operacional
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  applyTheme();
};

// Aplicar o tema no DOM
const applyTheme = () => {
  const root = document.documentElement;
  if (isDark.value) {
    root.classList.add('dark-mode');
  } else {
    root.classList.remove('dark-mode');
  }
};

// Alternar tema
const toggleTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem('theme-mode', isDark.value ? 'dark' : 'light');
  applyTheme();
};

// Observar mudanças no tema
watch(isDark, () => {
  applyTheme();
});

export const useTheme = () => {
  return {
    isDark,
    toggleTheme,
    initTheme,
  };
};

//obs: o uso desse .js ficou bem explicado já, acredito que não precisa de mais comentários