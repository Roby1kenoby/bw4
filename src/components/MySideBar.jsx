import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import './MySideBar.css';

function MySideBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_ANTONIO}`,
            },
          }
        );
        const result = await response.json();
        console.log(result); // console.log per vedere i dati recuperati
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ms-3">
      <p><b>Altri profili simili</b></p>
      {data.slice(412, 422).map((profile, index) => (
        <section
          key={index}
          className="profiliSimili"
        >
          <div className="d-flex">
            <Image
              src={profile.image}
              roundedCircle
              className="me-3 imgProfile"
            />
            <div
              className="d-flex flex-column justify-content-between containerText"
            >
              <div>
                <p className="nameProfile">
                  {profile.name} {profile.surname}
                </p>
                <p className="titleProfile">{profile.title}</p>
              </div>
              <Button
                as={Link}
                to={`/profile/${profile._id}`}
                variant="primary"
                className="detailsBtn"
              >
                Details
              </Button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default MySideBar;
