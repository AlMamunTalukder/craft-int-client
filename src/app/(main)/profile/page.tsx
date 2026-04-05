/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Users,
  Activity,
  CheckCircle,
  Award,
  FileText,
  Wallet,
  Download,
  Plus,
  GraduationCap,
  AlertTriangle,
  TrendingUp,
  Eye,
  Menu,
  X as CloseIcon,
  ChevronLeft,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  DownloadCloud,
  Share2,
  CalendarDays,
  Clock3,
  CheckCheck,
  XCircle,
  Info,
  MoreVertical,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// Types
interface StudentData {
  _id: string;
  studentId: string;
  name: string;
  nameBangla: string;
  email: string;
  mobile: string;
  photo?: string;
  className: any[];
  section: string[];
  roll?: string;
  session: string;
  bloodGroup: string;
  birthDate: string;
  presentAddress: any;
  permanentAddress: any;
  parentInfo: {
    father: {
      nameBangla: string;
      nameEnglish: string;
      profession: string;
      education: string;
      mobile: string;
      whatsapp: string;
      nid?: string;
      income?: number;
    };
    mother: {
      nameBangla: string;
      nameEnglish: string;
      profession: string;
      education: string;
      mobile: string;
      whatsapp: string;
      nid?: string;
      income?: number;
    };
    guardian: {
      nameBangla: string;
      nameEnglish: string;
      relation: string;
      mobile: string;
      whatsapp: string;
      profession: string;
      address: string;
    };
  };
  studentDepartment: string;
  admissionStatus: string;
  createdAt: string;
  updatedAt: string;
  fees: any[];
  payments: any[];
  receipts: any[];
  advanceBalance: number;
  nationality: string;
  birthRegistrationNo?: string;
}

interface AttendanceRecord {
  date: string;
  status: "present" | "absent" | "late" | "holiday";
  checkIn?: string;
  checkOut?: string;
}

interface DuePayment {
  id: string;
  month: string;
  year: number;
  amount: number;
  dueDate: string;
  status: "paid" | "partial" | "unpaid";
  paidAmount: number;
  fine?: number;
}

interface Report {
  id: string;
  title: string;
  type: "exam" | "progress" | "attendance" | "fee";
  date: string;
  downloadUrl: string;
}

