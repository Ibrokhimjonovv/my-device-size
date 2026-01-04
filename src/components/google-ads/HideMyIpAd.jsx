import { useEffect } from "react";

export default function GoogleAdHideMyIpVertical1() {
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

      {/* hide my ip vertical ad 1 */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1980545331504061"
        data-ad-slot="2215459518"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
