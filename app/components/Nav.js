"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from '@/context/ToastContext';

const LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tickets", label: "My tickets" },
  { href: "/tickets/new", label: "New ticket" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
    const { showToast }    = useToast();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 async function handleLogout() {
    const res=  await fetch("/api/logout", {
    method: "POST",
  });
console.log("the res is",res);
if(res.ok){
      const data = await res.json();

            showToast(data.message);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");

}
  }
//       const stored2= localStorage.getItem("user");

// console.log("the user details zain are"+stored2)
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "?";

  return (
    <header className="support-nav">
      <div className="support-nav-inner">
        {/* <span className="support-nav-brand">Support</span> */}
{/* <!-- Replace your current .support-nav-brand span with this: --> */}
<div className="support-brand-wrapper">
  <div className="support-brand-icon">
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </div>
  <span className="support-nav-brand-text">Support</span>
</div>
        <div className="support-nav-right">
          <nav className="support-nav-links">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "support-nav-link--active" : "support-nav-link"}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="support-account" ref={menuRef}>
            <button className="support-account-trigger" onClick={() => setOpen((o) => !o)}>
              <span className="support-account-avatar">{initial}</span>
              <span className="support-account-name">{user?.name || "Account"}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                className={`support-account-caret${open ? " support-account-caret--open" : ""}`}
              >
                <path
                  d="M1 3L5 7L9 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {open && (
              <div className="support-account-menu">
                <div className="support-account-menu-header">
                  <p className="support-account-menu-name">{user?.name || "Customer"}</p>
                  <p className="support-account-menu-email">{user?.email || ""}</p>
                </div>
                <button className="support-account-menu-logout" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
