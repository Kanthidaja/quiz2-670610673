
import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Fieldset
} from "@mantine/core";



export default function ModalRegister() {


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
