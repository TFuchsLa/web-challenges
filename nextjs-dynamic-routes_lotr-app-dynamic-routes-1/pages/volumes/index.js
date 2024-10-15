import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  function handleRandomVolume() {
    const randomValue = getRandomElement(volumes);
    router.push(`/volumes/${randomValue.slug}`);
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Go to a Random Volume</button>
    </>
  );
}
