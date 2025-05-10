import React from 'react';
import { Card } from '../../components/ui/Card';

function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <p className="text-gray-600">Manage your account preferences and settings</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Business Profile</h2>
            <p className="text-gray-600">Update your business information and branding</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <p className="text-gray-600">Configure your notification preferences</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Settings;