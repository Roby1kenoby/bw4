import { useParams } from 'react-router-dom';
import './ProfilePage.css'
import { Container, Button } from 'react-bootstrap';
import { getProfileUrl } from '../../fetchUrls';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContextProvider';

function ProfilePage() {
// da spostare nel componente ProfileContainer, qui dentro ci devono andare quello e l'experience container

    // recupero dall'url l'id del profilo da caricare
    const { id } = useParams();
    // chiave per la fetch
    const apiKey = process.env.REACT_APP_APIKEY;

    const { selectedUser, setSelectedUser } = useContext(UserContext)

    // funzione che effettua la fetch
    const getProfileData = async () => {
        const resp = await fetch(getProfileUrl + '/' + id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey
            }
        })

        const data = await resp.json()
        setSelectedUser(data)
        console.log(data)
    }
    
    useEffect(() => { getProfileData() }, [])

    return (
        // selectedUser && mi serve perchè così evito di andare in errore perchè la roba della fetch non è ancora arrivata
        // renderizzo il componente solo quando ci sono anche i dati al suo interno
        selectedUser && <Container id='profileContainer'>
            <div id='upperSection'>
                <Button id='editPhoto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0966c2" className="bi bi-camera-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                    </svg>
                </Button>
            </div>
            <div id='mainImgWrapper'>
                <div id="innerImgWrapper">
                    <svg viewBox="0 0 100 100" >
                        <circle cx="50" cy="50" r="49" fill="transparent" stroke="white" strokeWidth="3"></circle>
                    </svg>
                    <img src={selectedUser.image} alt="" />
                </div>
            </div>
            <div id='lowerSection'>
                <h5>{selectedUser.name + selectedUser.surname}</h5>
                <p>{selectedUser.title}</p>
                <p>{selectedUser.area}</p>
            </div>
        </Container>
    );
}

export default ProfilePage;