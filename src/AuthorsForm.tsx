import { Box, Button, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { AuthorsAPI } from './Const'
import axios from 'axios'

const AuthorsForm = () => {

    const form = useForm({
        initialValues: {
          authorName:"",
        },
        validate : {
            authorName : (value) => {
                if(value.length < 3){
                    return "Author's name must be at least 3 characters long"
                }
            }
        },
    })

    const addAuthor = async (values : {authorName : string}) => {
        const response = await axios.post(AuthorsAPI, values);
        console.log(response.data);
    }
    
  return (
    <Box maw={340} mx="auto">
        <form onSubmit={form.onSubmit((values) => addAuthor(values))}>
            <TextInput
                withAsterisk
                label="Author's Name"
                placeholder="Damidu Shalinda"
                {...form.getInputProps('authorName')}
                />
            <Group justify='flex-end' mt='md'>
                <Button type='submit' color='blue'>Submit</Button>
            </Group>
        </form>
    </Box>
  )
}

export default AuthorsForm