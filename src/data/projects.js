import airlineImg from "../../public/images/projects/airline-check-in.png";
import servicePaymentsImg from "../../public/images/projects/service-payments-api.png";
import playlistsImg from "../../public/images/projects/playlists-api.png";
import moviesImg from "../../public/images/projects/movies-api.png";
import portfolioDjangoImg from "../../public/images/projects/django-portfolio.png";
import inventorySystemImg from "../../public/images/projects/inventory-sys.png";
import rickAndMortyImg from "../../public/images/projects/rick-and-morty-app.png";
import lambdaFunctionImg from "../../public/images/projects/lambda-function.png";
import servicesPaymentsFrontendImg from "../../public/images/projects/screenpayments-1.png";
import jobsImg from "../../public/images/projects/jobs-api.png";
import jobsapifrontendImg from "../../public/images/projects/jobs-app-1.png";
import jobsCrudFlaskImg from "../../public/images/projects/job-crud-flask.png";
import bookStorageAndPokepediaImg from "../../public/images/projects/pokepedia.png";
import hotelBookingApiImg from "../../public/images/projects/hotel-booking-api.png";
import onlineCoursesApiImg from "../../public/images/projects/online-courses-api.png";
import onlineCoursesApiFrontendImg from "../../public/images/projects/online-courses-api-frontend-1.png";
import projectsApiImg from "../../public/images/projects/projects-api.png";
import IV100TelegramBotImg from "../../public/images/projects/iv-100.png";

