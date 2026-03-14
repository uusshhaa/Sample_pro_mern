import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { FileText, MapPin, Phone, ShieldAlert } from 'lucide-react';

const FileComplaint = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    victimName: '',
    age: '',
    gender: '',
    address: '',
    contactNumber: '',
    email: '',
    typeOfAbuse: '',
    subAbuse: '',
    description: '',
  });
  
  const [proofFile, setProofFile] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Reset subAbuse if typeOfAbuse changes
    if (name === 'typeOfAbuse') {
      setFormData({ ...formData, [name]: value, subAbuse: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setProofFile(e.target.files[0]);
  };

  const abuseCategories = {
    'Physical Abuse': ['Hitting', 'Slapping', 'Kicking', 'Choking', 'Use of weapons', 'Other'],
    'Emotional/Verbal Abuse': ['Name-calling', 'Intimidation', 'Manipulation', 'Isolating from friends/family', 'Other'],
    'Sexual Abuse': ['Forced sexual acts', 'Marital rape', 'Harassment', 'Other'],
    'Economic/Financial Abuse': ['Controlling finances', 'Withholding money', 'Preventing from working', 'Other'],
    'Cyber Abuse': ['Online harassment', 'Non-consensual sharing of images', 'Tracking/Stalking online', 'Other'],
    'Other': ['Other']
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
      
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });

      if (proofFile) {
        submitData.append('proof', proofFile);
      }
      
      await axios.post('http://localhost:5000/api/complaints', submitData, config);
      if (user) {
        navigate('/dashboard');
      } else {
        alert('Report submitted successfully. Please stay safe.');
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit complaint. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative z-10">
          <div className="px-6 py-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 text-red-600 p-3 rounded-xl border border-red-200">
                <ShieldAlert className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">File a Report</h1>
                <p className="text-gray-600 font-medium">Securely submit a description of the incident.</p>
              </div>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Victim Name</label>
                  <input
                    name="victimName"
                    type="text"
                    required
                    value={formData.victimName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                    placeholder="Enter victim's full name"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Age</label>
                    <input
                      name="age"
                      type="number"
                      required
                      min="0"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                    >
                      <option value="" disabled>Select</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Address Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <input
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                    placeholder="Full residential address, area, or safe location"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Contact Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <input
                      name="contactNumber"
                      type="text"
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                      placeholder="Safe contact number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address (Optional)</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Type of Abuse</label>
                  <select
                    name="typeOfAbuse"
                    required
                    value={formData.typeOfAbuse}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                  >
                    <option value="" disabled>Select the type of abuse</option>
                    {Object.keys(abuseCategories).map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Sub Abuse Category</label>
                  <select
                    name="subAbuse"
                    value={formData.subAbuse}
                    onChange={handleChange}
                    disabled={!formData.typeOfAbuse}
                    className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    <option value="" disabled>Select specific incident type</option>
                    {formData.typeOfAbuse && abuseCategories[formData.typeOfAbuse].map((sub) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Description of Incident</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <textarea
                    name="description"
                    required
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
                    placeholder="Describe what happened in your own words. Include dates or times if possible..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Proof Submission (Optional)</label>
                <input
                  type="file"
                  name="proof"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.doc,.docx"
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-700 px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-colors cursor-pointer shadow-sm"
                />
                <p className="text-xs text-gray-500 mt-2 font-medium">Upload an image or document showing proof (e.g., photos, medical reports, screenshots).</p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 mt-6 shadow-sm">
                <p className="text-sm text-indigo-800 flex items-start gap-2">
                  <span className="font-bold text-indigo-900 shrink-0">Note:</span> 
                  Your safety and privacy are our top priority. This report is encrypted and will only be accessible to authorized legal or authoritative personnel as per your consent.
                </p>
              </div>

              <div className="flex items-center justify-end mt-8">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="bg-white text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 border border-gray-300 mr-4 transition-colors focus:ring-2 focus:ring-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-lg font-bold text-white ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30'} shadow-md text-lg transition-all flex items-center gap-2 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                >
                  {loading ? 'Submitting...' : 'Submit Report'}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FileComplaint;
