import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Fehler beim Laden der Daten.</div>;

  if (!data) return <div>Lade Charakterdaten...</div>;

  return (
    <div>
      <h1>Zufälliger Charakter</h1>
      <p>
        <strong>Vorname:</strong> {data.firstName}
      </p>
      <p>
        <strong>Nachname:</strong> {data.lastName}
      </p>
      <p>
        <strong>Alter:</strong> {data.age}
      </p>
      <p>
        <strong>Geschlecht:</strong> {data.gender}
      </p>
      <p>
        <strong>Twitter:</strong> {data.twitter}
      </p>
      <p>
        <strong>Geohash:</strong> {data.geohash}
      </p>
      <p>
        <strong>Beruf:</strong> {data.profession}
      </p>
    </div>
  );
}
