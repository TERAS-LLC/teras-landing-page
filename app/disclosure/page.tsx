import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "決算公告 | LLC TERAS",
  robots: {
    index: false,
    follow: false,
  },
}

const documents = [
  // PDF を public/documents/ に配置した後、ここにエントリを追加してください
  // { title: "第1期 決算公告（2024年度）", fileName: "disclosure-2024.pdf" },
]

export default function DisclosurePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-lg font-semibold tracking-widest text-foreground uppercase mb-4">
            決算公告
          </h1>
          <div className="w-full h-[0.5px] bg-foreground mb-12" />

          {documents.length > 0 ? (
            <ul className="space-y-6">
              {documents.map((doc) => (
                <li key={doc.fileName}>
                  <a
                    href={`/documents/${doc.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors"
                  >
                    {doc.title}（PDF）
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm font-light text-foreground/60">
              現在掲示中の決算公告はありません。
            </p>
          )}

          <div className="mt-16 pt-8 border-t border-foreground/10">
            <p className="text-xs font-light text-foreground/40">
              合同会社TERAS
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
