import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Form,
} from "react-bootstrap";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2MjVjODY4LTU1ZDMtNDY1NS1hM2IxLWYxZTQ0MTZiMzljZSIsInBhc3N3b3JkIjoiJDJiJDEwJC5wYkpYWExmLzFDL2dreFh6S3gyRy4wdS9uM2VlaktEZnc1N2hDVzhHcVZoWHVIR1JLSE51IiwiaWF0IjoxNzAxODcyNzcwfQ.bS6xnvjOi1BSIUYsjzXM-NLCamWLTQI7FuMO74RnwAY"
const URL_BACKEND = "http://localhost:8000"

type Car = {
  id: string;
  model: string;
  image: string;
  plate: string;
  description: string;
  capacity: string;
  rentPerDay: number
}

function DashboardCar() {
  const [cars, setCars] = useState<Car[]>()
  const [car, setCar] = useState<Car>()

  async function getCars() {
    const res = await fetch(`${URL_BACKEND}/api/v1/cars`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const json = await res.json()
    if (res.ok) {
      setCars(json)
    } else {
      console.error(json)
    }
  }

  async function getCar(id: string) {
    const res = await fetch(`${URL_BACKEND}/api/v1/cars/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const json = await res.json()
    if (res.ok) {
      setCar(json)
    } else {
      console.error(json)
    }
  }

  async function editCar() {
    const res = await fetch(`${URL_BACKEND}/api/v1/cars/${car?.id}`, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })

    const json = await res.json()
    if (res.ok) {
      console.log(json)
    } else {
      console.error(json)
    }

    setCar(undefined)
    await getCars()
  }

  async function editCarButton(id: string) {
    await getCar(id)
  }

  function carFormChange(key: keyof Car, value: string) {
    const prevValue = Object.assign({}, car)
    setCar({
      ...prevValue,
      [key]: value
    })
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <>
      <Container fluid>
        {car && 
          (        <Card> 
          <Card.Body>
            <h3>Edit Cars</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Model</Form.Label>
              <Form.Control 
                value={car?.model} 
                onChange={(e) =>  carFormChange('model', e.target.value)} 
                type="text" 
                placeholder="Please enter car models"
              />
              <Form.Label>Plate</Form.Label>
              <Form.Control 
                value={car?.plate} 
                onChange={(e) =>  carFormChange('plate', e.target.value)} 
                type="text" 
                placeholder="Please enter car models"
              />
              <Form.Label>Description</Form.Label>
              <Form.Control 
                value={car?.description} 
                onChange={(e) =>  carFormChange('description', e.target.value)} 
                type="text" 
                placeholder="Please enter car models"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={editCar}>
              Submit
            </Button>
          </Card.Body>
        </Card>
)
        }

        <Row>
          {cars?.map(car => {
            return (
              <Col key={car.plate}>
                <Card className="card-tasks">
                  <Card.Header>
                    <Card.Title as="h4">{car.model}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <img src={car.image} width={300} height={300} style={{ objectFit: "cover" }} alt={car.model} />
                    <p className="card-category" style={{
                        lineHeight: '1.5em',
                        height: '3em',
                        whiteSpace: 'pre-line',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%'
                    }}>{car.description}</p>
                    <Button variant="primary" onClick={() => editCarButton(car.id)}> Edit </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  );
}

export default DashboardCar;
