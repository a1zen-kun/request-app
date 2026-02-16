export default function Home() {
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

  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Patreon Nickname *
    </label>
    <input
      type="text"
      className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      placeholder="Enter your Patreon nickname"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Character Name *
    </label>
    <input
      type="text"
      className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      placeholder="Enter character name"
    />
  </div>

  <div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    Character Source
  </label>
  <input
    type="text"
    className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
    placeholder="Anime / Game / Original etc."
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    Breast Size
  </label>
  <select
    className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
    defaultValue=""
  >
    <option value="">Standard</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
  </select>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    Additional Comment
  </label>
  <textarea
    rows={3}
    className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
    placeholder="Optional details..."
  />
</div>

<div className="flex items-center gap-2">
  <input
    type="checkbox"
    className="w-4 h-4"
  />
  <span className="text-sm text-gray-700 dark:text-gray-300">
    I confirm the character is 18+
  </span>
</div>


  <button
    type="button"
    className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-lg font-medium hover:opacity-90 transition"
  >
    Continue
  </button>

</form>

      </div>
    </main>
  );
}
