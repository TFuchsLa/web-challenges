import useSWR, { mutate } from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import StyledButton from "@/components/Button";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate(`/api/products/${id}`);
      setIsEditMode(false);
      event.target.reset();
    }
  }

  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate(`/api/products/${id}`);
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledButton type="button" onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Cancel Edit" : "Edit Product"}
      </StyledButton>
      <StyledButton type="button" onClick={() => handleDeleteProduct(id)}>
        DELETE
      </StyledButton>
      {isEditMode ? (
        <ProductForm onSubmit={handleEditProduct} data={data} />
      ) : (
        <ProductCard>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          <StyledLink href="/">Back to all</StyledLink>
        </ProductCard>
      )}
    </>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
