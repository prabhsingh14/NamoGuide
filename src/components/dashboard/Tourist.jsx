import React, { useState, useEffect } from 'react';
import { User, Calendar, Clock, MapPin, Edit, ChevronRight } from 'lucide-react';

const TouristDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // This would be replaced with actual API calls **ONLY FOR TESTING**
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockProfile = {
          id: 1,
          name: "Sarah Johnson",
          email: "sarah.j@example.com",
          phone: "+1 (555) 123-4567",
          address: "123 Traveler Lane, Adventure City",
          profileImage: "/api/placeholder/150/150"
        };
        
        const mockUpcomingBookings = [
          {
            id: 101,
            title: "Guided Mountain Trek",
            location: "Rocky Mountains",
            date: "March 15, 2025",
            time: "9:00 AM",
            guide: "Alex Thompson",
            status: "Confirmed",
            image: "/api/placeholder/80/80"
          },
          {
            id: 102,
            title: "Historical City Tour",
            location: "Prague, Czech Republic",
            date: "April 5, 2025",
            time: "10:30 AM",
            guide: "Helena Novak",
            status: "Pending",
            image: "/api/placeholder/80/80"
          }
        ];
        
        const mockPastBookings = [
          {
            id: 103,
            title: "Wine Country Tour",
            location: "Napa Valley",
            date: "January 20, 2025",
            time: "11:00 AM",
            guide: "Michael Ross",
            status: "Completed",
            image: "/api/placeholder/80/80"
          },
          {
            id: 104,
            title: "Desert Safari",
            location: "Dubai, UAE",
            date: "December 10, 2024",
            time: "4:30 PM",
            guide: "Amir Hassan",
            status: "Completed",
            image: "/api/placeholder/80/80"
          }
        ];
        
        setProfile(mockProfile);
        setUpcomingBookings(mockUpcomingBookings);
        setPastBookings(mockPastBookings);
        setFormData(mockProfile);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated profile data:", formData); //send data to backend
    setProfile(formData);
    setEditMode(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-[#1D4ED8]">Loading your dashboard...</div>
      </div>
    );
  }

  // Status badge component
  const StatusBadge = ({ status }) => {
    const getStatusClass = () => {
      switch (status.toLowerCase()) {
        case 'confirmed':
          return 'bg-green-100 text-green-800';
        case 'pending':
          return 'bg-yellow-100 text-yellow-800';
        case 'completed':
          return 'bg-blue-100 text-blue-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass()}`}>
        {status}
      </span>
    );
  };

  // Booking card component
  const BookingCard = ({ booking }) => (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex items-start">
      <img 
        src={booking.image} 
        alt={booking.title} 
        className="w-20 h-20 rounded-md object-cover mr-4"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{booking.title}</h3>
          <StatusBadge status={booking.status} />
        </div>
        <div className="mt-2 space-y-1 text-sm">
          <p className="flex items-center"><MapPin size={16} className="mr-1" /> {booking.location}</p>
          <p className="flex items-center"><Calendar size={16} className="mr-1" /> {booking.date}</p>
          <p className="flex items-center"><Clock size={16} className="mr-1" /> {booking.time}</p>
          <p className="flex items-center"><User size={16} className="mr-1" /> Guide: {booking.guide}</p>
        </div>
        <button className="mt-3 text-blue-600 text-sm flex items-center">
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#F97316]"> Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#1D4ED8]">Profile Details</h2>
              {!editMode && (
                <button 
                  onClick={() => setEditMode(true)}
                  className="text-blue-600 flex items-center"
                >
                  <Edit size={16} className="mr-1" /> Edit
                </button>
              )}
            </div>
            
            {editMode ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <img 
                      src={profile.profileImage} 
                      alt="Profile" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#F97316]"
                    />
                    <button className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white" type="button">
                      <Edit size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name || ''} 
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email || ''} 
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone || ''} 
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <h2>Reset Password</h2>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <button 
                      type="button" 
                      onClick={() => {
                        setFormData(profile);
                        setEditMode(false);
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <>
                <div className="mb-6 flex justify-center">
                  <img 
                    src={profile.profileImage} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    <p className="mt-1">{profile.name}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="mt-1">{profile.email}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="mt-1">{profile.phone}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Address</h3>
                    <p className="mt-1">{profile.address}</p>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Upcoming Bookings Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
            
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No upcoming bookings found.</p>
                <button className="mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Browse Tours
                </button>
              </div>
            )}
          </div>
          
          {/* Past Bookings Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Past Bookings</h2>
            
            {pastBookings.length > 0 ? (
              pastBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No past bookings found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristDashboard;