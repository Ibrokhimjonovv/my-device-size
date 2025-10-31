import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "./ip-detail.scss"
import GoogleAdIp3 from '../../components/google-ads/ipadsquare1'
import GoogleAdIp4 from '../../components/google-ads/ipadsquare2'

// Leaflet icons fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const IpDetail = () => {
    const { ip } = useParams()
    const [ipData, setIpData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!ip) return;

        document.title = `IP Details for ${ip} | What's my ip address IP Lookup`;

        // Eski meta teglarni o‘chirish
        const removeOldTags = () => {
            document
                .querySelectorAll("meta[data-dynamic-meta], link[data-dynamic-meta]")
                .forEach(el => el.remove());
        };
        removeOldTags();

        // Meta yaratish funksiyalari
        const createMeta = (name, content, isProperty = false) => {
            const meta = document.createElement("meta");
            if (isProperty) meta.setAttribute("property", name);
            else meta.setAttribute("name", name);
            meta.setAttribute("content", content);
            meta.setAttribute("data-dynamic-meta", "true");
            document.head.appendChild(meta);
        };

        const createLink = (rel, href) => {
            const link = document.createElement("link");
            link.setAttribute("rel", rel);
            link.setAttribute("href", href);
            link.setAttribute("data-dynamic-meta", "true");
            document.head.appendChild(link);
        };

        // ✅ SEO meta teglar
        createMeta(
            "description",
            `View detailed information about IP address ${ip}: ISP, country, region, city, timezone, coordinates, and organization details.`
        );
        createMeta(
            "keywords",
            `${ip}, IP lookup, IP details, IP location, IP checker, ISP info, IP2Location, What's my ip address`
        );
        createMeta("author", "What's my ip address");
        createMeta("robots", "index, follow");

        // ✅ Canonical link
        createLink("canonical", `https://my-device-size.vercel.app/ip-address-checker/ip/${ip}`);

        // ✅ Open Graph (Facebook, Telegram uchun)
        createMeta("og:title", `IP Details for ${ip}`, true);
        createMeta(
            "og:description",
            `Find all information for ${ip}: ISP, organization, timezone, region, and coordinates.`,
            true
        );
        createMeta("og:type", "website", true);
        createMeta("og:url", `https://my-device-size.vercel.app/ip-address-checker/ip/${ip}`, true);
        createMeta("og:image", "https://whatismyipaddress.com/wp-content/uploads/shark-goldfish-masks2-768x292.jpg", true);
        createMeta("og:site_name", "What's my ip address IP Tools", true);

        // ✅ Twitter meta teglar
        createMeta("twitter:card", "summary_large_image");
        createMeta("twitter:title", `IP Details for ${ip}`);
        createMeta(
            "twitter:description",
            `Discover ISP, region, timezone, and location details for ${ip} instantly.`
        );
        createMeta("twitter:image", "https://whatismyipaddress.com/wp-content/uploads/shark-goldfish-masks2-768x292.jpg");

        // Tozalash (sahifa o‘zgarganda)
        return () => removeOldTags();
    }, [ip]);


    useEffect(() => {
        if (ip) {
            fetchIpDetails(ip)
        }
    }, [ip])

    const fetchIpDetails = async (ipAddress) => {
        try {
            setLoading(true);
            setError(null);

            // ✅ ipapi.co dan foydalanish (HTTPS qo'llab-quvvatlaydi)
            const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
            const data = await response.json();

            if (data.error !== true && data.ip) {
                // Ma'lumotlarni formatlash
                setIpData({
                    query: data.ip,
                    as: data.asn ? `AS${data.asn} ${data.org || ''}`.trim() : 'Unknown',
                    isp: data.org || data.asn || 'Unknown',
                    org: data.org || 'Unknown',
                    country: data.country_name || 'Unknown',
                    countryCode: data.country_code || 'Unknown',
                    regionName: data.region || 'Unknown',
                    region: data.region_code || 'Unknown',
                    city: data.city || 'Unknown',
                    zip: data.postal || 'Not available',
                    timezone: data.timezone || 'Unknown',
                    lat: data.latitude || 0,
                    lon: data.longitude || 0
                });
            } else {
                throw new Error(data.reason || 'Failed to fetch IP details');
            }
        } catch (err) {
            setError('Error loading IP details');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    // IP manzilni decimal formatga o'tkazish
    const ipToDecimal = (ip) => {
        return ip.split('.').reduce((acc, octet, index) => {
            return acc + parseInt(octet) * Math.pow(256, 3 - index)
        }, 0)
    }

    // Koordinatalarni gradus formatga o'tkazish
    const formatCoordinate = (coord, isLatitude) => {
        const absCoord = Math.abs(coord)
        const degrees = Math.floor(absCoord)
        const minutes = Math.floor((absCoord - degrees) * 60)
        const seconds = ((absCoord - degrees - minutes / 60) * 3600).toFixed(2)
        const direction = isLatitude ?
            (coord >= 0 ? 'N' : 'S') :
            (coord >= 0 ? 'E' : 'W')

        return `${degrees}° ${minutes}′ ${seconds}″ ${direction}`
    }

    if (loading) {
        return (
            <div id='ip-detail'>
                <div className="ip-infos">
                    <div className="loading">Loading IP details...</div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div id='ip-detail'>
                <div className="ip-infos">
                    <div className="error">{error}</div>
                    <button onClick={() => fetchIpDetails(ip)} className="retry-btn">
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div id='ip-detail'>
            <div className="ip-infos">
                <h2>IP Details For: {ip}</h2>
                <div className="infos">
                    <div className="txts">
                        <p>
                            <span>Decimal:</span>
                            <span>{ipToDecimal(ip)}</span>
                        </p>
                        <p>
                            <span>Hostname:</span>
                            <span>{ipData.query}</span>
                        </p>
                        <p>
                            <span>ASN:</span>
                            <span>{ipData.as.split(' ')[0]}</span>
                        </p>
                        <p>
                            <span>ISP:</span>
                            <span>{ipData.isp}</span>
                        </p>
                        <p>
                            <span>Organization:</span>
                            <span>{ipData.org}</span>
                        </p>
                        <p>
                            <span>Services:</span>
                            <span>None detected</span>
                        </p>
                        <p>
                            <span>Country:</span>
                            <span>{ipData.country} ({ipData.countryCode})</span>
                        </p>
                        <p>
                            <span>State/Region:</span>
                            <span>{ipData.regionName} ({ipData.region})</span>
                        </p>
                        <p>
                            <span>City:</span>
                            <span>{ipData.city}</span>
                        </p>
                        <p>
                            <span>ZIP Code:</span>
                            <span>{ipData.zip || 'Not available'}</span>
                        </p>
                        <p>
                            <span>Timezone:</span>
                            <span>{ipData.timezone}</span>
                        </p>
                        <p>
                            <span>Latitude:</span>
                            <span>{ipData.lat} ({formatCoordinate(ipData.lat, true)})</span>
                        </p>
                        <p>
                            <span>Longitude:</span>
                            <span>{ipData.lon} ({formatCoordinate(ipData.lon, false)})</span>
                        </p>
                    </div>
                    <div className="map">
                        {ipData.lat && ipData.lon && (
                            <MapContainer
                                center={[ipData.lat, ipData.lon]}
                                zoom={4}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[ipData.lat, ipData.lon]}>
                                    <Popup>
                                        <div>
                                            <strong>{ipData.country}</strong><br />
                                            {ipData.isp}
                                        </div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        )}
                    </div>
                </div>
                <p id='war'>
                    Latitude and Longitude are often near the center of population. These values are not precise enough to be used to identify a specific address, individual, or for legal purposes. IP data from IP2Location.
                </p>
            </div>
            <div className="square-ad">
                    <GoogleAdIp3 />
                </div>
        </div>
    )
}

export default IpDetail