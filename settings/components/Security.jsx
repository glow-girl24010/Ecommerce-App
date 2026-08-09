import React, { useState } from 'react';
import { Shield, Laptop, Smartphone, Monitor, LogOut } from 'lucide-react';

export default function Security() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessions, setSessions] = useState([
    {
      id: 1,
      device: 'MacBook Pro',
      location: 'San Francisco, CA',
      isCurrent: true,
      icon: Laptop,
    },
    {
      id: 2,
      device: 'iPhone 14 Pro',
      location: 'San Francisco, CA',
      isCurrent: false,
      icon: Smartphone,
    },
    {
      id: 3,
      device: 'Chrome • Windows',
      location: 'New York, NY',
      timeAgo: '2 days ago',
      isCurrent: false,
      icon: Monitor,
    },
  ]);

  const handleRevoke = (id) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-start text-gray-900 font-sans">
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Card 1: Security */}
        <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Security
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Keep your account safe and secure.
            </p>
          </div>

          {/* Password Action Box */}
          <div className="bg-gray-50/80 rounded-xl p-4 sm:p-5 border border-gray-200/80 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Password</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Last changed 2 months ago
              </p>
            </div>
            <button className="text-xs sm:text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0">
              Change password
            </button>
          </div>

          {/* Two-Factor Authentication Box */}
          <div className="bg-gray-50/80 rounded-xl p-4 sm:p-5 border border-gray-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-gray-200/60 flex items-center justify-center text-gray-700 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Two-factor authentication
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Add an extra layer of security
                </p>
              </div>
            </div>

            {/* Toggle Switch */}
            <button
              type="button"
              role="switch"
              aria-checked={twoFactorEnabled}
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                twoFactorEnabled ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Card 2: Active Sessions */}
        <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Active sessions
          </h2>

          <div className="space-y-3">
            {sessions.map((session) => {
              const IconComponent = session.icon;
              return (
                <div
                  key={session.id}
                  className="bg-gray-50/80 rounded-xl p-4 sm:p-5 border border-gray-200/80 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-gray-200/60 flex items-center justify-center text-gray-700 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {session.device}
                        </h3>
                        {session.isCurrent && (
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wider uppercase">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {session.location}
                        {session.timeAgo && ` • ${session.timeAgo}`}
                      </p>
                    </div>
                  </div>

                  {!session.isCurrent && (
                    <button
                      onClick={() => handleRevoke(session.id)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Revoke</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}