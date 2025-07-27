/*
  ========================================
  Title:  failing-script.js
  Author: Chris Newell
  Date:   27/07/2025
  Description: Simulates a script failure by writing to stderr and exiting with error code
  ========================================
*/

console.error("This script failed intentionally.");
process.exit(1);
