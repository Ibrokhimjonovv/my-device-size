import { useEffect } from "react";

export default function GoogleAdIpDetailLong1() {
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
      {/* ip detail long ad 1 */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1980545331504061"
        data-ad-slot="6565768063"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
