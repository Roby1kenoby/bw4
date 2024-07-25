import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_ANTONIO}`,
            },
          }
        );
        const result = await response.json();
        setProfile(result);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.name} {profile.surname}</h1>
      <p>{profile.title}</p>
      <img src={profile.image} alt={`${profile.name} ${profile.surname}`} />
      {/*altre informazioni del profilo */}
    </div>
  );
}

export default ProfileDetail;
