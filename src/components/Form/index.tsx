import { Button, Group, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export const Form = () => {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
    },
    validate: {
      name: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
      email: (value) => (EMAIL_REGEX.test(value) ? null : 'Invalid email'),
      subject: (value) =>
        value.length < 10 ? 'A frase deve ter pelo menos 10 caracteres' : null,
    },
  });

  const handleClearForm = () => {
    form.setValues({
      name: '',
      email: '',
      subject: '',
    });
    form.clearErrors();
  };

  const handleSubmit = (values: typeof form.values) => console.log(values);

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        label="Seu nome"
        placeholder="Peter Quill"
        {...form.getInputProps('name')}
      />

      <TextInput
        type="email"
        label="Seu email"
        placeholder="peterquill@gmail.com"
        {...form.getInputProps('email')}
        style={{ marginTop: 10 }}
      />

      <Textarea
        label="Assunto"
        placeholder="Fale um pouco sobre o projeto"
        {...form.getInputProps('subject')}
        style={{ marginTop: 10 }}
      />
      <Group position="right" mt="md">
        <Button color="indigo" variant="subtle" onClick={handleClearForm}>
          Limpar
        </Button>
        <Button type="submit" color="indigo">
          Enviar mensagem
        </Button>
      </Group>
    </form>
  );
};
