import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Menu, X } from 'lucide-react';

export default function Aside({ page, setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notification', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  const handleNavClick = (id) => {
    setPage(id);
    setIsOpen(false); // Close drawer on mobile selection
  };

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <div className="lg:hidden flex items-center justify-between  bg-blue-600 text-white py-3  px-4 sticky top-0 z-40 shadow-md">
        <div className="flex items-center gap-2.5 font-bold text-lg">
          <Settings className="w-5 h-5 animate-spin-slow" />
          <span>Settings</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-white/90 hover:text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-blue-950/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          w-64 h-[124vh] md:h-screen bg-blue-500 text-white p-6
          flex flex-col justify-between shadow-xl transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-blue-400/50 pb-5">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">
                Settings
              </h1>
              <p className="text-xs text-blue-100 font-medium">
                Account preferences
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = page === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-semibold
                    transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-md translate-x-1'
                        : 'text-white/90 hover:bg-blue-600 hover:text-white hover:translate-x-1'
                    }
                  `}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-blue-200'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Info Box */}
        <div className="p-3.5 md:mb-19 bg-blue-600/60 rounded-xl border border-blue-400/30 text-xs text-blue-100 backdrop-blur-xs">
          <p className="font-semibold text-white">E-commerce Settings</p>
          <p className="text-[11px] text-blue-200 mt-0.5">Quick Navigation</p>
        </div>
      </aside>
    </>
  );
}