import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen bg-[#0D1117] flex items-center justify-center text-[#F3F4F6]">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#3B82F6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
