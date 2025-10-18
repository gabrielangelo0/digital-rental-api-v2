const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "Digital Rent - Documentation API",
        description: "Some description..."
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
    components: {
        schemas: {
            bodyCar: {
                $name: "McLaren",
                $image: "https://static.wikia.nocookie.net/pedrofilms-inc/images/7/75/3240px-McLaren_P1.jpg/revision/latest?cb=20230510135230&path-prefix=pt-br",
                $price: 100000,
                $category: "deluxe",
                $transmission: "automatic",
                $fuel: "gasolina",
                $seats: 2,
                $available: true
            },
            someResponse: {
                name: "Jhon Doe",
                age: 29,
                diplomas: [
                    {
                        school: "XYZ University",
                        year: 2020,
                        completed: true,
                        internship: {
                            hours: 290,
                            location: "XYZ Company"
                        }
                    }
                ]
            },
            someEnum: {
                '@enum': [
                    "red",
                    "yellow",
                    "green"
                ]
            }
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/cars.route'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');           // Your project's root file
});