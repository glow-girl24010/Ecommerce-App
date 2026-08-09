import React, { useState } from 'react';

export default function Notification() {
  const [settings, setSettings] = useState({
    email: true,
    push: true,
    weeklyDigest: false,
    productUpdates: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationItems = [
    {
      id: 'email',
      title: 'Email notifications',
      description: 'Get notified about activity in your workspace.',
    },
    {
      id: 'push',
      title: 'Push notifications',
      description: 'Receive push notifications on your devices.',
    },
    {
      id: 'weeklyDigest',
      title: 'Weekly digest',
      description: 'A summary of what happened during the week.',
    },
    {
      id: 'productUpdates',
      title: 'Product updates',
      description: 'News, announcements, and feature updates.',
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-start text-gray-900 font-sans">
      {/* Main Settings Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Notifications
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose how you want to be notified.
          </p>
        </div>

        {/* Options List */}
        <div className="divide-y divide-gray-100">
          {notificationItems.map((item) => {
            const isEnabled = settings[item.id];
            return (
              <div
                key={item.id}
                className="p-6 sm:p-8 flex items-center justify-between gap-6 hover:bg-gray-50/50 transition-colors"
              >
                {/* Label & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>

                {/* Toggle Switch */}
                <button
                  type="button"
                  role="switch"
                  aria-checked={isEnabled}
                  onClick={() => toggleSetting(item.id)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    isEnabled ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      isEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}