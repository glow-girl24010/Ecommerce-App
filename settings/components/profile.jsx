import React, { useState, useRef } from 'react';
import { Upload, Plus, Edit2 } from 'lucide-react';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [profileImg, setProfileImg] = useState('/Profile picture.jpg'); // default
  const [coverImg] = useState('/download (3).jpg'); // default
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const defaultProfile = '/Profile picture.jpg';

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Data = {
      name: formData.get('name'),
      email: formData.get('email'),
      bio: formData.get('bio'),
      image: profileImg,
    };
    setUserData(Data);
    setSubmitted(true);
  };

  const handleFile = (file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert('Max file size is 10MB');
      return;
    }
    const url = URL.createObjectURL(file);
    setProfileImg(url);
  };

  const handleDropZoneClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  // DRAG EVENTS
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleReset = () => {
    setSubmitted(false);
    setUserData(null);
    setProfileImg(defaultProfile); // reset image back to default
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6 sm:space-y-8 font-sans">
      <h1 className="font-bold text-2xl sm:text-3xl text-gray-900">Profile</h1>

      {/* Header Banner & Profile Display */}
      <section className="rounded-2xl relative flex flex-col items-center bg-white border border-gray-200 shadow-xs overflow-hidden pb-6 sm:pb-8">
        {/* Cover Image */}
        <div className="w-full h-36 sm:h-48 lg:h-56 bg-gray-200">
          <img
            src={coverImg}
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Image */}
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-md top-20 sm:top-28 lg:top-32 left-1/2 -translate-x-1/2 overflow-hidden bg-white">
          <img
            src={submitted ? userData.image : profileImg}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Details Box */}
        {!submitted ? (
          <div className="w-full max-w-md text-center px-4 mt-16 sm:mt-20 lg:mt-24 space-y-1">
            <h2 className="font-bold text-xl sm:text-2xl text-gray-900">
              Hello User
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium">
              example@gmail.com
            </p>
          </div>
        ) : (
          <div className="w-full max-w-lg text-center px-4 mt-16 sm:mt-20 lg:mt-24 space-y-2">
            <h2 className="font-bold text-xl sm:text-2xl text-gray-900">
              Hello {userData.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium">
              {userData.email}
            </p>
            {userData.bio && (
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto pt-1">
                {userData.bio}
              </p>
            )}
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Form Section */}
      {!submitted && (
        <section className="bg-white p-5 sm:p-7 lg:p-8 space-y-6 rounded-2xl border border-gray-200 shadow-xs">
          <h2 className="font-bold text-xl sm:text-2xl text-gray-900">
            Update Profile Information
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Top Grid: DropZone + Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* DropZone */}
              <div
                onClick={handleDropZoneClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`w-full max-h-[180px] sm:max-h-[200px] rounded-2xl border-2 border-dashed p-6 flex flex-col justify-center items-center text-center relative overflow-hidden cursor-pointer transition-all duration-200
                  ${
                    isDragging
                      ? 'border-blue-500 bg-blue-50/50'
                      : 'border-blue-200 bg-blue-50/20 hover:border-blue-400 hover:bg-blue-50/40'
                  }`}
              >
                {!profileImg || profileImg === defaultProfile ? (
                  <div className="flex flex-col items-center space-y-2 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Upload className="w-5 h-5" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">
                      Drop your image here or <span className="text-blue-600 underline">browse</span>
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG or GIF (Max 10MB)
                    </p>
                  </div>
                ) : (
                  <div className="relative w-full h-full min-h-[160px] group">
                    <img
                      src={profileImg}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                      <p className="text-white text-xs font-semibold">Change Photo</p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  name="profileImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              {/* Text Inputs */}
              <div className="flex flex-col justify-center gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2.5 sm:p-3 text-xs sm:text-sm rounded-xl outline-hidden transition-all"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2.5 sm:p-3 text-xs sm:text-sm rounded-xl outline-hidden transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Bio Input */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700">
                Bio
              </label>
              <textarea
                name="bio"
                rows={3}
                placeholder="Write a few lines about yourself..."
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2.5 sm:p-3 text-xs sm:text-sm rounded-xl outline-hidden transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.99]"
              >
                Update Profile
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}