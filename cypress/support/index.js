// ***********************************************************
// This example support/index.js is processed and loaded automatically
// before your test files.
//
// Use this file to put global configurations and behaviors that modify Cypress.
//
// You can change the location of this file or turn off automatically serving
// support files with the 'supportFile' configuration option.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands');

// Catch uncaught exceptions to prevent Cypress test failures
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent the error from failing the test
  console.error('Uncaught exception:', err);
  return false;
});
