import React, { useState, useEffect } from "react";
import "./units-of-measurements.scss";
import GoogleAdHorizontal2 from "../../components/google-ads/multiplex";
import GoogleAdVertical1 from "../../components/google-ads/advertical1";
import GoogleAdVertical2 from "../../components/google-ads/advertical2";

const sizes = [
  { id: 1, from: "1 px", to: "1 pixel (base unit)", equal: true },
  { id: 2, from: "1 em", to: 16, equal: true },
  { id: 3, from: "1 rem", to: 16, equal: true },
  { id: 4, from: "1 pt", to: 1.333, equal: true },
  { id: 5, from: "1 pc (pica)", to: 16, equal: true },
  { id: 6, from: "1 in (inch)", to: 96, equal: true },
  { id: 7, from: "1 cm", to: 37.8, equal: false },
  { id: 8, from: "1 mm", to: 3.78, equal: false },
  { id: 9, from: "1 %", to: "relative to the parent element’s size", equal: true },
  { id: 10, from: "1 vw", to: "1% of the viewport’s width", equal: true },
  { id: 11, from: "1 vh", to: "1% of the viewport’s height", equal: true },
];

const unitToPx = {
  px: 1,
  em: 16,
  rem: 16,
  pt: 1.333,
  pc: 16,
  in: 96,
  cm: 37.8,
  mm: 3.78,
  vw: window.innerWidth / 100,
  vh: window.innerHeight / 100,
};

const units = Object.keys(unitToPx);

const UnitConverter = () => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("px");
  const [toUnit, setToUnit] = useState("em");

  const formatNumber = (num) => {
    if (isNaN(num)) return "";
    const fixed = num.toFixed(2);
    return fixed.endsWith(".00") ? fixed.split(".")[0] : fixed;
  };

  const convert = () => {
    if (fromValue === "") return "";
    const pxValue = parseFloat(fromValue) * unitToPx[fromUnit];
    const result = pxValue / unitToPx[toUnit];
    return formatNumber(result);
  };

  return (
    <div id="converter-container">
      <div id="inpts">
        <div className="input-container">
          <input
            type="text"
            value={fromValue}
            placeholder="From"
            onChange={(e) => setFromValue(e.target.value)}
          />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <span>
          <ion-icon name="swap-horizontal-outline"></ion-icon>
        </span>

        <div className="input-container">
          <input type="text" value={convert()} placeholder="To" readOnly />
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {fromValue ? (
        <p>
          {fromValue} {fromUnit} = {convert()} {toUnit}
        </p>
      ) : (
        <p>Write to input...</p>
      )}
    </div>
  );
};

const UnitsOfMeasurement = () => {
  useEffect(() => {
    document.title = "Unit Converter & CSS Measurement Guide | м17";

    const metaTags = [
      { name: "title", content: "Unit Converter & CSS Measurement Guide | м17" },
      {
        name: "description",
        content:
          "Medical unit converter online, Lab unit conversion Calculator, Unit converter calculator, Unit Converter download, Unit conversion Lab chemistry, Conventional to SI unit conversion Calculator, Unit converter app, Weight unit converter, CSS IN to px, Mm to px CSS, How to convert percentage to pixels in CSS, REM to vw converter, Vw to Percentage converter, Px to vh converter, PX to rem converter w3, Cm to Percentage converter, Px to vh, Px to vw converter, Px to rem, Convert px to VW online, REM to vw converter, CSS IN to px, Mm to px CSS, How to convert percentage to pixels in CSS,  Convert between px, em, rem, cm, mm, pt, vw, vh and more. Learn how CSS units of measurement work for responsive web design — powered by м17.",
      },
      {
        name: "keywords",
        content:
          "unit converter, px to em, em to rem, css measurement units, responsive design, cm to px, vw vh calculator, web design tools, м17",
      },
      { name: "author", content: "м17" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://my-device-size.vercel.app/units-of-measurement" },
      { property: "og:site_name", content: "My Device Size | м17" },
      {
        property: "og:title",
        content: "Unit Converter — CSS & Screen Measurement Tool | м17",
      },
      {
        property: "og:description",
        content:
          "Easily convert CSS units like px, em, rem, pt, vw, vh, and more. Explore a detailed table of measurement equivalents — created by м17.",
      },
      { property: "og:image", content: "https://my-device-size.vercel.app/preview-image.png" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://my-device-size.vercel.app/units-of-measurement" },
      {
        property: "twitter:title",
        content: "Unit Converter & CSS Measurement Reference | м17",
      },
      {
        property: "twitter:description",
        content:
          "Quickly convert px, em, rem, cm, mm, pt, vw, vh and other units. Useful for developers designing responsive web layouts.",
      },
      { property: "twitter:image", content: "https://my-device-size.vercel.app/preview-image.png" },
    ];

    // Remove previous meta tags to avoid duplicates
    const prevTags = document.querySelectorAll("meta[data-dynamic-meta]");
    prevTags.forEach((tag) => tag.remove());

    // Add new meta tags dynamically
    metaTags.forEach((tagData) => {
      const meta = document.createElement("meta");
      Object.entries(tagData).forEach(([key, value]) => meta.setAttribute(key, value));
      meta.setAttribute("data-dynamic-meta", "true");
      document.head.appendChild(meta);
    });

    // Add canonical
    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://my-device-size.vercel.app/units-of-measurement");
    canonical.setAttribute("data-dynamic-meta", "true");
    document.head.appendChild(canonical);

    // Theme color
    const theme = document.createElement("meta");
    theme.setAttribute("name", "theme-color");
    theme.setAttribute("content", "#0ea5e9");
    theme.setAttribute("data-dynamic-meta", "true");
    document.head.appendChild(theme);
  }, []);

  return (
    <div id="units">
      <h2 id="tt">Units of Measurement</h2>
      <div className="table">
        <div className="measurement-ad measurement-ad-1">
          <GoogleAdVertical1 />
        </div>
        <table>
          <thead>
            <tr>
              <th>Any sizes</th>
              <th>= / ≈</th>
              <th>...px</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, indx) => (
              <tr key={indx}>
                <td>{size.from}</td>
                <td>{size.equal ? "=" : "≈"}</td>
                <td>
                  {size.to === Number(size.to) ? `${size.to} px` : `${size.to}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="measurement-ad measurement-ad-2">
          <GoogleAdVertical2 />
        </div>
      </div>
      <div className="multiplex">
        <GoogleAdHorizontal2 />
      </div>
      <h2 id="top">Measurement converter</h2>
      <UnitConverter />
    </div>
  );
};

export default UnitsOfMeasurement;
