import { useEffect } from "react";

export default function UnitOfMeasurementsGoogleAdHorizontal1() {
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

      {/* Unit of Measurements horizontal ad 1 */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1980545331504061"
        data-ad-slot="3281979237"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
