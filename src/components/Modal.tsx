import { useState } from "react";
import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Group,
  Container,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd?: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const [nameIn, setnameError] = useState(true)
  const [priceIn, setPriceError] = useState(true)
  const [quantityIn, setquantityError] = useState(true)
  const [categoryIn, setCategoryError] = useState(true)


  const handleSubmit = () => {
    console.log("name" + name)
    console.log("price" + price)
    console.log("quantity" + quantity)
    console.log("category" + category)
    if(name != "")setnameError(false)
    if(price != 0)setPriceError(false)
    if(quantity != 0)setquantityError(false)
    if(category != null)setCategoryError(false)
    if(!nameIn && !priceIn && !quantityIn && !categoryIn)console.log("suc")
  };


  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0


  return  (
    <Container>

    <TextInput 
    
      label="Name of item"
      description="Name of item"
      placeholder="e.g., Chicken rice"
      onChange={
        (event) => {
          setName(event.currentTarget.value)
          setnameError(false)
        }
      }
      error = {nameIn}

      />
    <NumberInput 
    value={price}
    label = "Price per dish"
    description="Price per dish"
    placeholder="0"
    onChange= {setPrice}
    error = {priceIn}  
      

    />
    <NumberInput 
    value = {quantity}
    label = "Quantity"
    description="Quantity"
    placeholder="0"
    onChange={setQuantity}
    error = {quantityIn}  
    />
    <Select 
      label="Category"
      description="Category"
      placeholder="Select a category"
      data={['Main Course', 'Drink', 'Dessert']}
      value = {category}
      onChange={setCategory}
      error = {categoryIn}  
      />
      <Group>
    <Button
    justify="center" fullWidth
    onClick={handleSubmit}
    >
      Submit
    </Button>
      </Group>
    </Container>
  );
}