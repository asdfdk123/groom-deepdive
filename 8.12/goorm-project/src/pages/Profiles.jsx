const MEMBERS = [
  {
    id: 1,
    name: "최원형",
    role: "사람",
    avatar: "",
    github: "#",
    blog: "#",
  },
]

function Card({ children }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
      {children}
    </div>
  )
}

export default function Profiles() {
  return (
    <section className="pb-6">
      <div className="mb-6 rounded-lg border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold">
        MyApp
      </div>

      <h2 className="mb-6 flex items-center gap-2 text-xl font-extrabold tracking-tight text-zinc-800">
        <span className="text-2xl">👩‍🚀</span>
        <span>우리 팀 프로필</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MEMBERS.map((m) => (
          <Card key={m.id}>
            <div className="flex flex-col items-center">
              <img
                src={m.avatar}
                alt={`${m.name} avatar`}
                className="mb-4 size-24 rounded-full object-cover shadow-md ring-2 ring-white"
              />

              <div className="text-base font-bold text-zinc-900">{m.name}</div>
              <div className="mt-1 text-center text-sm text-zinc-500">{m.role}</div>

              <div className="mt-4 flex gap-4">
                <a
                  href={m.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={m.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-green-600 hover:underline"
                >
                  Blog
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
