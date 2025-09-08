// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// type FoodItem = {
//   id: string;
//   name: string;
//   price: number | string;
//   quantity: number | string;
//   category: string;
// };

import { Button, Stack, Title, Divider, Container, Modal } from "@mantine/core";
import AddFoodModal from "../components/Modal";
import { useDisclosure } from '@mantine/hooks';

export default function FoodTracker() {
  // const [items, setItems] = useState<FoodItem[]>([]);
  // const categories = ["Main Course", "Drink", "Dessert"];
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button onClick= {open}
      >Add Food Item</Button>

      {/* Type additional AddFoodModal here. */}
      <Modal opened={opened} onClose={close} title="Add an item" centered>
        <AddFoodModal opened = {opened} onClose={close}/>
      </Modal>
      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}
