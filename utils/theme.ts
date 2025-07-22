/**
 * Utility function to combine theme-aware class names
 */
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Theme class names for consistent styling across the app
 */
export const themeClasses = {
  background: 'bg-white dark:bg-dark-bg',
  backgroundSecondary: 'bg-gray-100 dark:bg-dark-card',
  text: 'text-black-300 dark:text-dark-text',
  textSecondary: 'text-black-200 dark:text-dark-textSecondary',
  textMuted: 'text-black-100 dark:text-dark-textSecondary',
  border: 'border-gray-200 dark:border-dark-border',
  card: 'bg-white dark:bg-dark-card',
  input: 'bg-gray-200 dark:bg-dark-card dark:text-dark-text',
};