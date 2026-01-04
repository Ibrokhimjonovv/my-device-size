import { useEffect } from "react";

export default function AllDevicesHorizontalAd1() {
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

      {/* All devices horizontal ad 1 */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1980545331504061"
        data-ad-slot="1505013073"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
