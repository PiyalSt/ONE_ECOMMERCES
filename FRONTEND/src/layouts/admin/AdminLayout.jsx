import React from "react";
import { Outlet } from "react-router";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Admin Sidebar */}
      <AdminSidebar />

      <div className="flex flex-1 flex-col">
        {/* Admin Header */}
        <AdminHeader />

        <main className="flex flex-1 bg-gray-100 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
