"use client";
import { useState } from "react";

export default function Home() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [form, setForm] = useState({
  patreonNick: "",
  characterName: "",
  titleName: "",
  ageConfirmed: false,

  // Female settings
  breastSize: "Standard",
  femaleHairOptions: [],

  // Male settings
  skinColor: "Light",
  bodyType: "Standard",

  comment: "",
});


  // Проверка обязательных полей
  const isValid =
    form.patreonNick.trim() !== "" &&
    form.characterName.trim() !== "" &&
    form.titleName.trim() !== "" &&
    form.ageConfirmed;

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
              onChange={(e) => setForm({ ...form, patreonNick: e.target.value })}
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
              onChange={(e) => setForm({ ...form, characterName: e.target.value })}
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
              onChange={(e) => setForm({ ...form, titleName: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              placeholder="Anime / Game / Original etc."
            />
          </div>

          {/* Age Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.ageConfirmed}
              onChange={(e) => setForm({ ...form, ageConfirmed: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              I confirm the character is 18+
            </span>
          </div>

          {/* Advanced Settings Toggle */}
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition"
          >
            {showAdvanced ? "Hide advanced settings" : "Advanced settings"}
          </button>

          {/* Advanced Settings */}
          {showAdvanced && (
  <div className="space-y-6 pt-4 border-t border-gray-200 dark:border-zinc-700">

    {/* ================= FEMALE SETTINGS ================= */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
        Female Settings
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Breast Size
        </label>
        <select
          value={form.breastSize}
          onChange={(e) =>
            setForm({ ...form, breastSize: e.target.value })
          }
          className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          <option value="Standard">Standard</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      
      </div>
      
      <div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    Hair Options
  </label>

  <div className="space-y-2">

    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <input
        type="checkbox"
        checked={form.femaleHairOptions.includes("Pubic")}
        onChange={(e) => {
          const value = "Pubic";
          setForm({
            ...form,
            femaleHairOptions: e.target.checked
              ? [...form.femaleHairOptions, value]
              : form.femaleHairOptions.filter((item) => item !== value),
          });
        }}
      />
      Pubic Hair
    </label>

    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <input
        type="checkbox"
        checked={form.femaleHairOptions.includes("Armpit")}
        onChange={(e) => {
          const value = "Armpit";
          setForm({
            ...form,
            femaleHairOptions: e.target.checked
              ? [...form.femaleHairOptions, value]
              : form.femaleHairOptions.filter((item) => item !== value),
          });
        }}
      />
      Armpit Hair
    </label>

  </div>
</div>

    </div>

    {/* ================= MALE SETTINGS ================= */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
        Male Settings
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Skin Color
        </label>
        <select
          value={form.skinColor}
          onChange={(e) =>
            setForm({ ...form, skinColor: e.target.value })
          }
          className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          <option value="Light">Light (Standard)</option>
          <option value="Brown">Brown</option>
          <option value="Black">Black</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Body Type
        </label>
        <select
          value={form.bodyType}
          onChange={(e) =>
            setForm({ ...form, bodyType: e.target.value })
          }
          className="w-full rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-2 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          <option value="Standard">Standard</option>
          <option value="Muscular">Muscular</option>
          <option value="Fat">Fat</option>
        </select>
      </div>
    </div>

    {/* ================= COMMENT ================= */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Additional Comment
      </label>
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

  </div>
)}


          {/* Continue Button */}
          <button
            type="button"
            disabled={!isValid}
            className={`w-full py-2 rounded-lg font-medium transition
              ${isValid 
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
