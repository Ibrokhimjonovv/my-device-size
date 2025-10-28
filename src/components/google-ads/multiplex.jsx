import { useEffect } from "react";

const GoogleAdAutoRelaxed = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-1980545331504061"
      data-ad-slot="4166873114"
    ></ins>
  );
};

export default GoogleAdAutoRelaxed;