const projectsData = [
  {
    id: 1,
    type: "Django",
    title: "Airline Check-in",
    summary:
      "It is a REST API with a single endpoint that allows querying by flight ID and returns the simulation of an automatic check-in for passengers of Andes Airlines.",
    img: airlineImg,
    link: "/AirlineCheckIn",
    github: "https://github.com/Geffrerson7/airline-check-in",
  },
  {
    id: 2,
    type: "Django",
    title: "Service Payments API",
    summary:
      "Streaming service payment API. It has the functionalities of creating payments and automatically registering if it is expired, creating and updating streaming services, and creating a user with a profile picture.",
    img: servicePaymentsImg,
    link: "/ServicesPaymentsAPI",
    github: "https://github.com/Geffrerson7/DJANGO-PAYMENTS-API",
  },
  {
    id: 3,
    type: "Node",
    title: "Playlists API",
    img: playlistsImg,
    summary:
      "It is an API that creates, lists and updates song playlists and songs in public or private mode for authenticated users. It also has the functionality to create and list users and login. This app was built using TypeScript, Express, Prisma and PostgreSQL.For authentication users we used JWT and for API documentation I used Postman.",
    link: "/PlaylistAPI",
    github: "https://github.com/Geffrerson7/PLAYLIST-API",
  },
  {
    id: 4,
    type: "Node",
    title: "Movies API",
    summary:
      "This app was built using TypeScript, Express, Prisma and PostgreSQL. You are able to create users, clients, movies and movies copy. For authentication users I used JWT and for API documentation I used Postman.",
    img: moviesImg,
    link: "/MoviesAPI",
    github: "https://github.com/Geffrerson7/APP-MOVIES",
  },
  {
    id: 5,
    type: "Flask",
    title: "RICK AND MORTY APP",
    summary:
      "This is an application that displays data on the characters from the Rick and Morty series, including pagination, and also shows data on characters that appear in a specific episode. It's designed using Flask, Python, MongoDB, HTML, and Bootstrap.",
    img: rickAndMortyImg,
    link: "/RickAndMorty",
    github: "https://github.com/Geffrerson7/FLASK-APP-RICK-AND-MORTY",
  },
  {
    id: 6,
    type: "Node",
    title: "System Inventory",
    summary:
      "This app was built using TypeScript, Express, Prisma, Pusher, Twilio, Supabase and PostgreSQL for the backend and Angular and Typescript por the frontend, You are able to create users, clients, suppliers, products, categories and orders. Also authenticated users will have access to private songs. For authentication users we used JWT.",
    img: inventorySystemImg,
    link: "/InventorySystem",
    github: "https://github.com/Geffrerson7/Proyecto-Unidad-8-Back",
  },
  {
    id: 7,
    type: "Django",
    title: "Django Portfolio",
    summary:
      "It is a portfolio where you can view and add your programming projects. The Back End part was done with Django and the Front End part was done with Bootstrap and a free template.",
    img: portfolioDjangoImg,
    link: "/DjangoPortfolio",
    github: "https://github.com/Geffrerson7/PORTFOLIO-DJANGO",
  },
  {
    id: 8,
    type: "Python",
    title: "Mercadopago Lambda function",
    summary:
      "Lambda function for an endpoint that creates a payment with the MercadoPago library in Python, using AWS Lambda and API Gateway services.",
    img: lambdaFunctionImg,
    link: "/LambdaFunction",
    github: "https://github.com/Geffrerson7/Lambda-function-U6",
  },
  {
    id: 9,
    type: "React",
    title: "Services Payments Api Frontend",
    summary:
      "Application to create service payments, create and update services, and classify payments as paid or overdue. It was designed with HTML, CSS, JavaScript, React, Vite and TailwindCSS.",
    img: servicesPaymentsFrontendImg,
    link: "/ServicesPaymentsApiFrontend",
    github: "https://github.com/Geffrerson7/SERVICES-PAYMENTS-API-FRONTEND",
  },
  {
    id: 10,
    type: "Django",
    title: "Jobs Api",
    summary: "API to monitor your job applications on different web portals.",
    img: jobsImg,
    link: "/JobsAPI",
    github: "https://github.com/Geffrerson7/JOBS-API",
  },
  {
    id: 11,
    type: "React",
    title: "Jobs Api Frontend",
    summary:
      "It is an application to list, register, update, and delete your job applications.",
    img: jobsapifrontendImg,
    link: "/JobsApiFrontend",
    github: "https://github.com/Geffrerson7/JOBS-API-FRONTEND",
  },
  {
    id: 12,
    type: "Flask",
    title: "Job CRUD",
    summary:
      "It is an app built with Flask, Python, HTML, and JavaScript to create, list, update, and delete your job applications.",
    img: jobsCrudFlaskImg,
    link: "/JobCRUD",
    github: "https://github.com/Geffrerson7/JOB-CRUD",
  },
  {
    id: 13,
    type: "Python",
    title: "Book Storage and Pokepedia",
    summary:
      "It is an application that has two parts: The Book Storage, which is a program that allows you to register, search, and download book data such as title, genre, ISBN, publisher, and author(s) through the command line. And the Pokepedia, which is a program that allows you to search for data from the PokeAPI, such as name, ability, and image URL of the pokemons through the command line.",
    img: bookStorageAndPokepediaImg,
    link: "/BookStorageAndPokepedia",
    github: "https://github.com/Geffrerson7/BOOK-STORAGE-AND-POKEPEDIA",
  },
  {
    id: 14,
    type: "Node",
    title: "Airline Check-in Node Version",
    summary:
      "It is a REST API with a single endpoint that allows querying by flight ID and returns the simulation of an automatic check-in for passengers of Andes Airlines.",
    img: airlineImg,
    link: "/AirlineCheckInNodeVersion",
    github: "https://github.com/Geffrerson7/simulacion-check-in-aerolinea",
  },
  {
    id: 15,
    type: "Django",
    title: "Hotel Booking API",
    summary: "It is an API for making online reservations in a hotel.",
    img: hotelBookingApiImg,
    link: "/HotelBookingAPI",
    github: "https://github.com/Geffrerson7/HOTEL-RESERVATION-API",
  },
  {
    id: 16,
    type: "Django",
    title: "Online Courses API",
    summary:
      "It is an API for simulating online course purchases using the Mercado Pago API.",
    img: onlineCoursesApiImg,
    link: "/OnlineCoursesAPI",
    github: "https://github.com/Geffrerson7/ONLINE-COURSES-API",
  },
  {
    id: 17,
    type: "React",
    title: "Online Courses API Frontend",
    summary: "It is an application to make online course purchases.",
    img: onlineCoursesApiFrontendImg,
    link: "/OnlineCoursesApiFrontend",
    github: "https://github.com/Geffrerson7/ONLINE-COURSES-API-FRONTEND",
  },
  {
    id: 18,
    type: "Flask",
    title: "Projects API",
    summary: "It is an application to make online course purchases.",
    img: projectsApiImg,
    link: "/ProjectsAPI",
    github: "https://github.com/Geffrerson7/PROJECTS-API",
  },
  {
    id: 19,
    type: "Python",
    title: "IV 100 Telegram Bot",
    summary: "Telegram bot for sending Pokemon coordinates with IV 100.",
    img: IV100TelegramBotImg,
    link: "/IV100TelegramBot",
    github: "https://github.com/Geffrerson7/iv100-bot",
  },
];

export default projectsData;
