import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_STORAGE_KEY = '@theme_preference';

// Test utility to verify theme persistence works
export const testThemePersistence = async () => {
  try {
    const testThemes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    
    for (const testTheme of testThemes) {
      // Test saving a theme preference
      await AsyncStorage.setItem(THEME_STORAGE_KEY, testTheme);
      
      // Test retrieving the theme preference
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      
      if (savedTheme !== testTheme) {
        console.log(`❌ Theme persistence test failed for ${testTheme}: expected "${testTheme}", got`, savedTheme);
        return false;
      }
    }
    
    console.log('✅ Theme persistence test passed: all themes saved and retrieved correctly');
    return true;
  } catch (error) {
    console.log('❌ Theme persistence test failed with error:', error);
    return false;
  }
};

// Clear theme preference (for testing)
export const clearThemePreference = async () => {
  try {
    await AsyncStorage.removeItem(THEME_STORAGE_KEY);
    console.log('✅ Theme preference cleared');
    return true;
  } catch (error) {
    console.log('❌ Failed to clear theme preference:', error);
    return false;
  }
};

// Get current theme preference (for debugging)
export const getCurrentThemePreference = async () => {
  try {
    const theme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
    console.log('Current theme preference:', theme || 'none (will default to system)');
    return theme;
  } catch (error) {
    console.log('❌ Failed to get current theme preference:', error);
    return null;
  }
};