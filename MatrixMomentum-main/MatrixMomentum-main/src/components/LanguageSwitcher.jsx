import React, { useEffect, useState } from "react";
import { translate } from "google-translate-api-browser";

// List of supported languages
const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
];

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("en");

  const handleLanguageChange = async (e) => {
    const selectedLang = e.target.value;
    setCurrentLang(selectedLang);

    const textElements = document.querySelectorAll("[data-translate]");
    textElements.forEach(async (element) => {
      const originalText =
        element.getAttribute("data-original") || element.innerText;
      console.log(originalText);

      try {
        console.log(selectedLang);
        const result = await translate(originalText, {
          to: selectedLang,
        //   corsUrl: "http://cors-anywhere.herokuapp.com/",
        });
        console.log(result.text);
        element.innerText = result.text;

        element.setAttribute("data-original", originalText);
      } catch (error) {
        console.error("Translation failed:", error);
      }
    });
  };

  return (
    <div className="p-4">
      <label htmlFor="language" className="mr-2 text-gray-700">
        Select Language:
      </label>
      <select
        id="language"
        value={currentLang}
        onChange={handleLanguageChange}
        className="p-2 border rounded-md focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
