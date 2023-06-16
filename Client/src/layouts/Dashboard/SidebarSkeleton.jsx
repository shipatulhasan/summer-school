import React from "react";
import Skeleton from "react-loading-skeleton";

const SidebarSkeleton = () => {
  return (
    <div className="w-64 hidden bg-slate-50 shadow h-full md:flex  flex-col justify-between fixed">
      <div className="px-8 my-5 space-y-10">
        <div className="w-2/3 my-5 h-10 mx-auto hover:cursor-pointer">
          <Skeleton height={80} />
        </div>
        <div className="flex items-center gap-4 mt-10">
          <div className="mt-5">
          <Skeleton width={50} height={50} circle />
          </div>
          <div className="w-full mt-5">
          <Skeleton count={2} />
          </div>
     
        
        </div>
        <div className="mt-12 space-y-8">
          {/* 3 */}
          <Skeleton count={3} />
        </div>
      </div>

      <div className="my-3">
        <Skeleton />
      </div>
    </div>
  );
};

export default SidebarSkeleton;
