"use client";
import { useState } from "react";

export default function Home() {
  const [showComment, setShowComment] = useState(false);

  const [form, setForm] = useState({
    patreonNick: "",
    characterName: "",
    titleName: "",
    ageConfirmed: false,
    comment: "",
  });

  // Проверка обязательных полей
  const isValid =
    form.patreonNick.trim() !== "" &&
    form.characterName.trim() !== "" &&
    form.titleName.trim() !== "" &&
    form.ageConfirmed;

  // Отправка формы в API
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Request submitted! ID: " + data._id);

        // Очистка формы после отправки
        setForm({
          patreonNick: "",
          characterName: "",
          titleName: "",
          ageConfirmed: false,
          comment: "",
        });
        setShowComment(false);
      } else {
        const err = await res.json();
        alert("Error: " + err.error);
      }
    } catch (error: any) {
      alert("Fetch error: " + error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-black transition-colors p-6">
      <div className="w-full max-w-xl bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Character Request
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Submit your request below
          </p>
        </div>

        <form className="space-y-4">

          {/* Patreon Nick */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Patreon Nickname *
            </label>
            <input
              type="text"
              value={form.patreonNick}
              onChange={(e) =>
                setForm({ ...form, patreonNick: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              placeholder="Enter your Patreon nickname"
            />
          </div>

          {/* Character Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Character Name *
            </label>
            <input
              type="text"
              value={form.characterName}
              onChange={(e) =>
                setForm({ ...form, characterName: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              placeholder="Enter character name"
            />
          </div>

          {/* Character Source */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Character Source *
            </label>
            <input
              type="text"
              value={form.titleName}
              onChange={(e) =>
                setForm({ ...form, titleName: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              placeholder="Webtoon / Anime / Game etc."
            />
          </div>

          {/* Age Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.ageConfirmed}
              onChange={(e) =>
                setForm({ ...form, ageConfirmed: e.target.checked })
              }
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              I confirm the character is 18+
            </span>
          </div>

          {/* Toggle Comment */}
          <button
            type="button"
            onClick={() => setShowComment(!showComment)}
            className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition"
          >
            {showComment ? "Hide comment" : "Add comment"}
          </button>

          {/* Comment Field */}
          {showComment && (
            <div>
              <textarea
                rows={3}
                value={form.comment}
                onChange={(e) =>
                  setForm({ ...form, comment: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                placeholder="Optional details..."
              />
            </div>
          )}

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full py-2 rounded-lg font-medium transition
              ${
                isValid
                  ? "bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-zinc-700 dark:text-zinc-400"
              }`}
          >
            Continue
          </button>

        </form>
      </div>
    </main>
  );
}
