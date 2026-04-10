import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import type { Pizza } from "../../types";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  if (!menu) return <p>Loading menu...</p>;

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader(): Promise<Pizza[]> {
  const menu = await getMenu();
  return menu;
}

export default Menu;
