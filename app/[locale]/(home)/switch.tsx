"use client";

import { useChangeLocale, useCurrentLocale } from "../../../locales/client";

export function SwitchLocal() {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

  const local = useCurrentLocale();

  const changeLocaleHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "en":
        changeLocale("en");
        break;
      case "fa":
        changeLocale("fa");
        break;
      case "zh":
        changeLocale("zh");
        break;
      case "ru":
        changeLocale("ru");
        break;
      case "tr":
        changeLocale("tr");
        break;
      case "hi":
        changeLocale("hi");
        break;
      default:
        changeLocale("en");
        break;
    }
  };

  return (
    <>
      <select
        id="countries"
        value={local}
        onChange={changeLocaleHandler}
        className="bg-quaternary border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-24 py-2 !px-2"
      >
        <option value="en" className="inline-flex items-center justify-between">
          En &nbsp;&nbsp; &#x1F1EC;&#x1F1E7;
        </option>
        <option value="fa" className="inline-flex items-center justify-between">
          Fa &nbsp;&nbsp; &#x1F1EE;&#x1F1F7;
        </option>
        <option value="zh" className="inline-flex items-center justify-between">
          Zh &nbsp;&nbsp; &#x1F1E8;&#x1F1F3;
        </option>
        <option value="ru" className="inline-flex items-center justify-between">
          Ru &nbsp;&nbsp; &#x1F1F7;&#x1F1FA;
        </option>
        <option value="tr" className="inline-flex items-center justify-between">
          Tr &nbsp;&nbsp;&nbsp; &#x1F1F9;&#x1F1F7;
        </option>
        <option value="hi" className="inline-flex items-center justify-between">
          Hi &nbsp;&nbsp; &#x1F1EE;&#x1F1F3;
        </option>
      </select>
    </>
  );
}
