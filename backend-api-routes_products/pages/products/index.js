import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  console.log(data);

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
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {/* Display product information */}
          <h2>{product.name}</h2>
          <p>
            Price: {product.price} {product.currency}
          </p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
        </li>
      ))}
    </ul>
  );
}
