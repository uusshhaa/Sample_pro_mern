import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { ShieldCheck, Clock, CheckCircle, XCircle, FileText, MapPin, User, AlertCircle } from 'lucide-react';

const AdminPanel = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updateStatus, setUpdateStatus] = useState({ id: null, saving: false, message: '' });

  useEffect(() => {
    // Only fetch if exactly an admin
    if (user && user.role === 'admin') {
      fetchComplaints();
    }
  }, [user]);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const res = await axios.get('http://localhost:5000/api/complaints/all', config);
      setComplaints(res.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch complaints');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (complaintId, newStatus) => {
    try {
      setUpdateStatus({ id: complaintId, saving: true, message: '' });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };
      
      const res = await axios.put(`http://localhost:5000/api/complaints/${complaintId}/status`, { status: newStatus }, config);
      
      // Update local state to reflect change instantly
      setComplaints(complaints.map(c => c._id === complaintId ? { ...c, status: newStatus } : c));
      setUpdateStatus({ id: complaintId, saving: false, message: 'Updated successfully' });
      
      // Clear message after 3 seconds
      setTimeout(() => setUpdateStatus({ id: null, saving: false, message: '' }), 3000);
      
    } catch (err) {
      setUpdateStatus({ id: complaintId, saving: false, message: 'Failed to update' });
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Resolved':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200"><CheckCircle className="w-3 h-3 mr-1" /> Resolved</span>;
      case 'In Progress':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200"><AlertCircle className="w-3 h-3 mr-1" /> In Progress</span>;
      case 'Closed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200"><XCircle className="w-3 h-3 mr-1" /> Closed</span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200"><Clock className="w-3 h-3 mr-1" /> Pending</span>;
    }
  };

  const getAuthenticityBadge = (label) => {
    if (!label) return null;
    if (label === 'High Authenticity') {
       return <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 border border-green-200 uppercase tracking-wide">High Auth</span>;
    } else if (label === 'Needs Review (Potential Fake)') {
       return <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-200 uppercase tracking-wide">Review Needed</span>;
    } else {
       return <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-800 border border-yellow-200 uppercase tracking-wide">Moderate</span>;
    }
  };

  if (authLoading) return <div className="text-white text-center py-20">Loading profile...</div>;

  // Protect route
  if (!user || user.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="bg-transparent min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative z-10">
          <div className="px-6 py-8 border-b border-gray-200 flex items-center gap-3">
            <div className="bg-indigo-100 text-indigo-700 p-3 rounded-xl">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Control Panel</h1>
              <p className="text-gray-600 font-medium">Manage and review all system complaints.</p>
            </div>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md text-red-700">
                {error}
              </div>
            )}

            {loading ? (
              <div className="text-center py-20 text-indigo-600 font-bold">Loading complaints...</div>
            ) : complaints.length === 0 ? (
              <div className="text-center py-20 text-gray-500 font-medium">No complaints registered in the system yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider uppercase">Case Details</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider uppercase">Victim Info</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider uppercase">Current Status</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-500 tracking-wider uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {complaints.map((complaint) => (
                      <tr key={complaint._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col items-start gap-1">
                            <span className="text-sm font-bold text-gray-900 flex items-center gap-2">
                               {complaint.typeOfAbuse}
                               {getAuthenticityBadge(complaint.authenticityLabel)}
                            </span>
                            <span className="text-xs text-gray-500 font-medium mt-0.5">Reported: {new Date(complaint.createdAt).toLocaleDateString()}</span>
                            {complaint.authenticityScore !== undefined && (
                               <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Auth Score: {complaint.authenticityScore}/100</span>
                            )}
                            {complaint.subAbuse && (
                              <span className="text-xs text-indigo-600 font-semibold mt-1 bg-indigo-50 inline-block px-2 py-0.5 rounded whitespace-pre-wrap max-w-[200px] truncate" title={complaint.subAbuse}>
                                {complaint.subAbuse}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center text-sm font-bold text-gray-900">
                              <User className="h-4 w-4 mr-1 text-gray-400" /> {complaint.victimName} ({complaint.age}, {complaint.gender})
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <MapPin className="h-3 w-3 mr-1" /> <span className="truncate max-w-[200px]" title={complaint.address}>{complaint.address}</span>
                            </div>
                            {complaint.user && (
                              <div className="text-xs text-blue-600 font-medium mt-1">Submitted by ACCT: {complaint.user.name}</div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(complaint.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex flex-col items-end gap-2">
                             <select
                                value={complaint.status}
                                onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
                                disabled={updateStatus.id === complaint._id && updateStatus.saving}
                                className="block w-40 pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white shadow-sm border font-semibold text-gray-700"
                              >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Closed">Closed</option>
                             </select>
                             {updateStatus.id === complaint._id && updateStatus.message && (
                               <span className={`text-xs font-bold ${updateStatus.message === 'Failed to update' ? 'text-red-500' : 'text-green-600'}`}>
                                 {updateStatus.message}
                               </span>
                             )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
