import { useLocation, Link } from "react-router-dom"

export default function Sidebar({ onNavigate }) {
  const { pathname } = useLocation()

  // 메뉴를 홈/프로필만 남김
  const items = [
    { to: "/", label: "홈", icon: "🏠" },
    { to: "/profiles", label: "프로필", icon: "👥" },
  ]

  const base =
    "w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-zinc-300 ring-offset-2"

  return (
    <nav className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm">
      <ul className="space-y-1">
        {items.map((it) => {
          const active = pathname === it.to
          return (
            <li key={it.to}>
              <Link
                to={it.to}
                onClick={onNavigate} // 모바일: 클릭 후 패널 닫기
                className={`${base} ${
                  active
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <span aria-hidden>{it.icon}</span>
                <span>{it.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
