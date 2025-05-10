/**
 * LoyaltyLoop Dashboard Quick Access
 * 
 * This script provides direct access to all dashboards without login credentials.
 * To use:
 * 1. Run the development server (npm run dev)
 * 2. In your browser console, copy and paste the entire content of this file
 * 3. Call one of the following functions:
 *    - accessOwnerDashboard()
 *    - accessCustomerPortal()
 *    - accessAdminDashboard()
 *    - accessStaffDashboard()
 */

// Enable bypass login mode
function enableBypassMode() {
  localStorage.setItem('bypassLogin', 'true');
  console.log('✅ Bypass login mode enabled');
}

// Set the user role for dashboard access
function setUserRole(role) {
  localStorage.setItem('userRole', role);
  console.log(`✅ User role set to: ${role}`);
}

// Access Business Owner Dashboard
function accessOwnerDashboard() {
  enableBypassMode();
  setUserRole('owner');
  window.location.href = '/dashboard';
}

// Access Customer Portal
function accessCustomerPortal() {
  enableBypassMode();
  setUserRole('customer');
  window.location.href = '/portal';
}

// Access Admin Dashboard
function accessAdminDashboard() {
  enableBypassMode();
  setUserRole('admin');
  window.location.href = '/admin';
}

// Access Staff Dashboard
function accessStaffDashboard() {
  enableBypassMode();
  setUserRole('staff');
  window.location.href = '/dashboard';
}

// Print instructions to console
console.log(`
╔════════════════════════════════════════════════╗
║    LoyaltyLoop Dashboard Quick Access Tool     ║
╚════════════════════════════════════════════════╝

Available commands:
- accessOwnerDashboard()
- accessCustomerPortal()
- accessAdminDashboard()
- accessStaffDashboard()

Example: 
> accessOwnerDashboard()
`);

// Export functions for direct use
module.exports = {
  accessOwnerDashboard,
  accessCustomerPortal,
  accessAdminDashboard,
  accessStaffDashboard
}; 