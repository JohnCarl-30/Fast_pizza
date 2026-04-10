import type { CartItemType } from "../../types";

interface OrderItemProps {
  item: CartItemType;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
}

function OrderItem({ item, isLoadingIngredients, ingredients }: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{totalPrice}</p>
      </div>
    </li>
  );
}

export default OrderItem;
