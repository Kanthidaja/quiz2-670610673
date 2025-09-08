import { useState } from "react";
import { Modal,
  TextInput,
  NumberInput,
  Select,Container,
  Button,
  Stack,
  Fieldset,MultiSelect,Divider,Title} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import ModalRegister from "../components/Modal";
import { useDisclosure } from '@mantine/hooks';

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, { open, close }] = useDisclosure(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];

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
              placeholder="Select Category"
              data={['Transport', 'Entertainment']}
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