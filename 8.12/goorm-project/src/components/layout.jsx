import { Outlet } from "react-router-dom"

import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"

export default function Layout() {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto max-w-[380px] lg:max-w-6xl px-3 sm:px-4 py-6 lg:p-8">
        <div className="rounded-2xl border border-zinc-200/70 bg-white shadow-xl">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-6">
            <aside className="hidden lg:block sticky top-6 self-start p-3">
              <Sidebar mode="desktop" />
            </aside>

            <main className="flex min-h-[60vh] flex-col">
              <Header />

              <div className="my-3 h-px bg-zinc-200" />

              <div className="px-4 pb-3">
                <Outlet />
              </div>

              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
