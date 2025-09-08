import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Fieldset,MultiSelect
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function ModalRegister() {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */
    <>
    <Fieldset legend="Expense Name">
      <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="center"
      gap="md"
    >
      <TextInput
      label="Expense Name"
      description="Expense Name"
      placeholder="E.g.,Coca-Cola"
     />
      <NumberInput
      label="Amount"
      description="Amount"
      placeholder="0"
    />
         <Select
      description="Category"
      label="Category"
      placeholder="Pick value"
      data={['Transport', 'Entertainment']}
    />
    <Button fullWidth>Submit</Button>
    </Stack>
    </Fieldset>
  </>  
  );
}
