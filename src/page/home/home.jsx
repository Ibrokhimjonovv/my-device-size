import { useEffect } from "react";
import CalculatorSection from "../../components/calculator-section/calculator-section";
import ScreenMetrics from "../../components/screen-metrics/screen-metrics";
import UserAgentViewport from "../../components/user-agent-viewport/agent";
import CompareDevices from "../../components/compare-devices/compare-devices";

const Home = () => {
  useEffect(() => {
    document.title = "My Device Size — Screen Resolution & Viewport Analyzer | My device size";

    const metaTags = [
      { name: "title", content: "My Device Size — Screen Resolution & Viewport Analyzer | My device size" },
      { name: "description", content: "Discover your device screen size, resolution, pixel ratio, and viewport instantly. Analyze, compare, and understand your device display metrics with My device size." },
      { name: "keywords", content: "device size, screen resolution, viewport analyzer, DPR, pixel ratio, screen metrics, user agent, compare devices, web tools, My device size" },
      { name: "author", content: "My device size" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://my-device-size.vercel.app/" },
      { property: "og:site_name", content: "My Device Size | My device size" },
      { property: "og:title", content: "My Device Size — Check Your Screen Resolution & Viewport Instantly" },
      { property: "og:description", content: "Instantly view your device resolution, DPR, and viewport size. Compare devices and analyze screen data effortlessly with My device size." },
      { property: "og:image", content: "https://my-device-size.vercel.app/preview-image.png" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://my-device-size.vercel.app/" },
      { property: "twitter:title", content: "My Device Size — Screen Resolution & Viewport Analyzer | My device size" },
      { property: "twitter:description", content: "Analyze your device display details like screen size, DPR, and viewport instantly. Compare devices online — powered by My device size." },
      { property: "twitter:image", content: "https://my-device-size.vercel.app/preview-image.png" },
    ];

    // Remove previous meta tags (to prevent duplicates)
    const prevTags = document.querySelectorAll("meta[data-dynamic-meta]");
    prevTags.forEach((tag) => tag.remove());

    // Add new meta tags
    metaTags.forEach((tagData) => {
      const meta = document.createElement("meta");
      Object.entries(tagData).forEach(([key, value]) => meta.setAttribute(key, value));
      meta.setAttribute("data-dynamic-meta", "true");
      document.head.appendChild(meta);
    });

    // Add canonical link
    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://my-device-size.vercel.app/");
    canonical.setAttribute("data-dynamic-meta", "true");
    document.head.appendChild(canonical);

    // Add theme color
    const theme = document.createElement("meta");
    theme.setAttribute("name", "theme-color");
    theme.setAttribute("content", "#0ea5e9");
    theme.setAttribute("data-dynamic-meta", "true");
    document.head.appendChild(theme);
  }, []);

  return (
    <div>
      <CalculatorSection />
      <ScreenMetrics />
      <UserAgentViewport />
      <CompareDevices />
    </div>
  );
};

export default Home;