// Main Component
const UserProfilePage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [attendance] = useState<AttendanceRecord[]>([]);
  const [duePayments, setDuePayments] = useState<DuePayment[]>([]);
  const [reports] = useState<Report[]>([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      setIsLoading(true);
      
      // Get user from localStorage
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        toast.error("Please login again");
        router.push("/login");
        return;
      }

      const user = JSON.parse(userStr);
      
      // Fetch student data using userId
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/student/by-user/${user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch student data");
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        setStudentData(result.data);
        
        // Fetch fees and convert to due payments
        if (result.data.fees && result.data.fees.length > 0) {
          const payments = result.data.fees.map((fee: any, index: number) => ({
            id: fee._id || index.toString(),
            month: fee.month || "Unknown",
            year: parseInt(fee.academicYear) || new Date().getFullYear(),
            amount: fee.amount || 0,
            dueDate: fee.dueDate || new Date().toISOString().split('T')[0],
            status: fee.status || "unpaid",
            paidAmount: fee.paidAmount || 0,
            fine: fee.fine || 0,
          }));
          setDuePayments(payments);
        }
      } else {
        throw new Error(result.message || "No student data found");
      }
    } catch (error: any) {
      console.error("Error fetching student data:", error);
      toast.error(error.message || "Failed to load student data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  // Calculate attendance statistics (placeholder)
  const totalDays = attendance.length || 30;
  const presentDays = attendance.filter((a) => a.status === "present").length;
  const absentDays = attendance.filter((a) => a.status === "absent").length;
  const lateDays = attendance.filter((a) => a.status === "late").length;
  const attendancePercentage = totalDays > 0 ? ((presentDays + lateDays) / totalDays) * 100 : 85;

  // Calculate due statistics
  const totalDue = duePayments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalPaid = duePayments.reduce((sum, payment) => sum + payment.paidAmount, 0);
  const totalUnpaid = totalDue - totalPaid;
  const duePercentage = totalDue > 0 ? (totalPaid / totalDue) * 100 : 0;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Present</Badge>;
      case "absent":
        return <Badge className="bg-red-100 text-red-700 border-red-200">Absent</Badge>;
      case "late":
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Late</Badge>;
      case "holiday":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Holiday</Badge>;
      case "paid":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Paid</Badge>;
      case "partial":
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Partial</Badge>;
      case "unpaid":
        return <Badge className="bg-red-100 text-red-700 border-red-200">Unpaid</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Data Found</h2>
          <p className="text-gray-600">Unable to load your profile data.</p>
          <Button onClick={() => router.push("/login")} className="mt-4">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  // Get class name
  const className = studentData.className && studentData.className.length > 0 
    ? (studentData.className[0] as any)?.className || "N/A"
    : "N/A";
  
  const section = studentData.section && studentData.section.length > 0 
    ? studentData.section[0] 
    : "N/A";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
            <Menu size={24} />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
              <GraduationCap size={16} className="text-white" />
            </div>
            <span className="font-bold text-gray-900">Student Portal</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-purple-100 text-purple-700">
              {studentData.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Sidebar Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-72">
          <MobileSidebar
            studentData={studentData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setMobileMenuOpen={setMobileMenuOpen}
            handleLogout={handleLogout}
          />
        </SheetContent>
      </Sheet>

      {/* Desktop Layout */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside
          className={`hidden lg:block bg-white border-r border-gray-200 transition-all duration-300 ${
            sidebarOpen ? "w-72" : "w-20"
          }`}
        >
          <DesktopSidebar
            studentData={studentData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            handleLogout={handleLogout}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Desktop Header */}
          <header className="hidden lg:flex bg-white border-b border-gray-200 px-8 py-4 items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
              </Button>
              <h1 className="text-xl font-bold text-gray-900">
                {activeTab === "profile" ? "Profile" : 
                 activeTab === "attendance" ? "Attendance" :
                 activeTab === "due" ? "Due Payments" :
                 activeTab === "reports" ? "Reports" : "Settings"}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-xl border-gray-200 w-64 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 p-1">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-purple-100 text-purple-700">
                        {studentData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden xl:block">
                      <p className="text-sm font-medium">{studentData.name}</p>
                      <p className="text-xs text-gray-500">{studentData.studentId}</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setActiveTab("profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem onClick={() => setActiveTab("settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Content Area */}
          <div className="p-4 md:p-8">
            {/* Profile Tab */}
            {activeTab === "profile" && <ProfileContent studentData={studentData} />}

            {/* Attendance Tab */}
            {activeTab === "attendance" && (
              <AttendanceContent
                attendance={attendance}
                attendancePercentage={attendancePercentage}
                presentDays={presentDays}
                absentDays={absentDays}
                lateDays={lateDays}
                totalDays={totalDays}
                getStatusBadge={getStatusBadge}
              />
            )}

            {/* Due Payments Tab */}
            {activeTab === "due" && (
              <DueContent
                duePayments={duePayments}
                totalDue={totalDue}
                totalPaid={totalPaid}
                totalUnpaid={totalUnpaid}
                duePercentage={duePercentage}
                getStatusBadge={getStatusBadge}
              />
            )}

            {/* Reports Tab */}
            {activeTab === "reports" && <ReportsContent reports={reports} />}

            {/* Settings Tab */}
            {/* {activeTab === "settings" && <SettingsContent studentData={studentData} handleLogout={handleLogout} />} */}
          </div>
        </main>
      </div>
    </div>
  );
};

// Desktop Sidebar Component
const DesktopSidebar = ({ studentData, activeTab, setActiveTab, sidebarOpen, setSidebarOpen, handleLogout }: any) => {
  const navItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "attendance", label: "Attendance", icon: CalendarDays },
    { id: "due", label: "Due Payments", icon: Wallet },
    { id: "reports", label: "Reports", icon: FileText },
    // { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center justify-between border-b border-gray-100">
        {sidebarOpen ? (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Student Portal</h2>
              <p className="text-xs text-gray-500">Craft International</p>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mx-auto">
            <GraduationCap size={20} className="text-white" />
          </div>
        )}
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className={!sidebarOpen ? "hidden" : ""}>
          <ChevronLeft size={18} />
        </Button>
      </div>

      {/* Student Info Card */}
      {sidebarOpen && (
        <div className="p-4 mx-4 mt-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-white shadow-md">
              <AvatarFallback className="bg-purple-200 text-purple-700">
                {studentData.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold text-gray-900">{studentData.name}</p>
              <p className="text-xs text-gray-600">{studentData.studentId}</p>
              <Badge variant="outline" className="mt-1 bg-white/50 text-xs">
                {studentData.className?.[0]?.className || "N/A"}
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-purple-50"
              } ${!sidebarOpen && "justify-center"}`}
            >
              <Icon size={20} className={isActive ? "text-white" : "text-gray-500"} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-red-50 transition-all ${
            !sidebarOpen && "justify-center"
          }`}
        >
          <LogOut size={20} className="text-gray-500" />
          {sidebarOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

// Mobile Sidebar Component
const MobileSidebar = ({ studentData, activeTab, setActiveTab, setMobileMenuOpen, handleLogout }: any) => {
  const navItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "attendance", label: "Attendance", icon: CalendarDays },
    { id: "due", label: "Due Payments", icon: Wallet },
    { id: "reports", label: "Reports", icon: FileText },
    // { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
            <GraduationCap size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Student Portal</h2>
            <p className="text-xs text-gray-500">Craft International</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon size={18} />
        </Button>
      </div>

      <div className="p-4 mx-4 mt-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-white shadow-md">
            <AvatarFallback className="bg-purple-200 text-purple-700">
              {studentData.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-gray-900">{studentData.name}</p>
            <p className="text-xs text-gray-600">{studentData.studentId}</p>
            <Badge variant="outline" className="mt-1 bg-white/50 text-xs">
              {studentData.className?.[0]?.className || "N/A"}
            </Badge>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-purple-50"
              }`}
            >
              <Icon size={20} className={isActive ? "text-white" : "text-gray-500"} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-red-50 transition-all">
          <LogOut size={20} className="text-gray-500" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

// Profile Content Component
const ProfileContent = ({ studentData }: { studentData: StudentData }) => {
  // Get class name
  const className = studentData.className && studentData.className.length > 0 
    ? (studentData.className[0] as any)?.className || "N/A"
    : "N/A";
  
  const section = studentData.section && studentData.section.length > 0 
    ? studentData.section[0] 
    : "N/A";

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get address string
  const getAddressString = (address: any) => {
    if (!address) return "N/A";
    const parts = [];
    if (address.village) parts.push(address.village);
    if (address.postOffice) parts.push(address.postOffice);
    if (address.policeStation) parts.push(address.policeStation);
    if (address.district) parts.push(address.district);
    return parts.join(", ") || "N/A";
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-20 -mb-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
            <AvatarFallback className="bg-purple-200 text-purple-700 text-2xl">
              {studentData.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-1">{studentData.name}</h1>
            <p className="text-purple-100 mb-2">{studentData.nameBangla}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                {studentData.studentId}
              </Badge>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                {className}
              </Badge>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                {studentData.studentDepartment}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <Card className="lg:col-span-2 border-2 border-purple-100/50 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
            <CardTitle className="text-purple-700 flex items-center gap-2">
              <User size={20} />
              ব্যক্তিগত তথ্য
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">পুরো নাম (বাংলা)</p>
                <p className="font-medium text-gray-900">{studentData.nameBangla || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Full Name (English)</p>
                <p className="font-medium text-gray-900">{studentData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">জন্ম তারিখ</p>
                <p className="font-medium text-gray-900">{formatDate(studentData.birthDate)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">জন্ম নিবন্ধন নম্বর</p>
                <p className="font-medium text-gray-900">{studentData.birthRegistrationNo || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">রক্তের গ্রুপ</p>
                <p className="font-medium text-gray-900">{studentData.bloodGroup || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">জাতীয়তা</p>
                <p className="font-medium text-gray-900">{studentData.nationality || "Bangladeshi"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">মোবাইল নম্বর</p>
                <p className="font-medium text-gray-900">{studentData.mobile || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">ইমেইল</p>
                <p className="font-medium text-gray-900">{studentData.email}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">বর্তমান ঠিকানা</p>
                <p className="font-medium text-gray-900">{getAddressString(studentData.presentAddress)}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">স্থায়ী ঠিকানা</p>
                <p className="font-medium text-gray-900">{getAddressString(studentData.permanentAddress)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Card className="border-2 border-purple-100/50 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-purple-100">
            <CardTitle className="text-indigo-700 flex items-center gap-2">
              <GraduationCap size={20} />
              একাডেমিক তথ্য
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">ছাত্র আইডি</span>
                <span className="font-bold text-purple-700">{studentData.studentId}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">শ্রেণি</span>
                <span className="font-medium">{className}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">শাখা</span>
                <span className="font-medium">{section}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">বিভাগ</span>
                <span className="font-medium capitalize">{studentData.studentDepartment}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">সেশন</span>
                <span className="font-medium">{studentData.session || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">এডভান্স ব্যালেন্স</span>
                <span className="font-medium">৳{studentData.advanceBalance?.toLocaleString() || 0}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Information */}
        <Card className="lg:col-span-3 border-2 border-purple-100/50 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-purple-100">
            <CardTitle className="text-green-700 flex items-center gap-2">
              <Users size={20} />
              পারিবারিক তথ্য
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-700 font-medium mb-2">পিতার নাম</p>
                <p className="text-gray-900 font-medium">{studentData.parentInfo?.father?.nameEnglish || "N/A"}</p>
                <p className="text-sm text-gray-600 mt-1">{studentData.parentInfo?.father?.nameBangla}</p>
                {studentData.parentInfo?.father?.mobile && (
                  <p className="text-xs text-gray-500 mt-2">মোবাইল: {studentData.parentInfo.father.mobile}</p>
                )}
                {studentData.parentInfo?.father?.profession && (
                  <p className="text-xs text-gray-500">পেশা: {studentData.parentInfo.father.profession}</p>
                )}
              </div>
              <div className="bg-pink-50/50 p-4 rounded-xl border border-pink-100">
                <p className="text-sm text-pink-700 font-medium mb-2">মাতার নাম</p>
                <p className="text-gray-900 font-medium">{studentData.parentInfo?.mother?.nameEnglish || "N/A"}</p>
                <p className="text-sm text-gray-600 mt-1">{studentData.parentInfo?.mother?.nameBangla}</p>
                {studentData.parentInfo?.mother?.mobile && (
                  <p className="text-xs text-gray-500 mt-2">মোবাইল: {studentData.parentInfo.mother.mobile}</p>
                )}
                {studentData.parentInfo?.mother?.profession && (
                  <p className="text-xs text-gray-500">পেশা: {studentData.parentInfo.mother.profession}</p>
                )}
              </div>
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                <p className="text-sm text-amber-700 font-medium mb-2">অভিভাবক</p>
                <p className="text-gray-900 font-medium">{studentData.parentInfo?.guardian?.nameEnglish || "N/A"}</p>
                <p className="text-sm text-gray-600 mt-1">{studentData.parentInfo?.guardian?.nameBangla}</p>
                {studentData.parentInfo?.guardian?.relation && (
                  <p className="text-xs text-gray-500 mt-2">সম্পর্ক: {studentData.parentInfo.guardian.relation}</p>
                )}
                {studentData.parentInfo?.guardian?.mobile && (
                  <p className="text-xs text-gray-500">মোবাইল: {studentData.parentInfo.guardian.mobile}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Attendance Content Component (Placeholder - will need real API)
const AttendanceContent = ({
  attendance,
  attendancePercentage,
  presentDays,
  absentDays,
  lateDays,
  totalDays,
  getStatusBadge,
}: any) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <CalendarDays size={24} className="text-purple-600" />
        Attendance Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 font-medium">Present</p>
                <p className="text-3xl font-bold text-green-700">{presentDays || 25}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                <CheckCheck size={24} className="text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-700 font-medium">Absent</p>
                <p className="text-3xl font-bold text-red-700">{absentDays || 3}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
                <XCircle size={24} className="text-red-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-700 font-medium">Late</p>
                <p className="text-3xl font-bold text-yellow-700">{lateDays || 2}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center">
                <Clock3 size={24} className="text-yellow-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 font-medium">Attendance</p>
                <p className="text-3xl font-bold text-purple-700">{attendancePercentage.toFixed(1)}%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                <Activity size={24} className="text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Progress */}
      <Card className="border-2 border-purple-100/50 shadow-lg">
        <CardHeader>
          <CardTitle>Attendance Progress</CardTitle>
          <CardDescription>Overall attendance for the current month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Present</span>
              <span className="font-medium">{presentDays || 25} days</span>
            </div>
            <Progress value={((presentDays || 25) / (totalDays || 30)) * 100} className="h-2 bg-gray-100" />

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Late</span>
              <span className="font-medium">{lateDays || 2} days</span>
            </div>
            <Progress value={((lateDays || 2) / (totalDays || 30)) * 100} className="h-2 bg-gray-100" />

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Absent</span>
              <span className="font-medium">{absentDays || 3} days</span>
            </div>
            <Progress value={((absentDays || 3) / (totalDays || 30)) * 100} className="h-2 bg-gray-100" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-100/50 shadow-lg">
        <CardHeader>
          <CardTitle>Attendance Notice</CardTitle>
          <CardDescription>Attendance feature coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Info className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <p className="text-gray-600">Detailed attendance records will be available soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Due Payments Content Component
const DueContent = ({
  duePayments,
  totalDue,
  totalPaid,
  totalUnpaid,
  duePercentage,
  getStatusBadge,
}: any) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <Wallet size={24} className="text-purple-600" />
        Due Payments
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-medium">Total Due</p>
                <p className="text-3xl font-bold text-blue-700">৳{totalDue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
                <Wallet size={24} className="text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 font-medium">Total Paid</p>
                <p className="text-3xl font-bold text-green-700">৳{totalPaid.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                <CheckCircle size={24} className="text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-700 font-medium">Remaining</p>
                <p className="text-3xl font-bold text-red-700">৳{totalUnpaid.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
                <AlertTriangle size={24} className="text-red-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 font-medium">Payment Rate</p>
                <p className="text-3xl font-bold text-purple-700">{duePercentage.toFixed(1)}%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                <TrendingUp size={24} className="text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Progress */}
      <Card className="border-2 border-purple-100/50 shadow-lg">
        <CardHeader>
          <CardTitle>Payment Progress</CardTitle>
          <CardDescription>Total payments made vs total due</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Paid: ৳{totalPaid.toLocaleString()}</span>
              <span className="text-gray-600">Total: ৳{totalDue.toLocaleString()}</span>
            </div>
            <Progress value={duePercentage} className="h-3 bg-gray-100" />
            <div className="flex justify-between text-sm">
              <span className="text-green-600 font-medium">Paid: ৳{totalPaid.toLocaleString()}</span>
              <span className="text-red-600 font-medium">Due: ৳{totalUnpaid.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card className="border-2 border-purple-100/50 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Your monthly fee payment records</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {duePayments.length > 0 ? (
            <div className="rounded-xl border overflow-hidden">
              <UITable>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="font-semibold">Month</TableHead>
                    <TableHead className="font-semibold">Year</TableHead>
                    <TableHead className="font-semibold">Amount</TableHead>
                    <TableHead className="font-semibold">Paid</TableHead>
                    <TableHead className="font-semibold">Due</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {duePayments.map((payment: DuePayment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.month}</TableCell>
                      <TableCell>{payment.year}</TableCell>
                      <TableCell>৳{payment.amount.toLocaleString()}</TableCell>
                      <TableCell>৳{payment.paidAmount.toLocaleString()}</TableCell>
                      <TableCell className={payment.amount - payment.paidAmount > 0 ? "text-red-600 font-medium" : "text-green-600"}>
                        ৳{(payment.amount - payment.paidAmount).toLocaleString()}
                      </TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </UITable>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No payment records found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Reports Content Component
const ReportsContent = ({ reports }: { reports: Report[] }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <FileText size={24} className="text-purple-600" />
        Reports & Documents
      </h2>

      <Card className="border-2 border-purple-100/50 shadow-lg">
        <CardHeader>
          <CardTitle>Reports</CardTitle>
          <CardDescription>Coming Soon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-purple-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reports Available</h3>
            <p className="text-gray-600">Reports and documents will be available here soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Settings Content Component
// const SettingsContent = ({ studentData, handleLogout }: any) => {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isChangingPassword, setIsChangingPassword] = useState(false);

//   const handlePasswordChange = async () => {
//     if (newPassword !== confirmPassword) {
//       toast.error("New passwords do not match");
//       return;
//     }

//     if (newPassword.length < 6) {
//       toast.error("Password must be at least 6 characters");
//       return;
//     }

//     setIsChangingPassword(true);
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({
//           currentPassword,
//           newPassword,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to change password");
//       }

//       toast.success("Password changed successfully");
//       setCurrentPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//     } catch (error: any) {
//       toast.error(error.message || "Failed to change password");
//     } finally {
//       setIsChangingPassword(false);
//     }
//   };

//   return (
//     <div className="space-y-6 animate-fadeIn">
//       <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//         <Settings size={24} className="text-purple-600" />
//         Settings
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Security Settings */}
//         <Card className="lg:col-span-2 border-2 border-purple-100/50 shadow-lg">
//           <CardHeader>
//             <CardTitle>Security</CardTitle>
//             <CardDescription>Manage your account security</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <h3 className="font-semibold text-lg">Change Password</h3>
//                 <div className="space-y-2">
//                   <Label htmlFor="currentPassword">Current Password</Label>
//                   <Input
//                     id="currentPassword"
//                     type="password"
//                     value={currentPassword}
//                     onChange={(e) => setCurrentPassword(e.target.value)}
//                     placeholder="Enter current password"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="newPassword">New Password</Label>
//                   <Input
//                     id="newPassword"
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter new password"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="confirmPassword">Confirm New Password</Label>
//                   <Input
//                     id="confirmPassword"
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm new password"
//                   />
//                 </div>
//                 <Button
//                   onClick={handlePasswordChange}
//                   disabled={isChangingPassword || !currentPassword || !newPassword || !confirmPassword}
//                   className="bg-gradient-to-r from-purple-600 to-indigo-600"
//                 >
//                   {isChangingPassword ? "Updating..." : "Update Password"}
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Account Information */}
//         <Card className="border-2 border-purple-100/50 shadow-lg">
//           <CardHeader>
//             <CardTitle>Account Information</CardTitle>
//             <CardDescription>Your account details</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-1">
//               <p className="text-sm text-gray-500">Student ID</p>
//               <p className="font-medium">{studentData.studentId}</p>
//             </div>
//             <Separator />
//             <div className="space-y-1">
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="font-medium">{studentData.email}</p>
//             </div>
//             <Separator />
//             <div className="space-y-1">
//               <p className="text-sm text-gray-500">Role</p>
//               <p className="font-medium capitalize">Student</p>
//             </div>
//             <Separator />
//             <Button variant="destructive" onClick={handleLogout} className="w-full">
//               <LogOut size={16} className="mr-2" />
//               Logout
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

export default UserProfilePage;

// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import {
//   User,
//   Users,
//   Activity,
//   CheckCircle,
//   Award,
//   FileText,
//   Wallet,
//   Download,
//   Plus,
//   GraduationCap,
//   AlertTriangle,
//   TrendingUp,
//   Eye,
//   Menu,
//   X as CloseIcon,
//   ChevronLeft,
//   Settings,
//   LogOut,
//   Bell,
//   Search,
//   Filter,
//   DownloadCloud,
//   Share2,  
//   CalendarDays,
//   Clock3,
//   CheckCheck,
//   XCircle,
//   Info,
//   MoreVertical,
//   PanelLeftClose,
//   PanelLeftOpen,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Separator } from "@/components/ui/separator";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Sheet,
//   SheetContent,
// } from "@/components/ui/sheet";
// import {
//   Table as UITable,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// // Types
// interface StudentData {
//   id: string;
//   name: string;
//   nameBangla: string;
//   email: string;
//   phone: string;
//   photo: string;
//   class: string;
//   section: string;
//   roll: string;
//   session: string;
//   bloodGroup: string;
//   dateOfBirth: string;
//   address: string;
//   fatherName: string;
//   motherName: string;
//   guardianName?: string;
//   admissionDate: string;
// }

// interface AttendanceRecord {
//   date: string;
//   status: "present" | "absent" | "late" | "holiday";
//   checkIn?: string;
//   checkOut?: string;
// }

// interface DuePayment {
//   id: string;
//   month: string;
//   year: number;
//   amount: number;
//   dueDate: string;
//   status: "paid" | "partial" | "unpaid";
//   paidAmount: number;
//   fine?: number;
// }

// interface Report {
//   id: string;
//   title: string;
//   type: "exam" | "progress" | "attendance" | "fee";
//   date: string;
//   downloadUrl: string;
// }

// // Mock Data
// const mockStudentData: StudentData = {
//   id: "CII230156",
//   name: "Rafiqul Islam",
//   nameBangla: "রফিকুল ইসলাম",
//   email: "rafiqul.islam@student.edu",
//   phone: "01712345678",
//   photo: "/api/placeholder/150/150",
//   class: "Class 8",
//   section: "A",
//   roll: "12",
//   session: "2024-2025",
//   bloodGroup: "B+",
//   dateOfBirth: "2010-05-15",
//   address: "123, Dhaka Road, Narayanganj",
//   fatherName: "Abdul Karim",
//   motherName: "Fatema Begum",
//   guardianName: "Abdul Karim (Father)",
//   admissionDate: "2023-01-10",
// };

// const mockAttendance: AttendanceRecord[] = [
//   {
//     date: "2025-02-01",
//     status: "present",
//     checkIn: "08:00 AM",
//     checkOut: "02:00 PM",
//   },
//   {
//     date: "2025-02-02",
//     status: "present",
//     checkIn: "07:55 AM",
//     checkOut: "02:05 PM",
//   },
//   {
//     date: "2025-02-03",
//     status: "late",
//     checkIn: "08:30 AM",
//     checkOut: "02:00 PM",
//   },
//   {
//     date: "2025-02-04",
//     status: "present",
//     checkIn: "08:00 AM",
//     checkOut: "02:00 PM",
//   },
//   { date: "2025-02-05", status: "absent", checkIn: "-", checkOut: "-" },
//   {
//     date: "2025-02-06",
//     status: "present",
//     checkIn: "07:50 AM",
//     checkOut: "02:00 PM",
//   },
//   { date: "2025-02-07", status: "holiday", checkIn: "-", checkOut: "-" },
//   {
//     date: "2025-02-08",
//     status: "present",
//     checkIn: "08:00 AM",
//     checkOut: "02:00 PM",
//   },
//   {
//     date: "2025-02-09",
//     status: "present",
//     checkIn: "08:00 AM",
//     checkOut: "02:00 PM",
//   },
//   {
//     date: "2025-02-10",
//     status: "present",
//     checkIn: "08:00 AM",
//     checkOut: "02:00 PM",
//   },
// ];

// const mockDuePayments: DuePayment[] = [
//   {
//     id: "1",
//     month: "January",
//     year: 2025,
//     amount: 2500,
//     dueDate: "2025-01-10",
//     status: "paid",
//     paidAmount: 2500,
//     fine: 0,
//   },
//   {
//     id: "2",
//     month: "February",
//     year: 2025,
//     amount: 2500,
//     dueDate: "2025-02-10",
//     status: "partial",
//     paidAmount: 1500,
//     fine: 50,
//   },
//   {
//     id: "3",
//     month: "March",
//     year: 2025,
//     amount: 2500,
//     dueDate: "2025-03-10",
//     status: "unpaid",
//     paidAmount: 0,
//     fine: 0,
//   },
//   {
//     id: "4",
//     month: "April",
//     year: 2025,
//     amount: 2500,
//     dueDate: "2025-04-10",
//     status: "unpaid",
//     paidAmount: 0,
//     fine: 0,
//   },
//   {
//     id: "5",
//     month: "May",
//     year: 2025,
//     amount: 2500,
//     dueDate: "2025-05-10",
//     status: "unpaid",
//     paidAmount: 0,
//     fine: 0,
//   },
// ];

// const mockReports: Report[] = [
//   {
//     id: "1",
//     title: "Half-Yearly Exam 2024",
//     type: "exam",
//     date: "2024-12-15",
//     downloadUrl: "#",
//   },
//   {
//     id: "2",
//     title: "Monthly Progress Report - January",
//     type: "progress",
//     date: "2025-02-01",
//     downloadUrl: "#",
//   },
//   {
//     id: "3",
//     title: "Attendance Summary - January",
//     type: "attendance",
//     date: "2025-02-01",
//     downloadUrl: "#",
//   },
//   {
//     id: "4",
//     title: "Fee Payment History 2024",
//     type: "fee",
//     date: "2024-12-31",
//     downloadUrl: "#",
//   },
//   {
//     id: "5",
//     title: "Annual Exam 2024",
//     type: "exam",
//     date: "2024-11-30",
//     downloadUrl: "#",
//   },
// ];

// // Sidebar Navigation Items
// const navItems = [
//   { id: "profile", label: "Profile", icon: User },
//   { id: "attendance", label: "Attendance", icon: CalendarDays },
//   { id: "due", label: "Due Payments", icon: Wallet },
//   { id: "reports", label: "Reports", icon: FileText },
//   { id: "settings", label: "Settings", icon: Settings },
//   { id: "notifications", label: "Notifications", icon: Bell },
// ];

// // Main Component
// const UserProfilePage = () => {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [studentData] = useState<StudentData>(mockStudentData);
//   const [attendance] = useState<AttendanceRecord[]>(mockAttendance);
//   const [duePayments] = useState<DuePayment[]>(mockDuePayments);
//   const [reports] = useState<Report[]>(mockReports);
//   const [selectedMonth, setSelectedMonth] = useState("all");

//   // Calculate attendance statistics
//   const totalDays = attendance.length;
//   const presentDays = attendance.filter((a) => a.status === "present").length;
//   const absentDays = attendance.filter((a) => a.status === "absent").length;
//   const lateDays = attendance.filter((a) => a.status === "late").length;
//   const attendancePercentage = ((presentDays + lateDays) / totalDays) * 100;

//   // Calculate due statistics
//   const totalDue = duePayments.reduce(
//     (sum, payment) => sum + payment.amount,
//     0,
//   );
//   const totalPaid = duePayments.reduce(
//     (sum, payment) => sum + payment.paidAmount,
//     0,
//   );
//   const totalUnpaid = totalDue - totalPaid;
//   const duePercentage = (totalPaid / totalDue) * 100;

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "present":
//         return (
//           <Badge className="bg-green-100 text-green-700 border-green-200">
//             Present
//           </Badge>
//         );
//       case "absent":
//         return (
//           <Badge className="bg-red-100 text-red-700 border-red-200">
//             Absent
//           </Badge>
//         );
//       case "late":
//         return (
//           <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
//             Late
//           </Badge>
//         );
//       case "holiday":
//         return (
//           <Badge className="bg-blue-100 text-blue-700 border-blue-200">
//             Holiday
//           </Badge>
//         );
//       case "paid":
//         return (
//           <Badge className="bg-green-100 text-green-700 border-green-200">
//             Paid
//           </Badge>
//         );
//       case "partial":
//         return (
//           <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
//             Partial
//           </Badge>
//         );
//       case "unpaid":
//         return (
//           <Badge className="bg-red-100 text-red-700 border-red-200">
//             Unpaid
//           </Badge>
//         );
//       default:
//         return <Badge>{status}</Badge>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
//       {/* Mobile Header */}
//       <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
//         <div className="flex items-center gap-3">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setMobileMenuOpen(true)}
//             className="lg:hidden"
//           >
//             <Menu size={24} />
//           </Button>
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
//               <GraduationCap size={16} className="text-white" />
//             </div>
//             <span className="font-bold text-gray-900">Student Portal</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="icon" className="relative">
//             <Bell size={20} />
//             <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//           </Button>
//           <Avatar className="h-8 w-8">
//             <AvatarImage src={studentData.photo} />
//             <AvatarFallback className="bg-purple-100 text-purple-700">
//               {studentData.name.charAt(0)}
//             </AvatarFallback>
//           </Avatar>
//         </div>
//       </div>

//       {/* Mobile Sidebar Sheet */}
//       <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
//         <SheetContent side="left" className="p-0 w-72">
//           <MobileSidebar
//             studentData={studentData}
//             activeTab={activeTab}
//             setActiveTab={setActiveTab}
//             setMobileMenuOpen={setMobileMenuOpen}
//           />
//         </SheetContent>
//       </Sheet>

//       {/* Desktop Layout */}
//       <div className="flex">
//         {/* Desktop Sidebar */}
//         <aside
//           className={`hidden lg:block bg-white border-r border-gray-200 transition-all duration-300 ${
//             sidebarOpen ? "w-72" : "w-20"
//           }`}
//         >
//           <DesktopSidebar
//             studentData={studentData}
//             activeTab={activeTab}
//             setActiveTab={setActiveTab}
//             sidebarOpen={sidebarOpen}
//             setSidebarOpen={setSidebarOpen}
//           />
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 min-h-screen">
//           {/* Desktop Header */}
//           <header className="hidden lg:flex bg-white border-b border-gray-200 px-8 py-4 items-center justify-between sticky top-0 z-20">
//             <div className="flex items-center gap-4">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//               >
//                 {sidebarOpen ? (
//                   <PanelLeftClose size={20} />
//                 ) : (
//                   <PanelLeftOpen size={20} />
//                 )}
//               </Button>
//               <h1 className="text-xl font-bold text-gray-900">
//                 {navItems.find((item) => item.id === activeTab)?.label ||
//                   "Dashboard"}
//               </h1>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Search
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={18}
//                 />
//                 <Input
//                   placeholder="Search..."
//                   className="pl-10 pr-4 py-2 rounded-xl border-gray-200 w-64 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
//                 />
//               </div>
//               <Button variant="ghost" size="icon" className="relative">
//                 <Bell size={20} />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               </Button>
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="flex items-center gap-2 p-1"
//                   >
//                     <Avatar className="h-8 w-8">
//                       <AvatarImage src={studentData.photo} />
//                       <AvatarFallback className="bg-purple-100 text-purple-700">
//                         {studentData.name.charAt(0)}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="text-left hidden xl:block">
//                       <p className="text-sm font-medium">{studentData.name}</p>
//                       <p className="text-xs text-gray-500">{studentData.id}</p>
//                     </div>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-56">
//                   <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>
//                     <User className="mr-2 h-4 w-4" />
//                     <span>Profile</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Settings className="mr-2 h-4 w-4" />
//                     <span>Settings</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <LogOut className="mr-2 h-4 w-4" />
//                     <span>Log out</span>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </header>

//           {/* Content Area */}
//           <div className="p-4 md:p-8">
//             {/* Profile Tab */}
//             {activeTab === "profile" && (
//               <ProfileContent studentData={studentData} />
//             )}

//             {/* Attendance Tab */}
//             {activeTab === "attendance" && (
//               <AttendanceContent
//                 attendance={attendance}
//                 attendancePercentage={attendancePercentage}
//                 presentDays={presentDays}
//                 absentDays={absentDays}
//                 lateDays={lateDays}
//                 totalDays={totalDays}
//                 getStatusBadge={getStatusBadge}
//               />
//             )}

//             {/* Due Payments Tab */}
//             {activeTab === "due" && (
//               <DueContent
//                 duePayments={duePayments}
//                 totalDue={totalDue}
//                 totalPaid={totalPaid}
//                 totalUnpaid={totalUnpaid}
//                 duePercentage={duePercentage}
//                 getStatusBadge={getStatusBadge}
//               />
//             )}

//             {/* Reports Tab */}
//             {activeTab === "reports" && <ReportsContent reports={reports} />}

//             {/* Settings Tab */}
//             {activeTab === "settings" && (
//               <SettingsContent studentData={studentData} />
//             )}

//             {/* Notifications Tab */}
//             {activeTab === "notifications" && <NotificationsContent />}
//           </div>
//         </main>
//       </div>

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Desktop Sidebar Component
// const DesktopSidebar = ({
//   studentData,
//   activeTab,
//   setActiveTab,
//   sidebarOpen,
//   setSidebarOpen,
// }: any) => {
//   return (
//     <div className="h-screen sticky top-0 flex flex-col">
//       {/* Logo */}
//       <div className="p-6 flex items-center justify-between border-b border-gray-100">
//         {sidebarOpen ? (
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
//               <GraduationCap size={20} className="text-white" />
//             </div>
//             <div>
//               <h2 className="font-bold text-gray-900">Student Portal</h2>
//               <p className="text-xs text-gray-500">Craft International</p>
//             </div>
//           </div>
//         ) : (
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mx-auto">
//             <GraduationCap size={20} className="text-white" />
//           </div>
//         )}
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className={!sidebarOpen ? "hidden" : ""}
//         >
//           <ChevronLeft size={18} />
//         </Button>
//       </div>

//       {/* Student Info Card */}
//       {sidebarOpen && (
//         <div className="p-4 mx-4 mt-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
//           <div className="flex items-center gap-3">
//             <Avatar className="h-12 w-12 border-2 border-white shadow-md">
//               <AvatarImage src={studentData.photo} />
//               <AvatarFallback className="bg-purple-200 text-purple-700">
//                 {studentData.name.charAt(0)}
//               </AvatarFallback>
//             </Avatar>
//             <div>
//               <p className="font-bold text-gray-900">{studentData.name}</p>
//               <p className="text-xs text-gray-600">{studentData.id}</p>
//               <Badge variant="outline" className="mt-1 bg-white/50 text-xs">
//                 {studentData.class} - {studentData.section}
//               </Badge>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeTab === item.id;

//           return (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
//                 isActive
//                   ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
//                   : "text-gray-700 hover:bg-purple-50"
//               } ${!sidebarOpen && "justify-center"}`}
//             >
//               <Icon
//                 size={20}
//                 className={isActive ? "text-white" : "text-gray-500"}
//               />
//               {sidebarOpen && <span className="font-medium">{item.label}</span>}
//               {sidebarOpen && item.id === "notifications" && (
//                 <Badge className="ml-auto bg-red-500 text-white border-0">
//                   3
//                 </Badge>
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       {/* Footer */}
//       <div className="p-4 border-t border-gray-100">
//         <button
//           className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-red-50 transition-all ${
//             !sidebarOpen && "justify-center"
//           }`}
//         >
//           <LogOut size={20} className="text-gray-500" />
//           {sidebarOpen && <span className="font-medium">Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// };

// // Mobile Sidebar Component
// const MobileSidebar = ({
//   studentData,
//   activeTab,
//   setActiveTab,
//   setMobileMenuOpen,
// }: any) => {
//   return (
//     <div className="h-full bg-white flex flex-col">
//       <div className="p-6 border-b border-gray-100 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
//             <GraduationCap size={20} className="text-white" />
//           </div>
//           <div>
//             <h2 className="font-bold text-gray-900">Student Portal</h2>
//             <p className="text-xs text-gray-500">Craft International</p>
//           </div>
//         </div>
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           <CloseIcon size={18} />
//         </Button>
//       </div>

//       <div className="p-4 mx-4 mt-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
//         <div className="flex items-center gap-3">
//           <Avatar className="h-12 w-12 border-2 border-white shadow-md">
//             <AvatarImage src={studentData.photo} />
//             <AvatarFallback className="bg-purple-200 text-purple-700">
//               {studentData.name.charAt(0)}
//             </AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="font-bold text-gray-900">{studentData.name}</p>
//             <p className="text-xs text-gray-600">{studentData.id}</p>
//             <Badge variant="outline" className="mt-1 bg-white/50 text-xs">
//               {studentData.class} - {studentData.section}
//             </Badge>
//           </div>
//         </div>
//       </div>

//       <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeTab === item.id;

//           return (
//             <button
//               key={item.id}
//               onClick={() => {
//                 setActiveTab(item.id);
//                 setMobileMenuOpen(false);
//               }}
//               className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
//                 isActive
//                   ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
//                   : "text-gray-700 hover:bg-purple-50"
//               }`}
//             >
//               <Icon
//                 size={20}
//                 className={isActive ? "text-white" : "text-gray-500"}
//               />
//               <span className="font-medium">{item.label}</span>
//               {item.id === "notifications" && (
//                 <Badge className="ml-auto bg-red-500 text-white border-0">
//                   3
//                 </Badge>
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       <div className="p-4 border-t border-gray-100">
//         <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-red-50 transition-all">
//           <LogOut size={20} className="text-gray-500" />
//           <span className="font-medium">Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// // Profile Content Component
// const ProfileContent = ({ studentData }: { studentData: StudentData }) => {
//   return (
//     <div className="space-y-6 animate-fadeIn">
//       {/* Profile Header */}
//       <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-20 -mb-20"></div>

//         <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
//           <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
//             <AvatarImage src={studentData.photo} />
//             <AvatarFallback className="bg-purple-200 text-purple-700 text-2xl">
//               {studentData.name.charAt(0)}
//             </AvatarFallback>
//           </Avatar>

//           <div className="text-center md:text-left">
//             <h1 className="text-3xl font-bold mb-1">{studentData.name}</h1>
//             <p className="text-purple-100 mb-2">{studentData.nameBangla}</p>
//             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//               <Badge
//                 variant="outline"
//                 className="bg-white/20 text-white border-white/30"
//               >
//                 {studentData.id}
//               </Badge>
//               <Badge
//                 variant="outline"
//                 className="bg-white/20 text-white border-white/30"
//               >
//                 {studentData.class} - {studentData.section}
//               </Badge>
//               <Badge
//                 variant="outline"
//                 className="bg-white/20 text-white border-white/30"
//               >
//                 Roll: {studentData.roll}
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Profile Details Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Personal Information */}
//         <Card className="lg:col-span-2 border-2 border-purple-100/50 shadow-lg">
//           <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
//             <CardTitle className="text-purple-700 flex items-center gap-2">
//               <User size={20} />
//               ব্যক্তিগত তথ্য
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500 mb-1">পুরো নাম (বাংলা)</p>
//                 <p className="font-medium text-gray-900">
//                   {studentData.nameBangla}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500 mb-1">
//                   Full Name (English)
//                 </p>
//                 <p className="font-medium text-gray-900">{studentData.name}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500 mb-1">জন্ম তারিখ</p>
//                 <p className="font-medium text-gray-900">
//                   {studentData.dateOfBirth}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500 mb-1">রক্তের গ্রুপ</p>
//                 <p className="font-medium text-gray-900">
//                   {studentData.bloodGroup}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500 mb-1">মোবাইল নম্বর</p>
//                 <p className="font-medium text-gray-900">{studentData.phone}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500 mb-1">ইমেইল</p>
//                 <p className="font-medium text-gray-900">{studentData.email}</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm text-gray-500 mb-1">ঠিকানা</p>
//                 <p className="font-medium text-gray-900">
//                   {studentData.address}
//                 </p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Academic Information */}
//         <Card className="border-2 border-purple-100/50 shadow-lg">
//           <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-purple-100">
//             <CardTitle className="text-indigo-700 flex items-center gap-2">
//               <GraduationCap size={20} />
//               একাডেমিক তথ্য
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">
//             <div className="space-y-4">
//               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
//                 <span className="text-gray-600">ছাত্র আইডি</span>
//                 <span className="font-bold text-purple-700">
//                   {studentData.id}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
//                 <span className="text-gray-600">শ্রেণি</span>
//                 <span className="font-medium">{studentData.class}</span>
//               </div>
//               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
//                 <span className="text-gray-600">শাখা</span>
//                 <span className="font-medium">{studentData.section}</span>
//               </div>
//               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
//                 <span className="text-gray-600">রোল নম্বর</span>
//                 <span className="font-medium">{studentData.roll}</span>
//               </div>
//               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
//                 <span className="text-gray-600">সেশন</span>
//                 <span className="font-medium">{studentData.session}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">ভর্তির তারিখ</span>
//                 <span className="font-medium">{studentData.admissionDate}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Family Information */}
//         <Card className="lg:col-span-3 border-2 border-purple-100/50 shadow-lg">
//           <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-purple-100">
//             <CardTitle className="text-green-700 flex items-center gap-2">
//               <Users size={20} />
//               পারিবারিক তথ্য
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
//                 <p className="text-sm text-blue-700 font-medium mb-2">
//                   পিতার নাম
//                 </p>
//                 <p className="text-gray-900">{studentData.fatherName}</p>
//               </div>
//               <div className="bg-pink-50/50 p-4 rounded-xl border border-pink-100">
//                 <p className="text-sm text-pink-700 font-medium mb-2">
//                   মাতার নাম
//                 </p>
//                 <p className="text-gray-900">{studentData.motherName}</p>
//               </div>
//               <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
//                 <p className="text-sm text-amber-700 font-medium mb-2">
//                   অভিভাবক
//                 </p>
//                 <p className="text-gray-900">{studentData.guardianName}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // Attendance Content Component
// const AttendanceContent = ({
//   attendance,
//   attendancePercentage,
//   presentDays,
//   absentDays,
//   lateDays,
//   totalDays,
//   getStatusBadge,
// }: any) => {
//   return (
//     <div className="space-y-6 animate-fadeIn">
//       <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//         <CalendarDays size={24} className="text-purple-600" />
//         Attendance Overview
//       </h2>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-green-700 font-medium">Present</p>
//                 <p className="text-3xl font-bold text-green-700">
//                   {presentDays}
//                 </p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
//                 <CheckCheck size={24} className="text-green-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-red-700 font-medium">Absent</p>
//                 <p className="text-3xl font-bold text-red-700">{absentDays}</p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
//                 <XCircle size={24} className="text-red-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-yellow-700 font-medium">Late</p>
//                 <p className="text-3xl font-bold text-yellow-700">{lateDays}</p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center">
//                 <Clock3 size={24} className="text-yellow-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-purple-700 font-medium">
//                   Attendance
//                 </p>
//                 <p className="text-3xl font-bold text-purple-700">
//                   {attendancePercentage.toFixed(1)}%
//                 </p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
//                 <Activity size={24} className="text-purple-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Attendance Chart/Progress */}
//       <Card className="border-2 border-purple-100/50 shadow-lg">
//         <CardHeader>
//           <CardTitle>Attendance Progress</CardTitle>
//           <CardDescription>
//             Overall attendance for the current month
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Present</span>
//               <span className="font-medium">{presentDays} days</span>
//             </div>
//             <Progress
//               value={(presentDays / totalDays) * 100}
//               className="h-2 bg-gray-100"
//             />

//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Late</span>
//               <span className="font-medium">{lateDays} days</span>
//             </div>
//             <Progress
//               value={(lateDays / totalDays) * 100}
//               className="h-2 bg-gray-100"
//             />

//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Absent</span>
//               <span className="font-medium">{absentDays} days</span>
//             </div>
//             <Progress
//               value={(absentDays / totalDays) * 100}
//               className="h-2 bg-gray-100"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Attendance Table */}
//       <Card className="border-2 border-purple-100/50 shadow-lg">
//         <CardHeader className="flex flex-row items-center justify-between">
//           <div>
//             <CardTitle>Daily Attendance</CardTitle>
//             <CardDescription>
//               Your attendance records for February 2025
//             </CardDescription>
//           </div>
//           <div className="flex gap-2">
//             <Button variant="outline" size="sm">
//               <DownloadCloud size={16} className="mr-2" />
//               Export
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="rounded-xl border overflow-hidden">
//             <UITable>
//               <TableHeader className="bg-gray-50">
//                 <TableRow>
//                   <TableHead className="font-semibold">Date</TableHead>
//                   <TableHead className="font-semibold">Status</TableHead>
//                   <TableHead className="font-semibold">Check In</TableHead>
//                   <TableHead className="font-semibold">Check Out</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {attendance.map((record: any, index: number) => (
//                   <TableRow key={index}>
//                     <TableCell>{record.date}</TableCell>
//                     <TableCell>{getStatusBadge(record.status)}</TableCell>
//                     <TableCell>{record.checkIn}</TableCell>
//                     <TableCell>{record.checkOut}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </UITable>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// // Due Payments Content Component
// const DueContent = ({
//   duePayments,
//   totalDue,
//   totalPaid,
//   totalUnpaid,
//   duePercentage,
//   getStatusBadge,
// }: any) => {
//   return (
//     <div className="space-y-6 animate-fadeIn">
//       <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//         <Wallet size={24} className="text-purple-600" />
//         Due Payments
//       </h2>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-blue-700 font-medium">Total Due</p>
//                 <p className="text-3xl font-bold text-blue-700">
//                   ৳{totalDue.toLocaleString()}
//                 </p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
//                 <Wallet size={24} className="text-blue-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-green-700 font-medium">Total Paid</p>
//                 <p className="text-3xl font-bold text-green-700">
//                   ৳{totalPaid.toLocaleString()}
//                 </p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
//                 <CheckCircle size={24} className="text-green-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-red-700 font-medium">Remaining</p>
//                 <p className="text-3xl font-bold text-red-700">
//                   ৳{totalUnpaid.toLocaleString()}
//                 </p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
//                 <AlertTriangle size={24} className="text-red-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-purple-700 font-medium">
//                   Payment Rate
//                 </p>
//                 <p className="text-3xl font-bold text-purple-700">
//                   {duePercentage.toFixed(1)}%
//                 </p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
//                 <TrendingUp size={24} className="text-purple-700" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Payment Progress */}
//       <Card className="border-2 border-purple-100/50 shadow-lg">
//         <CardHeader>
//           <CardTitle>Payment Progress</CardTitle>
//           <CardDescription>Total payments made vs total due</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span className="text-gray-600">
//                 Paid: ৳{totalPaid.toLocaleString()}
//               </span>
//               <span className="text-gray-600">
//                 Total: ৳{totalDue.toLocaleString()}
//               </span>
//             </div>
//             <Progress value={duePercentage} className="h-3 bg-gray-100" />
//             <div className="flex justify-between text-sm">
//               <span className="text-green-600 font-medium">
//                 Paid: ৳{totalPaid.toLocaleString()}
//               </span>
//               <span className="text-red-600 font-medium">
//                 Due: ৳{totalUnpaid.toLocaleString()}
//               </span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Payments Table */}
//       <Card className="border-2 border-purple-100/50 shadow-lg">
//         <CardHeader className="flex flex-row items-center justify-between">
//           <div>
//             <CardTitle>Payment History</CardTitle>
//             <CardDescription>Your monthly fee payment records</CardDescription>
//           </div>
//           <div className="flex gap-2">
//             <Button variant="outline" size="sm">
//               <Filter size={16} className="mr-2" />
//               Filter
//             </Button>
//             <Button className="bg-gradient-to-r from-purple-600 to-indigo-600">
//               <Plus size={16} className="mr-2" />
//               Pay Now
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="rounded-xl border overflow-hidden">
//             <UITable>
//               <TableHeader className="bg-gray-50">
//                 <TableRow>
//                   <TableHead className="font-semibold">Month</TableHead>
//                   <TableHead className="font-semibold">Year</TableHead>
//                   <TableHead className="font-semibold">Amount</TableHead>
//                   <TableHead className="font-semibold">Paid</TableHead>
//                   <TableHead className="font-semibold">Due</TableHead>
//                   <TableHead className="font-semibold">Due Date</TableHead>
//                   <TableHead className="font-semibold">Status</TableHead>
//                   <TableHead className="font-semibold">Action</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {duePayments.map((payment: DuePayment) => (
//                   <TableRow key={payment.id}>
//                     <TableCell className="font-medium">
//                       {payment.month}
//                     </TableCell>
//                     <TableCell>{payment.year}</TableCell>
//                     <TableCell>৳{payment.amount.toLocaleString()}</TableCell>
//                     <TableCell>
//                       ৳{payment.paidAmount.toLocaleString()}
//                     </TableCell>
//                     <TableCell
//                       className={
//                         payment.amount - payment.paidAmount > 0
//                           ? "text-red-600 font-medium"
//                           : "text-green-600"
//                       }
//                     >
//                       ৳{(payment.amount - payment.paidAmount).toLocaleString()}
//                     </TableCell>
//                     <TableCell>{payment.dueDate}</TableCell>
//                     <TableCell>{getStatusBadge(payment.status)}</TableCell>
//                     <TableCell>
//                       {payment.status !== "paid" && (
//                         <Button
//                           size="sm"
//                           variant="outline"
//                           className="h-8 px-2"
//                         >
//                           Pay
//                         </Button>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </UITable>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// // Reports Content Component
// const ReportsContent = ({ reports }: { reports: Report[] }) => {
//   const getReportIcon = (type: string) => {
//     switch (type) {
//       case "exam":
//         return <Award className="text-purple-600" size={20} />;
//       case "progress":
//         return <TrendingUp className="text-green-600" size={20} />;
//       case "attendance":
//         return <CalendarDays className="text-blue-600" size={20} />;
//       case "fee":
//         return <Wallet className="text-amber-600" size={20} />;
//       default:
//         return <FileText className="text-gray-600" size={20} />;
//     }
//   };

//   return (
//     <div className="space-y-6 animate-fadeIn">
//       <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//         <FileText size={24} className="text-purple-600" />
//         Reports & Documents
//       </h2>

//       {/* Report Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {reports.map((report) => (
//           <Card
//             key={report.id}
//             className="border-2 border-purple-100/50 shadow-lg hover:shadow-xl transition-all group"
//           >
//             <CardContent className="p-6">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
//                   {getReportIcon(report.type)}
//                 </div>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon" className="h-8 w-8">
//                       <MoreVertical size={16} />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem>
//                       <Download size={14} className="mr-2" />
//                       Download
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                       <Eye size={14} className="mr-2" />
//                       Preview
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                       <Share2 size={14} className="mr-2" />
//                       Share
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>

//               <h3 className="font-bold text-gray-900 mb-1">{report.title}</h3>
//               <p className="text-sm text-gray-500 mb-4">{report.date}</p>

//               <div className="flex items-center justify-between">
//                 <Badge variant="outline" className="capitalize">
//                   {report.type}
//                 </Badge>
//                 <Button size="sm" variant="ghost" className="gap-1">
//                   <Download size={14} />
//                   PDF
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Report Categories */}
//       <Card className="border-2 border-purple-100/50 shadow-lg">
//         <CardHeader>
//           <CardTitle>Report Categories</CardTitle>
//           <CardDescription>Browse reports by category</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-purple-50 p-4 rounded-xl text-center hover:bg-purple-100 transition-colors cursor-pointer">
//               <Award size={24} className="mx-auto mb-2 text-purple-600" />
//               <p className="font-medium text-sm">Exam Reports</p>
//               <p className="text-xs text-gray-500">2 reports</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-xl text-center hover:bg-green-100 transition-colors cursor-pointer">
//               <TrendingUp size={24} className="mx-auto mb-2 text-green-600" />
//               <p className="font-medium text-sm">Progress</p>
//               <p className="text-xs text-gray-500">1 report</p>
//             </div>
//             <div className="bg-blue-50 p-4 rounded-xl text-center hover:bg-blue-100 transition-colors cursor-pointer">
//               <CalendarDays size={24} className="mx-auto mb-2 text-blue-600" />
//               <p className="font-medium text-sm">Attendance</p>
//               <p className="text-xs text-gray-500">1 report</p>
//             </div>
//             <div className="bg-amber-50 p-4 rounded-xl text-center hover:bg-amber-100 transition-colors cursor-pointer">
//               <Wallet size={24} className="mx-auto mb-2 text-amber-600" />
//               <p className="font-medium text-sm">Fee Reports</p>
//               <p className="text-xs text-gray-500">1 report</p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// // Settings Content Component
// const SettingsContent = ({ studentData }: { studentData: StudentData }) => {
//   return (
//     <div className="space-y-6 animate-fadeIn">
//       <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//         <Settings size={24} className="text-purple-600" />
//         Settings
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Profile Settings */}
//         <Card className="lg:col-span-2 border-2 border-purple-100/50 shadow-lg">
//           <CardHeader>
//             <CardTitle>Profile Settings</CardTitle>
//             <CardDescription>Update your personal information</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name (English)</Label>
//                 <Input id="name" defaultValue={studentData.name} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="nameBangla">Full Name (Bangla)</Label>
//                 <Input id="nameBangla" defaultValue={studentData.nameBangla} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   defaultValue={studentData.email}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input id="phone" defaultValue={studentData.phone} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="address">Address</Label>
//                 <Input id="address" defaultValue={studentData.address} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="bloodGroup">Blood Group</Label>
//                 <Input id="bloodGroup" defaultValue={studentData.bloodGroup} />
//               </div>
//             </div>
//             <Button className="bg-gradient-to-r from-purple-600 to-indigo-600">
//               Save Changes
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Notification Settings */}
//         <Card className="border-2 border-purple-100/50 shadow-lg">
//           <CardHeader>
//             <CardTitle>Notifications</CardTitle>
//             <CardDescription>
//               Manage your notification preferences
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="font-medium">Email Notifications</p>
//                 <p className="text-sm text-gray-500">
//                   Receive updates via email
//                 </p>
//               </div>
//               <Switch defaultChecked />
//             </div>
//             <Separator />
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="font-medium">SMS Alerts</p>
//                 <p className="text-sm text-gray-500">Get text message alerts</p>
//               </div>
//               <Switch />
//             </div>
//             <Separator />
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="font-medium">Attendance Reminders</p>
//                 <p className="text-sm text-gray-500">
//                   Daily attendance notifications
//                 </p>
//               </div>
//               <Switch defaultChecked />
//             </div>
//             <Separator />
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="font-medium">Payment Due Alerts</p>
//                 <p className="text-sm text-gray-500">
//                   Reminders for fee payments
//                 </p>
//               </div>
//               <Switch defaultChecked />
//             </div>
//           </CardContent>
//         </Card>

//         {/* Security Settings */}
//         <Card className="lg:col-span-3 border-2 border-purple-100/50 shadow-lg">
//           <CardHeader>
//             <CardTitle>Security</CardTitle>
//             <CardDescription>Manage your account security</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <h3 className="font-semibold">Change Password</h3>
//                 <div className="space-y-2">
//                   <Label htmlFor="currentPassword">Current Password</Label>
//                   <Input id="currentPassword" type="password" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="newPassword">New Password</Label>
//                   <Input id="newPassword" type="password" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="confirmPassword">Confirm New Password</Label>
//                   <Input id="confirmPassword" type="password" />
//                 </div>
//                 <Button variant="outline">Update Password</Button>
//               </div>

//               <div className="space-y-4">
//                 <h3 className="font-semibold">Two-Factor Authentication</h3>
//                 <p className="text-sm text-gray-600">
//                   Add an extra layer of security to your account
//                 </p>
//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
//                   <div>
//                     <p className="font-medium">Enable 2FA</p>
//                     <p className="text-xs text-gray-500">
//                       Protect your account with 2FA
//                     </p>
//                   </div>
//                   <Switch />
//                 </div>

//                 <h3 className="font-semibold mt-6">Login Sessions</h3>
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                     <div>
//                       <p className="font-medium text-sm">Current Session</p>
//                       <p className="text-xs text-gray-500">
//                         Chrome • Windows • Dhaka
//                       </p>
//                     </div>
//                     <Badge className="bg-green-100 text-green-700">
//                       Active
//                     </Badge>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // Notifications Content Component
// const NotificationsContent = () => {
//   const notifications = [
//     {
//       id: 1,
//       title: "Fee Payment Reminder",
//       message: "Your February fee payment is due in 3 days",
//       time: "2 hours ago",
//       type: "payment",
//       read: false,
//     },
//     {
//       id: 2,
//       title: "Attendance Alert",
//       message: "You were marked absent on 05 Feb 2025",
//       time: "Yesterday",
//       type: "attendance",
//       read: false,
//     },
//     {
//       id: 3,
//       title: "Exam Schedule",
//       message: "Half-yearly exam schedule has been published",
//       time: "2 days ago",
//       type: "exam",
//       read: true,
//     },
//     {
//       id: 4,
//       title: "Report Available",
//       message: "Your January progress report is now available",
//       time: "3 days ago",
//       type: "report",
//       read: true,
//     },
//     {
//       id: 5,
//       title: "Class Rescheduled",
//       message: "Mathematics class on Friday has been rescheduled",
//       time: "5 days ago",
//       type: "class",
//       read: true,
//     },
//   ];

//   const getNotificationIcon = (type: string) => {
//     switch (type) {
//       case "payment":
//         return <Wallet className="text-amber-600" size={20} />;
//       case "attendance":
//         return <CalendarDays className="text-blue-600" size={20} />;
//       case "exam":
//         return <Award className="text-purple-600" size={20} />;
//       case "report":
//         return <FileText className="text-green-600" size={20} />;
//       default:
//         return <Info className="text-gray-600" size={20} />;
//     }
//   };

//   return (
//     <div className="space-y-6 animate-fadeIn">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//           <Bell size={24} className="text-purple-600" />
//           Notifications
//         </h2>
//         <Button variant="outline" size="sm">
//           Mark all as read
//         </Button>
//       </div>

//       <Card className="border-2 border-purple-100/50 shadow-lg">
//         <CardContent className="p-0">
//           <div className="divide-y">
//             {notifications.map((notification) => (
//               <div
//                 key={notification.id}
//                 className={`p-4 hover:bg-gray-50 transition-colors flex items-start gap-4 ${!notification.read && "bg-purple-50/50"}`}
//               >
//                 <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
//                   {getNotificationIcon(notification.type)}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between mb-1">
//                     <h4 className="font-semibold text-gray-900">
//                       {notification.title}
//                     </h4>
//                     {!notification.read && (
//                       <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
//                     )}
//                   </div>
//                   <p className="text-sm text-gray-600 mb-1">
//                     {notification.message}
//                   </p>
//                   <p className="text-xs text-gray-400">{notification.time}</p>
//                 </div>
//                 <Button variant="ghost" size="icon" className="h-8 w-8">
//                   <MoreVertical size={14} />
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-center p-4 border-t">
//           <Button variant="ghost" size="sm">
//             View All Notifications
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default UserProfilePage;
