import { useState } from "react"

import Sidebar from "./Sidebar.jsx"

export default function Header() {
  const [open, setOpen] = useState(false) // 모바일 사이드바 상태

  return (
    <header className="relative flex items-center justify-between px-4 pt-4">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-offset-2 transition
                     hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-300"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        <div className="text-sm font-semibold tracking-tight">MyApp</div>
      </div>

      {/* 오른쪽: 로그인/회원가입 */}
      <nav className="flex items-center gap-2 text-xs">
        <button className="h-8 rounded-md px-3 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-300">
          로그인
        </button>
        <button className="h-8 rounded-md bg-zinc-900 px-3 text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300">
          회원가입
        </button>
      </nav>

      {/* 모바일 오프캔버스 */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 lg:hidden
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 transform border-r border-zinc-200 bg-white p-2 transition-transform duration-200 ease-out lg:hidden
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
      >
        <div className="flex items-center justify-between px-2 py-3">
          <div className="text-sm font-medium">메뉴</div>
          <button
            className="h-8 w-8 rounded-md transition hover:bg-zinc-100"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="h-px bg-zinc-200" />
        <div className="p-2">
          <Sidebar mode="mobile" onNavigate={() => setOpen(false)} />
        </div>
      </aside>
    </header>
  )
}
