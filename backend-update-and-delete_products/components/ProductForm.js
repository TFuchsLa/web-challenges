import styled from "styled-components";
import useSWR from "swr";
import StyledButton from "@/components/Button";

export default function ProductForm({
  onSubmit,
  heading = "Add a new Fish",
  initialValue = {},
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          initialValue={initialValue.name}
        />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          initialValue={initialValue.description}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          initialValue={initialValue.price}
          required
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
