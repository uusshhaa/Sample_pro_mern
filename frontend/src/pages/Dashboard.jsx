import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { FileText, Clock, CheckCircle, Plus, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchComplaints = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const res = await axios.get('http://localhost:5000/api/complaints', config);
        setComplaints(res.data);
      } catch (err) {
        setError('Failed to fetch your reports. Please try again.');
        if (err.response?.status === 401) {
          logout();
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, [user, navigate, logout]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200 flex items-center gap-1 w-max"><Clock className="w-4 h-4"/> Pending</span>;
      case 'In Progress':
        return <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1 w-max"><AlertCircle className="w-4 h-4"/> In Progress</span>;
      case 'Resolved':
      case 'Closed':
        return <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 border border-green-200 flex items-center gap-1 w-max"><CheckCircle className="w-4 h-4"/> {status}</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 border border-gray-200 w-max">{status}</span>;
    }
  };

  const getAuthenticityBadge = (label) => {
    if (!label) return null;
    if (label === 'High Authenticity') {
       return <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800 border border-green-200 mt-1 inline-block">High Authenticity</span>;
    } else if (label === 'Needs Review (Potential Fake)') {
       return <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-800 border border-red-200 mt-1 inline-block">Review Needed</span>;
    } else {
       return <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200 mt-1 inline-block">Moderate</span>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Your Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user?.name}. Manage your reports securely.</p>
          </div>
          <Link
            to="/file-complaint"
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg font-bold shadow hover:bg-indigo-700 transition"
          >
            <Plus className="h-5 w-5" />
            File New Report
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border border-red-200">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
            <FileText className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-bold text-gray-800">Your Incident Reports</h2>
          </div>

          <div className="p-0">
            {loading ? (
              <div className="flex justify-center items-center p-12 text-gray-500">
                <Clock className="animate-spin h-8 w-8 mr-3 text-indigo-500" /> Loading reports...
              </div>
            ) : complaints.length === 0 ? (
              <div className="text-center p-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No reports filed</h3>
                <p className="text-gray-500 max-w-sm mx-auto">You haven't filed any complaints yet. Use the button above if you need to report an incident securely.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                      <th className="p-4 font-semibold">Date Filed</th>
                      <th className="p-4 font-semibold">Type of Abuse</th>
                      <th className="p-4 font-semibold">Description Snippet</th>
                      <th className="p-4 font-semibold">Verification details</th>
                      <th className="p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {complaints.map((complaint) => (
                      <tr key={complaint._id} className="hover:bg-gray-50 transition">
                        <td className="p-4 text-sm text-gray-700 font-medium">
                          {new Date(complaint.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 text-sm text-gray-900 font-semibold">
                          {complaint.typeOfAbuse}
                        </td>
                        <td className="p-4 text-sm text-gray-600 max-w-xs truncate">
                          {complaint.description}
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col gap-1 items-start">
                            {getAuthenticityBadge(complaint.authenticityLabel)}
                            {complaint.authenticityScore !== undefined && (
                               <span className="text-xs text-gray-500 font-medium">Score: {complaint.authenticityScore}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          {getStatusBadge(complaint.status)}
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

export default Dashboard;
