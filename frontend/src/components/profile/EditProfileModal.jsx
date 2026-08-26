import React, { useState, useEffect } from 'react';
import { X, User, Briefcase, IndianRupee, Lightbulb } from 'lucide-react';
import { Button } from '../ui/Button';

export function EditProfileModal({ isOpen, onClose, userProfile, onSave }) {
  const [formData, setFormData] = useState({ ...userProfile });
  const [activeTab, setActiveTab] = useState('personal');

  useEffect(() => {
    if (isOpen) setFormData({ ...userProfile });
  }, [isOpen, userProfile]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Handle multi-select arrays
      setFormData(prev => {
        const arr = prev[name] || [];
        if (checked) return { ...prev, [name]: [...arr, value] };
        return { ...prev, [name]: arr.filter(item => item !== value) };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const tabs = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'finance', label: 'Finance', icon: IndianRupee },
    { id: 'capabilities', label: 'Skills & Assets', icon: Lightbulb }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-beige-200">
          <h2 className="font-fraunces text-2xl font-semibold text-emerald-900">Edit Profile</h2>
          <button onClick={onClose} className="p-2 hover:bg-beige-100 rounded-full text-ink-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-6 border-b border-beige-200 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-ink-500 hover:text-ink-900'
              }`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-beige-50">
          
          {/* Tab: Personal Details */}
          {activeTab === 'personal' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="e.g. Ramesh Kumar" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Mobile Number</label>
                  <input type="tel" name="mobile" value={formData.mobile || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="+91 xxxxx xxxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Age</label>
                  <input type="number" name="age" value={formData.age || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Gender</label>
                  <select name="gender" value={formData.gender || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-medium text-ink-900 mt-2 mb-2 border-b border-beige-200 pb-1">Location</h4>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Village/City</label>
                  <input type="text" name="village" value={formData.village || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">District</label>
                  <input type="text" name="district" value={formData.district || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">State</label>
                  <input type="text" name="state" value={formData.state || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Preferred Language</label>
                  <select name="language" value={formData.language || 'en'} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="mr">Marathi</option>
                    <option value="ta">Tamil</option>
                    <option value="bn">Bengali</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Business Details */}
          {activeTab === 'business' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Current Occupation</label>
                  <input type="text" name="occupation" value={formData.occupation || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="e.g. Farmer, Student, None" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Do you currently own a business?</label>
                  <select name="existingBusiness" value={formData.existingBusiness || 'no'} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                    <option value="yes">Yes</option>
                    <option value="no">No, I want to start one</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Target Business Sector</label>
                  <select name="businessType" value={formData.businessType || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                    <option value="">Select Sector</option>
                    <option value="Agriculture">Agriculture & Farming</option>
                    <option value="Dairy">Dairy & Livestock</option>
                    <option value="Retail">Retail Shop / Kirana</option>
                    <option value="Manufacturing">Manufacturing & Processing</option>
                    <option value="Services">Services (Tailoring, Tech, etc.)</option>
                    <option value="Handicrafts">Handicrafts & Artisanal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Years of Experience</label>
                  <input type="number" name="experience" value={formData.experience || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Number of Employees (if any)</label>
                  <input type="number" name="employees" value={formData.employees || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="0" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-ink-900 mb-2">Entrepreneur Goals (Select all that apply)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Start a New Business', 'Expand Existing Business', 'Get Funding', 'Increase Income', 'Find Market Opportunities'].map(goal => (
                    <label key={goal} className="flex items-center space-x-3 p-3 bg-white border border-beige-200 rounded-xl cursor-pointer hover:bg-emerald-50">
                      <input type="checkbox" name="goals" value={goal} checked={(formData.goals || []).includes(goal)} onChange={handleChange} className="w-4 h-4 text-emerald-600 border-beige-300 rounded focus:ring-emerald-500" />
                      <span className="text-sm font-medium text-ink-900">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Finance */}
          {activeTab === 'finance' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Available Investment Budget (₹)</label>
                  <input type="number" name="budget" value={formData.budget || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Monthly Income Range (₹)</label>
                  <select name="incomeRange" value={formData.incomeRange || ''} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                    <option value="">Select Range</option>
                    <option value="0-10000">Less than 10,000</option>
                    <option value="10000-25000">10,000 - 25,000</option>
                    <option value="25000-50000">25,000 - 50,000</option>
                    <option value="50000+">More than 50,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Do you require a business loan?</label>
                  <select name="loanRequired" value={formData.loanRequired || 'no'} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Do you have existing loans?</label>
                  <select name="existingLoans" value={formData.existingLoans || 'no'} onChange={handleChange} className="w-full p-2.5 rounded-xl border border-beige-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Skills & Assets */}
          {activeTab === 'capabilities' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Skills & Interests</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Dairy', 'Poultry', 'Retail Shop', 'Food Processing', 'Handicrafts', 'Tailoring', 'Agri Services', 'Digital Services'].map(skill => (
                    <label key={skill} className="flex items-center space-x-2 p-2 bg-white border border-beige-200 rounded-lg cursor-pointer hover:bg-emerald-50">
                      <input type="checkbox" name="skills" value={skill} checked={(formData.skills || []).includes(skill)} onChange={handleChange} className="w-4 h-4 text-emerald-600 rounded" />
                      <span className="text-sm font-medium">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Available Assets</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Own Land', 'Farm Equipment', 'Shop Space', 'Vehicle', 'Warehouse', 'Internet Access'].map(asset => (
                    <label key={asset} className="flex items-center space-x-2 p-2 bg-white border border-beige-200 rounded-lg cursor-pointer hover:bg-emerald-50">
                      <input type="checkbox" name="assets" value={asset} checked={(formData.assets || []).includes(asset)} onChange={handleChange} className="w-4 h-4 text-emerald-600 rounded" />
                      <span className="text-sm font-medium">{asset}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-beige-200 bg-white space-x-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save Profile</Button>
        </div>
      </div>
    </div>
  );
}
