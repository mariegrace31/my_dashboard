"use client"; 
import { useState } from 'react';
import Link from 'next/link';
import { RxDashboard } from "react-icons/rx";
import { FaUsers, FaBars } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>

      <div className="lg:hidden fixed top-0 left-0 w-full bg-tertiary flex items-center justify-between p-4 z-50">
        <h2 className='text-[14px] font-black text-primary cursor-pointer'>
          BMGBoard
        </h2>
        <button
          className="text-primary text-3xl"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`w-[38%] lg:w-[22%] bg-tertiary p-4 lg:p-10 flex flex-col fixed top-0 left-0 h-screen gap-44 lg:justify-between z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div>
          <div className="flex justify-between items-center">
            <h2 className='text-[14px] lg:text-3xl font-black text-primary cursor-pointer'>
              BMGBoard
            </h2>
            <button
              className="lg:hidden text-primary text-3xl"
              onClick={toggleSidebar}
            >
              <IoClose />
            </button>
          </div>
          <hr className='mt-3 lg:mt-12 border-gray-500' />
        </div>
        
        <div className='flex flex-col gap-5 lg:gap-20'>
          <div onClick={closeSidebar}>
            <Link href="/" className='flex gap-2 items-center text-[14px] lg:text-2xl text-primary font-bold hover:text-secondary'>
              <RxDashboard />Dashboard
            </Link>
          </div>
          <div onClick={closeSidebar}>
            <Link href="/users" className='flex gap-2 items-center text-[14px] lg:text-2xl text-primary font-bold hover:text-secondary'>
              <FaUsers />Users
            </Link>
          </div>
          <div className='flex gap-2 items-center text-[14px] lg:text-2xl text-uns cursor-not-allowed font-bold'>
            <IoSettingsOutline />Settings
          </div>
          <div className='flex gap-2 items-center text-[14px] lg:text-2xl text-uns cursor-not-allowed font-bold'>
            <CgProfile />Profile
          </div>
        </div>
        
        <div>
          <hr className='mb-12 border-gray-500' />
          <button className='flex gap-2 items-center text-[14px] lg:text-2xl text-primary font-bold cursor-not-allowed'>
            Log out<IoMdLogOut />
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
