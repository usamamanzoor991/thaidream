"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { RiRobot2Line, RiRobot2Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Navbar = () => {
  const [hovered, setHovered] = useState({
    home: false,
    dashboard: false,
    agent: false,
  });
  const { connected } = useWallet();
  const isConnected = connected;
  
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  // Scroll detection for desktop navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex justify-between items-center container mx-auto px-6 border border-white bg-black/30 rounded-b-4xl backdrop-blur-2xl dark:border-white/10 h-20 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/deesigg.png" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <h1 className="text-sm font-medium text-white">Thai</h1>
            <h1 className="text-xl font-bold text-white leading-4">Dream</h1>
          </div>
        </div>

        <div className="flex items-center gap-16"
        
        >
          <Link
            className="flex justify-center items-center gap-2 cursor-pointer"
            onMouseEnter={() => setHovered({ ...hovered, home: true })}
            onMouseLeave={() => setHovered({ ...hovered, home: false })}
            href="/"
          >
             {pathname === "/" || hovered.home ? (
      <FaHome className="w-8 h-8 text-primary" />
    ) : (
      <IoHomeOutline className="w-8 h-8 text-white" />
    )}
            <h1 className="text-sm font-semibold text-white mt-1">Home</h1>
          </Link>

{isConnected && (
          <Link
            className="flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setHovered({ ...hovered, dashboard: true })}
            onMouseLeave={() => setHovered({ ...hovered, dashboard: false })}
            href="/dashboard"
          >
            
            {pathname === "/dashboard" ||  hovered.dashboard ? (
              <MdSpaceDashboard className="w-8 h-8 text-primary" />
            ) : (
              <MdOutlineSpaceDashboard className="w-8 h-8 text-white" />
            )}
            <h1 className="text-sm font-semibold text-white">Dashboard</h1>
          </Link>
)}

          <Link
            className="flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setHovered({ ...hovered, agent: true })}
            onMouseLeave={() => setHovered({ ...hovered, agent: false })}
            href="/agent"
          >
            {pathname.startsWith("/agent") ||  hovered.agent ? (
              <RiRobot2Fill className="w-8 h-8 text-primary" />
            ) : (
              <RiRobot2Line className="w-8 h-8 text-white" />
            )}
            <h1 className="text-sm font-semibold text-white">Agent</h1>
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 border  md:hidden lg:flex border-gray-300 dark:border-white/10 px-3 py-2 rounded-xl">
            <GoDotFill size={16} className="animate-pulse text-green-600" />
            <h1 className="text-sm text-primary font-semibold">Solana</h1>
          </div>
          {/* <WalletButton /> */}
          <WalletMultiButton style={{backgroundColor: "var(--primary)", color: "white" , borderRadius: "12px" , fontSize: "14px", padding: "0px 12px" }} />
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="w-full fixed top-2 flex items-center justify-center">
      <div className="md:hidden container top-0 left-0 w-full z-50 bg-black/30  border border-white rounded-full backdrop-blur-2xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/deesigg.png" className="w-10 h-10" />
          <h1 className="font-bold text-base text-white">Thai Dream</h1>
        </div>

        {/* <WalletButton /> */}
        <WalletMultiButton />
      </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-black/30 rounded-full backdrop-blur-2xl border-t border-gray-200 px-6 py-2 flex justify-between items-center">
        <Link
          className="flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setHovered({ ...hovered, home: true })}
          onMouseLeave={() => setHovered({ ...hovered, home: false })}
          href="/"
        >
          {pathname === "/" ||  hovered.home ? (
            <FaHome className="w-6 h-6 text-primary" />
          ) : (
            <IoHomeOutline className="w-6 h-6 text-white" />
          )}
          <span className="text-xs text-white">Home</span>
        </Link>
{isConnected && (
        <Link
          className="flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setHovered({ ...hovered, dashboard: true })}
          onMouseLeave={() => setHovered({ ...hovered, dashboard: false })}
          href="/dashboard"
        >
          {pathname === "/dashboard" || hovered.dashboard ? (
            <MdSpaceDashboard className="w-6 h-6 text-primary" />
          ) : (
            <MdOutlineSpaceDashboard className="w-6 h-6 text-white" />
          )}
          <span className="text-xs text-white">Dashboard</span>
        </Link>
)}
        <Link
          className="flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setHovered({ ...hovered, agent: true })}
          onMouseLeave={() => setHovered({ ...hovered, agent: false })}
          href="/agent"
        >
          {pathname === "/agent" || hovered.agent ? (
            <RiRobot2Fill className="w-6 h-6 text-primary" />
          ) : (
            <RiRobot2Line className="w-6 h-6 text-white" />
          )}
          <span className="text-xs text-white">Agent</span>
        </Link>
      </div>

      {/* Page spacing to avoid overlap with fixed bars */}
      <div className="pt-16 md:pt-0"></div>
    </div>
  );
};

export default Navbar;
