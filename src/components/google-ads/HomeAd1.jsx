import { useEffect } from "react";

export default function HomeAd1() {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <>
      {/* Adsense script (agar global qo‘shilmagan bo‘lsa) */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1980545331504061"
        crossOrigin="anonymous"
      ></script>

      {/* Home page horizontal ad 1 */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1980545331504061"
        data-ad-slot="4322748109"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
