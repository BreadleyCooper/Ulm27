import { useState } from "react";
import mapImage from "./assets/map.png";
import brugesOrangerie from "./assets/bruges-orangerie.jpg";
import brugesCanal from "./assets/bruges-canal.webp";
import brugesHouses from "./assets/bruges-houses.jpg";
import ghentPillowsGrand from "./assets/pillows-grand-hotel.jpg";
import ghent from "./assets/ghent.jpg";
import ghent2 from "./assets/ghent2.jpg";
import noxhotel from "./assets/noxhotel.avif";
import utrecht from "./assets/utrecht.jpg";
import utrecht2 from "./assets/utrecht2.png";
import cologne1 from "./assets/cologne-1.jpg";
import cologne2 from "./assets/cologne-2.jpg";
import cologne3 from "./assets/cologne-3.jpg";
import heidelberg1 from "./assets/heidelberg-1.jpg";
import heidelberg2 from "./assets/heidelberg-2.jpg";
import heidelberg3 from "./assets/heidelberg-3.jpg";
import ulm1 from "./assets/ulm-1.jpg";
import ulm2 from "./assets/ulm-2.jpg";
import ulm3 from "./assets/ulm-3.jpg";
import iseltwald1 from "./assets/iseltwald-1.jpg";
import iseltwald2 from "./assets/iseltwald-2.jpg";
import iseltwald3 from "./assets/iseltwald-3.jpg";
import colmar1 from "./assets/colmar-1.jpg";
import colmar2 from "./assets/colmar-2.jpg";
import colmar3 from "./assets/colmar-3.jpg";
import reims1 from "./assets/reims-1.jpg";
import reims2 from "./assets/reims-2.jpg";
import reims3 from "./assets/reims-3.jpg";
import ulmHotel from "./assets/ulmhotel.webp";
import rhineFalls from "./assets/rhinefalls.jpg";
import interlaken from "./assets/interlaken.webp";

