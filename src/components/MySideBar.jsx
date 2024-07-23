import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

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
        console.log(result); //console.log per vedere i dati recuperati
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
          style={{ width: "400px", height: "150px", marginBottom: "1rem" }}
        >
          <div className="d-flex">
            <Image
              style={{ width: "50px", height: "50px" }}
              src={profile.image}
              roundedCircle
              className="me-3"
            />
            <Card.Body
              className="d-flex flex-column justify-content-between"
              style={{ width: "70%" }}
            >
              <div>
                <Card.Title>
                  {profile.name} {profile.surname}
                </Card.Title>
                <Card.Text>{profile.title}</Card.Text>
              </div>
              <Button variant="primary" style={{ width: "50%" }}>
                Details
              </Button>
            </Card.Body>
          </div>
        </section>
      ))}
    </div>
  );
}

export default MySideBar;
