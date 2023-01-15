import {
  Anchor,
  Button,
  Center,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Text,
  Divider,
  Group,
  Flex,
  ThemeIcon,
} from "@mantine/core";
import {
  IconNoCopyright,
  IconBrandFacebook,
  IconBrandGoogle,
  IconLock,
  IconMail,
} from "@tabler/icons";

export function Login(props) {
  const loginIconStyle = {
    padding: "6px",
    backgroundColor: "white",
    color: "#93B6E5",
    borderRadius: "5px",
  };
  return (
    <Flex h={"100%"} direction={"column"} justify="space-between">
      <Center my={"auto"} >
        <form style={{width: "50%"}}>
          <Stack>
            <Title order={2}>Welcome back!</Title>
            <Text mb={"md"} c="dimmed">
              Start managing your finance faster and better
            </Text>
            <TextInput
              style={{ backgroundColor: "#F5F7F9" , borderRadius: "5px" }}
              variant="unstyled"
              icon={<IconMail size={14} style={loginIconStyle} />}
              placeholder="you@example.com"
            />
            <PasswordInput
              style={{ backgroundColor: "#F5F7F9" , borderRadius: "5px"}}
              radius="md"
              variant="unstyled"
              icon={<IconLock size={14} style={loginIconStyle} />}
              placeholder="At least 8 characters"
            />
            <Anchor align="right">Forgot password?</Anchor>
            <Button fullWidth>Log in</Button>
            <Divider my={"md"} label="or" labelPosition="center" />
            <Group position="apart">
              <Button
                color={"dark"}
                style={{ borderColor: "lightgray" }}
                px={35}
                leftIcon={<IconBrandGoogle size={18} style={{color: "#D9480F" , borderRadius: "5px"}} />}
                variant="outline"
              >
                Google
              </Button>
              <Button
                color={"dark"}
                style={{ borderColor: "lightgray" }}
                px={35}
                leftIcon={<IconBrandFacebook size={18} style={{color: "blue"}} />}
                variant="outline"
              >
                Facebook
              </Button>
            </Group>
            <Text ta={"center"} c={"dimmed"} fz={"sm"}>
              Don't you have an account? <Anchor fw={"bold"} >Sign Up</Anchor>
            </Text>
          </Stack>
        </form>
      </Center>
      <Text c="dimmed" fz="xs" ta="center">
        <IconNoCopyright size={10} /> 2022 ALL RIGHTS RESERVED
      </Text>
    </Flex>
  );
}