const stops = [
  {
    id: "overview",
    type: "overview",
    label: "Overview",
  },
  {
    id: "bruges",
    label: "Bruges",
    country: "Belgium",
    night: "Night 1",
    arrive: "Sat 7 Jun",
    depart: "Sun 8 Jun",
    nights: "1 night",
    hotel: "Hotel de Orangerie",
    hotelDesc:
      "A former 15th-century convent right on the Dijver canal. Ivy-clad facade, crackling log fires, rococo interiors, and a canal terrace where you can sip champagne watching boats drift past. Belgium's best breakfast, cited by Michelin. Junior suites open directly onto the water.",
    tags: ["15th-century convent", "Canal terrace", "20 rooms"],
    photos: [brugesOrangerie, brugesCanal, brugesHouses],
    drive: "St Neots → Folkestone → Le Shuttle → Bruges",
    driveTime: "~3 hrs total",
    driveSub: "2h15 to Folkestone · 35 min tunnel · 1h15 Calais to Bruges",
    charge:
      "Charge at the Le Shuttle terminal before crossing. Bruges has CCS chargers near the Markt.",
    todo: "Climb the Belfry for views over medieval rooftops. Walk the Begijnhof at dusk. Take a canal boat. Visit the Basilica of the Holy Blood. Eat moules-frites and Flemish beer in a square unchanged since 1400.",
    image:
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800&q=80",
    color: "#2d6a4f",
    price: "",
  },
  {
    id: "ghent",
    label: "Ghent",
    country: "Belgium",
    night: "Night 2",
    arrive: "Sun 8 Jun",
    depart: "Mon 9 Jun",
    nights: "1 night",
    hotel: "Pillows Grand Boutique Hotel Reylof",
    hotelDesc:
      "A grand 18th-century mansion turned luxury boutique hotel in the heart of Ghent. Elegant rooms, a beautiful garden, and a spa. One of the finest addresses in the city.",
    tags: ["18th-century mansion", "Spa & garden", "Luxury boutique"],
    drive: "Bruges → Ghent",
    driveTime: "~40 mins",
    driveSub: "55 km via E40",
    charge: null,
    photos: [ghentPillowsGrand, ghent, ghent2],
    todo: "See the Ghent Altarpiece by Van Eyck in St Bavo's Cathedral — one of the great masterpieces of European art. Walk the Graslei waterfront. Explore Gravensteen castle. Less touristy than Bruges and arguably more interesting.",
    image:
      "https://images.unsplash.com/photo-1559329255-5c9b3f0f9e8e?w=800&q=80",
    color: "#1b4332",
    price: "",
  },
  {
    id: "utrecht",
    label: "Utrecht",
    country: "Netherlands",
    night: "Night 3",
    arrive: "Mon 9 Jun",
    depart: "Tue 10 Jun",
    nights: "1 night",
    hotel: "The Nox Hotel",
    hotelDesc:
      "23 individually decorated rooms in a historic building steps from Pieterskerk and a short walk to the iconic Dom Tower and the medieval Oudegracht canal. Restaurant and bar on site. Rated 9.7 for location by couples.",
    tags: ["Historic building", "Restaurant & bar", "Steps from Dom Tower"],
    drive: "Ghent → Utrecht",
    driveTime: "~2 hrs",
    driveSub: "~180 km via Antwerp and Breda",
    photos: [noxhotel, utrecht, utrecht2],
    charge:
      "Charge near Antwerp or Breda on the way. Utrecht city centre has EV parking with chargers.",
    todo: "Climb the Dom Tower for panoramic views. Walk the unique two-level medieval wharves along the Oudegracht — unlike any canal in Europe. Browse independent shops and cafés. Utrecht has a younger, more local feel than Amsterdam.",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
    color: "#1d3557",
    price: "",
  },
  {
    id: "cologne",
    label: "Cologne",
    country: "Germany",
    night: "Night 4",
    arrive: "Tue 10 Jun",
    depart: "Wed 11 Jun",
    nights: "1 night",
    hotel: "Maison Marsil",
    hotelDesc:
      "A family-run boutique hotel in a monument-protected 1897 building in Cologne's old town. Individually designed rooms in warm colours, an art showroom, a trendy bar, and a breakfast that guests return for. Two car parks within a minute's walk.",
    tags: ["1897 historic building", "Art showroom & bar", "Old town location"],
    photos: [cologne1, cologne2, cologne3],
    drive: "Utrecht → Cologne",
    driveTime: "~2 hrs",
    driveSub: "~230 km via A3",
    charge: null,
    todo: "The Cathedral (Dom) is unmissable — the largest Gothic church in Northern Europe, under construction for 632 years. Walk the old town along the Rhine. Try Kölsch beer at a traditional Brauhaus. The Chocolate Museum is a short walk away.",
    image:
      "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80",
    color: "#3d2b1f",
    price: "",
  },
  {
    id: "heidelberg",
    label: "Heidelberg",
    country: "Germany",
    night: "Night 5",
    arrive: "Wed 11 Jun",
    depart: "Thu 12 Jun",
    nights: "1 night",
    hotel: "NH Collection Heidelberg",
    hotelDesc:
      "Built in a former 1907 brewery, rated #4 in Heidelberg with consistently excellent breakfast and service. A 10-minute walk from the old town. EV charging available on site — a practical bonus after the drive from Cologne.",
    tags: ["Former 1907 brewery", "EV charging on site", "Spa & fitness"],
    photos: [heidelberg1, heidelberg2, heidelberg3],
    drive: "Cologne → Heidelberg",
    driveTime: "~2h 40 mins",
    driveSub: "~250 km via A61 / A6",
    charge:
      "EV charging available at the hotel — convenient to arrive and plug in immediately.",
    todo: "The ruined castle above the old town is one of the great romantic sights of Germany. Walk the Philosophers' Way for views across the Neckar valley. Stroll the Hauptstrasse and the old bridge. Even half a day earns its place on the trip.",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
    color: "#4a2040",
    price: "",
  },
  {
    id: "ulm",
    label: "Ulm",
    country: "Germany",
    night: "Nights 6–7",
    arrive: "Thu 12 Jun",
    depart: "Sat 14 Jun",
    nights: "2 nights",
    hotel: "Hotel Schiefes Haus",
    hotelDesc:
      "The most crooked hotel in the world — a Guinness World Record. Dating to 1443, leaning visibly over the river in the Fishermen's Quarter, 4 minutes from the world's tallest church spire. Floors slope 22 inches over 16 feet; all furniture is levelled. A fairy tale made real.",
    tags: ["Built 1443", "Guinness World Record", "Fishermen's Quarter"],
    photos: [ulmHotel, ulm1, ulm2, ulm3],
    drive: "Heidelberg → Ulm",
    driveTime: "~1h 30 mins",
    driveSub: "~150 km via A8",
    charge: null,
    todo: "Climb the Münster's 768 steps — the highest church tower view in the world. Walk the Fishermen's Quarter. Visit Einstein's birthplace. Day trips: Blaubeuren's vivid blue spring, or Augsburg's Renaissance old town 90 minutes away.",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80",
    color: "#1a3a4a",
    price: "",
  },
  {
    id: "iseltwald",
    label: "Iseltwald",
    country: "Switzerland",
    night: "Nights 8–9",
    arrive: "Sat 14 Jun",
    depart: "Mon 16 Jun",
    nights: "2 nights",
    hotel: "Hotel Chalet du Lac",
    hotelDesc:
      "A family-run Swiss chalet right on the shore of Lake Brienz in the tiny village of Iseltwald, 15 minutes from Interlaken. Balcony rooms face directly onto the lake with the Bernese Alps behind. One reviewer called it the most stunning hotel view they'd ever seen. Free bus passes to Interlaken included.",
    tags: ["Lakeside · Iseltwald", "Mountain views", "Family-run chalet"],
    photos: [iseltwald1, iseltwald2, iseltwald3, rhineFalls, interlaken],
    drive: "Ulm → Rhine Falls → Iseltwald",
    driveTime: "~3h 30 mins total",
    driveSub: "2h to Rhine Falls · 1h30 Rhine Falls to Iseltwald via Bern",
    charge:
      "Switzerland has excellent EV infrastructure. Charge at Rhine Falls car park or in Schaffhausen before heading south.",
    todo: "Stop 2–3 hours at Rhine Falls on the way — Europe's largest waterfall. Take the boat to the rock in the middle. Arrive before 10am to beat coaches. Schaffhausen's medieval old town is 3km away and worth a walk.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    color: "#1a4a3a",
    price: "",
  },
  {
    id: "colmar",
    label: "Colmar",
    country: "France",
    night: "Night 10",
    arrive: "Mon 16 Jun",
    depart: "Tue 17 Jun",
    nights: "1 night",
    hotel: "Hôtel Le Maréchal",
    hotelDesc:
      "Built into the old city walls in Colmar's Little Venice district, right on the canal. Four-poster beds, wooden beams, brocade fabrics, and a terrace looking directly onto the most photographed waterway in Alsace. The most visually spectacular hotel of the whole trip.",
    tags: ["Little Venice canal", "Four-poster beds", "Historic city walls"],
    photos: [colmar1, colmar2, colmar3],
    drive: "Iseltwald → Gruyères → Colmar",
    driveTime: "~3 hrs total",
    driveSub: "1h15 to Gruyères · 1h30 Gruyères to Colmar",
    charge: null,
    todo: "Stop in Gruyères — a perfectly preserved medieval hilltop village, no cars inside the walls. Then into Alsace for Colmar's fairytale half-timbered streets. The evening in Little Venice is one of the finest moments of the whole trip.",
    image:
      "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=800&q=80",
    color: "#5c2a0e",
    price: "",
  },
  {
    id: "reims",
    label: "Reims",
    country: "France",
    night: "Night 11",
    arrive: "Tue 17 Jun",
    depart: "Wed 18 Jun",
    nights: "1 night",
    hotel: "Grand Hôtel des Templiers",
    hotelDesc:
      "A Belle Époque boutique hotel in Reims' pedestrian zone, 1.1km from the Gothic cathedral. 18 rooms of high-end decor in a beautiful historic townhouse. Multilingual staff, excellent breakfast, and underground parking.",
    tags: ["Belle Époque 1890s", "Near the Cathedral", "18 rooms boutique"],
    photos: [reims1, reims2, reims3],
    drive: "Colmar → Reims",
    driveTime: "~3h 30 mins",
    driveSub: "~380 km via Metz or Nancy · charge at Metz",
    charge:
      "Charge near Metz on the A31 motorway on the way. Reims has good CCS chargers in the city centre.",
    todo: "The Gothic Cathedral is where French kings were crowned for 1,000 years. Visit one of the great champagne houses (Taittinger, Pommery or Veuve Clicquot) for a cellar tour and tasting. A fitting final night on the continent.",
    image:
      "https://images.unsplash.com/photo-1548018560-c7196548a4f8?w=800&q=80",
    color: "#2a1a4a",
    price: "",
  },
  {
    id: "home",
    type: "home",
    label: "Home",
    arrive: "Wed 18 Jun",
    drive: "Reims → Calais → Le Shuttle → St Neots",
    driveTime: "~4h 30 mins total",
    driveSub: "2h50 to Calais · 35 min tunnel · 2h15 home",
  },
];

