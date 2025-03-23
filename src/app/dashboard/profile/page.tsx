"use client";

import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Frontend Developer",
    bio: "Passionate frontend developer with 5+ years of experience in React and modern web technologies. Focused on creating beautiful and performant user experiences.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    experience: [
      {
        company: "Tech Corp",
        role: "Senior Frontend Developer",
        period: "2020 - Present",
        description:
          "Leading frontend development team and implementing new features using React and TypeScript.",
      },
      {
        company: "Digital Agency",
        role: "Frontend Developer",
        period: "2018 - 2020",
        description:
          "Developed and maintained multiple client websites using modern web technologies.",
      },
    ],
    education: [
      {
        school: "University of Technology",
        degree: "Bachelor of Computer Science",
        period: "2014 - 2018",
      },
    ],
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      website: "https://johndoe.dev",
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Add your profile update logic here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your personal information and professional details.
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={profile.fullName}
                  onChange={(e) =>
                    setProfile({ ...profile, fullName: e.target.value })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={profile.location}
                  onChange={(e) =>
                    setProfile({ ...profile, location: e.target.value })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Professional Information
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Professional Title
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={profile.title}
                  onChange={(e) =>
                    setProfile({ ...profile, title: e.target.value })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <div className="mt-1">
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  disabled={!isEditing}
                  className="block w-full sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700"
              >
                Skills
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  value={profile.skills.join(", ")}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      skills: e.target.value.split(",").map((s) => s.trim()),
                    })
                  }
                  disabled={!isEditing}
                  className="block w-full sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                  placeholder="Enter skills separated by commas"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Social Links
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLinkedin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  value={profile.social.linkedin}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      social: { ...profile.social, linkedin: e.target.value },
                    })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="github"
                className="block text-sm font-medium text-gray-700"
              >
                GitHub
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaGithub className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="github"
                  id="github"
                  value={profile.social.github}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      social: { ...profile.social, github: e.target.value },
                    })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700"
              >
                Website
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaGlobe className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="website"
                  id="website"
                  value={profile.social.website}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      social: { ...profile.social, website: e.target.value },
                    })
                  }
                  disabled={!isEditing}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Experience</h2>
          <div className="space-y-6">
            {profile.experience.map((exp, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Education</h2>
          <div className="space-y-6">
            {profile.education.map((edu, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <FaGraduationCap className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-500">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
} 