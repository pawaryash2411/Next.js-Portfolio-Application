// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { LucideIcon, Home, User, Briefcase, FileText } from "lucide-react";
// import { cn } from "@/lib/utils";

// const navItems = [
//   { name: "Home", url: "#", icon: Home },
//   { name: "Skills", url: "#skills", icon: FileText },
//   { name: "Projects", url: "#projects", icon: Briefcase },
//   { name: "Contact", url: "#contact", icon: User },
// ];

// interface NavItem {
//   name: string;
//   url: string;
//   icon: LucideIcon;
// }

// interface NavBarProps {
//   items?: NavItem[];
//   className?: string;
// }

// function NavBar({ items = navItems, className }: NavBarProps) {
//   const [activeTab, setActiveTab] = useState(items[0].name);

//   return (
//     <div
//       className={cn(
//         "fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-4",
//         className
//       )}
//     >
//       <div
//         className="flex items-center gap-1 bg-[#03001417] border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg
//        shadow-[#2A0E61]/50 "
//       >
//         {items.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeTab === item.name;

//           return (
//             <Link
//               key={item.name}
//               href={item.url}
//               onClick={() => setActiveTab(item.name)}
//               className={cn(
//                 "relative cursor-pointer text-sm font-medium px-8 py-2 rounded-full transition-colors",
//                 "text-white/70 hover:text-white",
//                 isActive && "text-black"
//               )}
//             >
//               <span className="hidden md:inline poppins-font">{item.name}</span>
//               <span className="md:hidden flex justify-center">
//                 <Icon size={18} strokeWidth={2.5} />
//               </span>
//               {isActive && (
//                 <motion.div
//                   layoutId="lamp"
//                   className="absolute inset-0 w-full bg-white/80 rounded-full -z-10"
//                   initial={false}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 30,
//                   }}
//                 >
//                   <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-white/80 rounded-t-full">
//                     <div className="absolute w-10 h-6 rounded-full blur-md -top-2 -left-2" />
//                     <div className="absolute w-6 h-6 rounded-full blur-md -top-1" />
//                     <div className="absolute w-4 h-4 rounded-full blur-sm top-0 left-1" />
//                   </div>
//                 </motion.div>
//               )}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default NavBar;

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LucideIcon,
  Home,
  User,
  Briefcase,
  FileText,
  NotebookPen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "Skills", url: "#skills", icon: FileText },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Blogs", url: "#blogs", icon: NotebookPen },
  { name: "Contact", url: "#contact", icon: User },
];

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items?: NavItem[];
  className?: string;
}

function NavBar({ items = navItems, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn("fixed bottom-4 left-1/2 -translate-x-1/2 z-50", className)}
    >
      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-2xl border border-white/20 py-1 px-1 rounded-2xl shadow-lg shadow-black/10">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-8 py-3 rounded-xl transition-all duration-300",
                "text-white/90 hover:text-white",
                isActive ? "text-white" : "hover:bg-white/5"
              )}
            >
              <span className="hidden md:inline-block poppins-font font-medium tracking-wide">
                {item.name}
              </span>
              <span className="md:hidden flex justify-center">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/20 rounded-xl -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-xl" />

                  {/* Top highlight for iOS effect */}
                  {/* <div className="absolute top-0 left-0 right-0 h-px bg-white/30 rounded-t-xl" /> */}
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
