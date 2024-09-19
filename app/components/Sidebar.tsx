import Link from 'next/link';
import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

function Sidebar() {
  return (
    <div className='w-[25%] bg-tertiary p-10 flex flex-col justify-between'>
      <div>
        <h2 className='text-3xl font-black text-primary'>BMGBoard</h2>
        <hr className='mt-12 border-gray-500' />
      </div>
      <div className='flex flex-col gap-20'>
        <Link href="/" className='flex gap-2 items-center text-2xl text-primary font-bold hover:text-secondary'><RxDashboard />Dashboard</Link>
        <Link href="/users" className='flex gap-2 items-center text-2xl text-primary font-bold hover:text-secondary'><FaUsers />Users</Link>
      </div>
      <div>
        <hr className='mb-12 border-gray-500' />
        <button className='flex gap-2 items-center text-2xl text-primary font-bold'>Log out<IoMdLogOut /></button>
      </div>
    </div>
  )
}

export default Sidebar;
