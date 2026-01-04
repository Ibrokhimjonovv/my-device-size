import { useEffect } from "react";

export default function AllDevicesSquareAd1() {
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

      {/* All devices square ad 1 */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1980545331504061"
        data-ad-slot="6185320659"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
