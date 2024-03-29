import { Title } from "@mantine/core";
import AuthorsForm from "./AuthorsForm";
import AuthorsList from "./AuthorsList";

    export default function App() {

        return (
            <div>
                <Title>Authors</Title>
                <AuthorsForm />
                <AuthorsList/>
            </div>
        );
}
