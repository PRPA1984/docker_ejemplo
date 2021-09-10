import axios from "axios"
import React, { useEffect, useState } from "react"
import { Jumbotron, Button, Card } from "react-bootstrap"
import { useErrorHandler } from "../common/utils/ErrorHandler"


export default function Welcome() {

    const [apiResponse, setApiResponse] = useState()
    const errorHandler = useErrorHandler()

    const api_key = 'D9tm0eMC2dbEDXawLfqaVvFGKvycdAl82mgsbwvs'

    const loadImage = async () => {
        try {
            const res = await (await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)).data
            setApiResponse(res)
        } catch (error) {
            errorHandler.processRestValidations(error)
        }
    }

    useEffect(() => {
        void loadImage() 
    },[])


    if (apiResponse) {
        return (
            <div>
                <Jumbotron>
                <h1>Hello, Docker world!</h1>
                <p>
                    Esta es una aplicación desarrollada con React que consulta a la API de 
                    la NASA para obtener la imagen del día junto con su descripción.
                </p>
                <p>
                    <Button 
                    variant="primary"
                    onClick={() => window.open('https://api.nasa.gov/','_blank')}>
                        
                     Documentación de API (NASA)
                    </Button>
                </p>
                </Jumbotron>
                <Card>
                <Card.Img variant="top" src={apiResponse!['hdurl']} />
                <Card.Body>
                    <Card.Text>
                    {apiResponse!['explanation']!}
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        )
    }
    else {
        return (
            <div>
                <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    Esta es una aplicación desarrollada con React que consulta a la API de 
                    la NASA para obtener la imagen del día junto con su descripción.
                </p>
                <p>
                    <Button 
                    variant="primary"
                    onClick={() => window.open('https://api.nasa.gov/','_blank')}>
                        
                     Documentación de API(NASA)
                    </Button>
                </p>
                </Jumbotron>
                <h5>Cargando imagen...</h5>
            </div>
        )
    }


}