const GOLD = "#b8965a";
const DARK = "#1a1714";
const PAPER = "#f5f0e8";
const MUTED = "#7a7268";

export default function RoadTripPresentation() {
  const [current, setCurrent] = useState(0);
  const [visited, setVisited] = useState(new Set([0]));
  const total = stops.length;

  const goTo = (n) => {
    setCurrent(n);
    setVisited((prev) => new Set([...prev, n]));
  };

  const prev = () => current > 0 && goTo(current - 1);
  const next = () => current < total - 1 && goTo(current + 1);

  const stop = stops[current];

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: PAPER,
        minHeight: "100vh",
        color: DARK,
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "28px 24px 18px",
          borderBottom: `1px solid rgba(184,150,90,0.25)`,
          background: PAPER,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: 6,
          }}
        >
          Grand European Road Trip
        </div>
        <h1
          style={{ fontSize: 24, fontWeight: 400, margin: 0, lineHeight: 1.2 }}
        >
          St Neots to <em style={{ color: GOLD }}>Ulm</em> &amp; Back
        </h1>
        <div
          style={{
            fontSize: 12,
            color: MUTED,
            marginTop: 5,
            fontFamily: "sans-serif",
            fontWeight: 300,
          }}
        >
          Hyundai Ioniq 5 &nbsp;·&nbsp; Sat 7 Jun – Wed 18 Jun 2025
          &nbsp;·&nbsp; Belgium · Netherlands · Germany · Switzerland · France
        </div>
      </div>

      {/* Progress dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          padding: "14px 16px 8px",
          flexWrap: "wrap",
        }}
      >
        {stops.map((s, i) => (
          <button
            key={s.id}
            title={s.label}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 10 : 7,
              height: i === current ? 10 : 7,
              borderRadius: "50%",
              background:
                i === current
                  ? GOLD
                  : visited.has(i)
                    ? "rgba(184,150,90,0.5)"
                    : "rgba(184,150,90,0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide content */}
      <div style={{ padding: "0 16px 16px", maxWidth: 680, margin: "0 auto" }}>
        {stop.type === "overview" && <OverviewSlide goTo={goTo} />}
        {stop.type === "home" && <HomeSlide stop={stop} />}
        {!stop.type && <StopSlide stop={stop} />}
      </div>

      {/* Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 28px",
          maxWidth: 680,
          margin: "0 auto",
          gap: 12,
        }}
      >
        <NavBtn onClick={prev} disabled={current === 0}>
          ← Prev
        </NavBtn>
        <div style={{ textAlign: "center", flex: 1 }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: DARK,
            }}
          >
            {stop.label}
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              color: MUTED,
              marginTop: 2,
            }}
          >
            {current + 1} / {total}
          </div>
        </div>
        <NavBtn onClick={next} disabled={current === total - 1}>
          Next →
        </NavBtn>
      </div>
    </div>
  );
}

function NavBtn({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? "rgba(26,23,20,0.2)" : DARK,
        color: PAPER,
        border: "none",
        borderRadius: 8,
        padding: "10px 20px",
        fontFamily: "sans-serif",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.06em",
        cursor: disabled ? "default" : "pointer",
        minWidth: 80,
        transition: "background 0.2s",
      }}
    >
      {children}
    </button>
  );
}

function DriveBanner({ drive, driveTime, driveSub }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        background: "rgba(184,150,90,0.08)",
        border: "1px solid rgba(184,150,90,0.2)",
        borderRadius: 10,
        padding: "10px 14px",
        marginBottom: 14,
        marginTop: 4,
      }}
    >
      <span style={{ fontSize: 18, marginTop: 1 }}>🚗</span>
      <div>
        <div style={{ fontFamily: "sans-serif", fontSize: 12, color: MUTED }}>
          {drive}
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: GOLD,
            marginTop: 2,
          }}
        >
          {driveTime}{" "}
          <span style={{ fontWeight: 400, fontSize: 11, color: MUTED }}>
            · {driveSub}
          </span>
        </div>
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function PhotoGallery({ photos, label }) {
  const extra = photos.slice(3);
  return (
    <div>
      <img
        src={photos[0]}
        alt={label}
        style={{ width: "100%", height: 210, objectFit: "cover", display: "block" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2 }}>
        <img src={photos[1]} alt={label} style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }} />
        <img src={photos[2]} alt={label} style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }} />
      </div>
      {extra.length === 1 && (
        <img
          src={extra[0]}
          alt={label}
          style={{ width: "100%", height: 155, objectFit: "cover", display: "block", marginTop: 2 }}
        />
      )}
      {extra.length >= 2 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2 }}>
          <img src={extra[0]} alt={label} style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }} />
          <img src={extra[1]} alt={label} style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }} />
        </div>
      )}
    </div>
  );
}

function StopSlide({ stop }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div>
      <div style={{ paddingTop: 16, paddingBottom: 12, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: 6,
          }}
        >
          {stop.country}
        </div>
        <h2
          style={{
            fontSize: 34,
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {stop.label}
        </h2>
      </div>
      <DriveBanner
        drive={stop.drive}
        driveTime={stop.driveTime}
        driveSub={stop.driveSub}
      />
      <Card>
        {stop.photos ? (
          <PhotoGallery photos={stop.photos} label={stop.label} />
        ) : !imgError ? (
          <img
            src={stop.image}
            alt={stop.label}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: 220,
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: 220,
              background: `linear-gradient(135deg, ${stop.color}cc, ${stop.color}55)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
            }}
          >
            🏨
          </div>
        )}
        <div style={{ padding: "16px 18px 18px" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 2,
            }}
          >
            {stop.country} · {stop.night}
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 12,
              color: MUTED,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>📅</span>
            <span>
              {stop.arrive} – {stop.depart} · {stop.nights}
            </span>
          </div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 400,
              margin: "0 0 10px",
              lineHeight: 1.2,
            }}
          >
            {stop.hotel}
          </h2>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: 13,
              color: MUTED,
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 300,
            }}
          >
            {stop.hotelDesc}
          </p>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}
          >
            {stop.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 20,
                  border: "1px solid rgba(184,150,90,0.3)",
                  color: GOLD,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          {stop.charge && (
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                background: "rgba(184,150,90,0.07)",
                borderLeft: "2px solid rgba(184,150,90,0.4)",
                borderRadius: "0 6px 6px 0",
                padding: "8px 12px",
                marginTop: 12,
                fontFamily: "sans-serif",
                fontSize: 12,
                color: MUTED,
                lineHeight: 1.5,
              }}
            >
              <span>⚡</span>
              <span>{stop.charge}</span>
            </div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 14,
              paddingTop: 12,
              borderTop: "1px solid rgba(184,150,90,0.15)",
            }}
          >
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: MUTED,
              }}
            >
              Estimated cost
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: stop.price ? DARK : "rgba(184,150,90,0.35)",
                letterSpacing: "-0.01em",
              }}
            >
              {stop.price || "—"}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ padding: "14px 18px" }}>
          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: DARK,
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            What to do in {stop.label}
          </h3>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: 13,
              color: MUTED,
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 300,
            }}
          >
            {stop.todo}
          </p>
        </div>
      </Card>
    </div>
  );
}

function OverviewSlide({ goTo }) {
  const routeStops = stops.filter((s) => s.id !== "overview");
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <img
          src={mapImage}
          alt="Route map"
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 12,
            marginBottom: 16,
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          }}
        />
        <h2 style={{ fontSize: 22, fontWeight: 400, margin: "0 0 8px" }}>
          The Grand Tour
        </h2>
        <div
          style={{
            width: 40,
            height: 1,
            background: GOLD,
            margin: "12px auto 10px",
          }}
        />
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            color: GOLD,
            fontWeight: 600,
            letterSpacing: "0.06em",
            marginBottom: 10,
          }}
        >
          Sat 7 Jun – Wed 18 Jun 2025
        </div>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            color: MUTED,
            lineHeight: 1.7,
            maxWidth: 400,
            margin: "0 auto",
            fontWeight: 300,
          }}
        >
          A two-week loop through medieval cities, Alpine lakes, Rhine
          waterfalls and Alsatian wine towns. Starting and ending in St Neots
          via Le Shuttle.
        </p>
      </div>
      <Card>
        <div style={{ padding: "16px 18px" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 12,
            }}
          >
            Your Stops
          </div>
          {routeStops.map((s, i) => (
            <div key={s.id}>
              <button
                onClick={() => goTo(i + 1)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 0",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: 4,
                    background:
                      s.type === "home"
                        ? MUTED
                        : s.id === "ulm"
                          ? "#534AB7"
                          : GOLD,
                  }}
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: "0 4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: DARK,
                      }}
                    >
                      {s.label}
                    </span>
                    {s.hotel && (
                      <span
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: 12,
                          color: MUTED,
                        }}
                      >
                        — {s.hotel}
                      </span>
                    )}
                  </div>
                  {s.arrive && (
                    <div
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: 11,
                        color: MUTED,
                        marginTop: 1,
                      }}
                    >
                      {s.type === "home"
                        ? s.arrive
                        : `${s.arrive} – ${s.depart} · ${s.nights}`}
                    </div>
                  )}
                </div>
              </button>
              {i < routeStops.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 10,
                    background: "rgba(184,150,90,0.3)",
                    marginLeft: 3.5,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <div style={{ padding: "14px 18px" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 10,
            }}
          >
            Trip at a Glance
          </div>
          {[
            ["🗓️", "Sat 7 Jun – Wed 18 Jun 2025 · 12 days · 9 overnight stops"],
            [
              "🌍",
              "5 countries — Belgium, Netherlands, Germany, Switzerland, France",
            ],
            ["🚗", "~3,200 km total distance"],
            ["⚡", "Hyundai Ioniq 5 — excellent EV infrastructure throughout"],
            ["🏰", "Medieval cities from Bruges to Colmar"],
            ["🏔️", "Alpine lakes, Rhine Falls, Gruyères"],
          ].map(([icon, text]) => (
            <div
              key={text}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 14 }}>{icon}</span>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  color: MUTED,
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function HomeSlide({ stop }) {
  return (
    <div>
      <DriveBanner
        drive={stop.drive}
        driveTime={stop.driveTime}
        driveSub={stop.driveSub}
      />
      <Card>
        <div style={{ padding: "28px 18px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 14 }}>🏡</div>
          <h2 style={{ fontSize: 22, fontWeight: 400, margin: "0 0 4px" }}>
            Home to St Neots
          </h2>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 13,
              color: GOLD,
              fontWeight: 600,
              marginBottom: 4,
            }}
          >
            {stop.arrive}
          </div>
          <div
            style={{
              width: 40,
              height: 1,
              background: GOLD,
              margin: "12px auto",
            }}
          />
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: 13,
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: 400,
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            A relaxed final day. Leave Reims after breakfast, charge near Arras
            on the A26, arrive at Calais mid-afternoon. Cross via Le Shuttle —
            remember you gain an hour back to UK time — and you're home by early
            evening.
          </p>
        </div>
      </Card>
      <Card>
        <div style={{ padding: "14px 18px" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 12,
            }}
          >
            Trip Summary
          </div>
          {[
            "Sat 7 Jun – Wed 18 Jun 2025",
            "9 overnight stops across 5 countries",
            "~3,200 km total distance",
            "Hyundai Ioniq 5 — no range anxiety on this route",
            "Medieval cities, Alpine lakes, Rhine waterfalls, champagne country",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: GOLD,
                  flexShrink: 0,
                  marginTop: 5,
                }}
              />
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  color: MUTED,
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
