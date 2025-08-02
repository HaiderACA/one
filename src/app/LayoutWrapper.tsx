'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  if (!session) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/todos">Todos</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><button onClick={() => signOut()} className="btn btn-ghost">Logout</button></li>
          </ul>
        </div>
      </div>
      {children}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link href="/" className="link link-hover">Home</Link>
          <Link href="/todos" className="link link-hover">Todos</Link>
        </div> 
        <aside>
          <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
}
