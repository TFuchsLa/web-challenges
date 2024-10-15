import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Importiere useRouter
import { volumes } from "../../lib/data.js";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query; // Hole den dynamischen 'slug' aus der URL

  // Finde das Volume basierend auf dem 'slug'
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  // Fehlerhandling, falls das Volume nicht gefunden wird
  if (volumeIndex === -1) {
    return <p>Volume not found</p>;
  }

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
