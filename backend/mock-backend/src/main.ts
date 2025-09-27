import express from 'express';
import { aircraftList, findFlights, flightList, getFlightById } from './test-data';
import cors from 'cors';
import bodyPerser from 'body-parser';
import { addFlightHypermedia, addFlightInfoHypermedia, flightsToFlightInfoDto, linkResources } from './util';
import { Flight, FlightConnection, FlightOperator, FlightTimes } from './entities';

const app = express();
app.use(cors());
app.use(bodyPerser.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to mock-backend!' });
});

app.get('/api/aircraft-infos', (req, res) => {
  res.json(aircraftList);
});

app.get('/api/aircraft-infos/:id', (req, res) => {
  const aircraftId = parseInt(req.params.id);
  const aircraft = aircraftList.find(a => a.id === aircraftId);
  if (aircraft) {
    res.json(aircraft);
  } else {
    res.status(404).send({ message: 'Aircraft not found' });
  }
});

app.get('/api/flight-infos', (req, res) => {
  const from = req.query.from as string;
  const to = req.query.to as string;
  const date = req.query.date as string;

  const filteredFlights = findFlights(from, to, date).slice(0, 30); // limit to 30 results
  const flightInfos = flightsToFlightInfoDto(filteredFlights);
  const result = linkResources(req, flightInfos, addFlightInfoHypermedia);
  res.json(result);
});

app.get('/api/flight-infos/:id', (req, res) => {
  const flightId = parseInt(req.params.id);
  const flight = flightList.find(f => f.id === flightId);
  const flightInfo = flightsToFlightInfoDto([flight]);
  const result = linkResources(req, flightInfo, addFlightInfoHypermedia);
  res.json(result);
});

app.get('/api/flights/:id', (req, res) => {
  const flight = getFlightById(req.params.id);
  if (flight) {
    res.json(linkResources(req, flight, addFlightHypermedia));
  } else {
    res.status(404).send({ message: 'Flight not found' });
  }
});

app.put('/api/flights/:id', (req, res) => {
  const flight: Flight = req.body;
  // Find the flight and update its times (in a real app, you'd update the DB)
  const flightIndex = flightList.findIndex(f => f.id === flight.id);
  if (flightIndex >= 0) {
    flightList[flightIndex] = flight;
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Flight not found' });
  }
});

app.put('/api/flights/:id/connection', (req, res) => {
  const flightConnection: FlightConnection = req.body;
  const flight = getFlightById(req.params.id);
  if (flight) {
    flight.connection = flightConnection;
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Flight not found' });
  }
});

app.put('/api/flights/:id/times', (req, res) => {
  const flightTimes: FlightTimes = req.body;
  const flight = getFlightById(req.params.id);
  if (flight) {
    flight.times = flightTimes;
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Flight not found' });
  }
});

app.put('/api/flights/:id/operator', (req, res) => {
  const flightOperator: FlightOperator = req.body;
  const flight = getFlightById(req.params.id);
  if (flight) {
    flight.operator = flightOperator;
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Flight not found' });
  }
});

const port = 5100;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
