//import 'jest-preset-angular';
import 'jest-preset-angular/setup-jest'; 
//
//
// 1️⃣ Mock browser-specific features if needed (for DOM-related tests)
import '@testing-library/jest-dom/extend-expect';

//
// 2️⃣ Mock global objects (if running in Node.js without a real DOM)
global.console = {
  ...console,
  error: jest.fn(),  // Suppress console.error in tests
  warn: jest.fn(),   // Suppress console.warn in tests
};

//
//
//

//
// 4️⃣ Mock timers if needed
//
jest.useFakeTimers();
//
// 5️⃣ Handle unhandled promise rejections
//
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Promise Rejection:', reason);
});