import type { FooterProps } from "../libs/Footer";

import { Text, Group } from "@mantine/core";
export default function Footer(props:FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {props.courseName}-{props.year} {props.fullName} {props.studentId}. All rights reserved.
      </Text>
    </Group>
  );
}

