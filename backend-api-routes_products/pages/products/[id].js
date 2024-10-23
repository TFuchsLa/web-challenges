import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!data) {
    return <h1>No products found</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.name}</h1>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Category: {data.category}</p>
      <p>Description: {data.description}</p>
    </>
  );
}
