import { Button, Container, Form } from 'react-bootstrap';
import './AddExperience.css'

function AddExperience() {
    // far comparire il componente e il pulsante per aggiungere solo se profilo = /me del contesto
    return ( 
        <Container id="addExperience">
            <Button>
                Add Experiences
            </Button>
            <Form>
                <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Control type='text'></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default AddExperience;