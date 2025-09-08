import { useState } from "react";
import { Modal,
  TextInput,
  NumberInput,
  Select,Container,
  Button,
  Stack,
  Divider,Title} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

export default function ExpenseTracker() {
  const [opened, { open, close }] = useDisclosure(false);
  const categories = ["Food", "Transport", "Entertainment"];
  const [name, setName] = useState<string>("");

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  const inputNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button variant="filled" onClick={open}>
        Add Expense Item
      </Button>
      <Modal opened={opened} onClose={close} title="Add expense">
        {/* Modal content */}
              <Stack
              h={420}
              bg="var(--mantine-color-body)"
              align="stretch"
              justify="center"
              gap="md"
            >
              <TextInput
              label="Expense Name"
              description="Expense Name"
              placeholder="E.g.,Coca-Cola"
              mt="md"
              error="Expense Name is required"
              onChange={inputNameOnChange}
              value={name}
             />
              <NumberInput
              label="Amount"
              description="Amount"
              placeholder="0"
               mt="md"
              error="Amount is required"
            />
                 <Select
              description="Category"
              label="Category"
              placeholder="Select Category"
              data={categories}
              mt="md"
              error="Categories is required"
            />
            <Button fullWidth>Submit</Button>
            </Stack>
      </Modal>


      
      {/* Type additional AddExpenseModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}