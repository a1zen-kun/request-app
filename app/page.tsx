"use client";
import { useRouter } from "next/navigation";

export default function LanguageSelect() {
  const router = useRouter();

  const languages = [
    { code: "en", label: "English" },
    { code: "ko", label: "한국어" },
    { code: "zh", label: "中文" },
    { code: "ja", label: "日本語" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-black p-6">
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Select your language
        </h1>

        <div className="flex flex-col gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => router.push(`/${lang.code}`)}
              className="px-8 py-3 bg-white dark:bg-zinc-800 rounded-xl shadow hover:scale-105 transition font-medium"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}


