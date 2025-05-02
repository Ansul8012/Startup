import { Bus, User, CheckCircle } from "lucide-react";

const ConductorIdCard = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-sm mx-auto">
      {/* Conductor Profile Header */}
      <div className="flex items-center justify-center mb-4">
        <div className="bg-indigo-500 p-4 rounded-full shadow-md">
          <User className="w-16 h-16 text-white" />
        </div>
      </div>

      {/* Conductor Info */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">John Doe</h2>
        <p className="text-gray-400 mb-2">Conductor</p>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Bus className="w-5 h-5 text-green-400" />
            <span className="text-sm">Route 102</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">On Duty</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-x-4">
          <button className="bg-indigo-600 px-4 py-2 rounded-full text-white text-sm">
            View Route
          </button>
          <button className="bg-yellow-500 px-4 py-2 rounded-full text-white text-sm">
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConductorIdCard;
