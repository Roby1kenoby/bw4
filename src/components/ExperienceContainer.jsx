import './ExperienceContainer.css'
import { getProfileUrl } from '../fetchUrls';

function ExperienceContainer({id}) {
    const apiKey = process.env.REACT_APP_APIKEY;

    const getExperiences = async function(){
        const resp = await fetch(getProfileUrl +'/'+ id +'/experiences',{
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey
            }
        })
        const data = await resp.json()
        console.log(data)
    }
    getExperiences()
    return ( 
        <ul>
            
        </ul>
    );
}

export default ExperienceContainer;