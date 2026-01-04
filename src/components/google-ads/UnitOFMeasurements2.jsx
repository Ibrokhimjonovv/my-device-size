import { useEffect } from "react";

export default function UnitOfMeasurementGoogleAdVertical2() {
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

      {/* Unit of Measurements vertical ad 2 */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1980545331504061"
        data-ad-slot="5908142579"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
