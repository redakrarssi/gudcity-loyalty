import React from 'react';

function CustomerProfile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-gray-900">John Doe</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-gray-900">(555) 123-4567</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Member Since</label>
                <p className="mt-1 text-gray-900">January 1, 2024</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  checked
                  readOnly
                />
                <label className="ml-2 text-sm text-gray-700">
                  Receive email notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  checked
                  readOnly
                />
                <label className="ml-2 text-sm text-gray-700">
                  Subscribe to newsletter
                </label>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;