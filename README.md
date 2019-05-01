# Project Title

Finals Project Multimedia: Record Video and Streaming 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software: 

- PHP 
- Npm 
- Git 

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository to your local machine

```
$ git clone https://github.com/minhtoarsenal/final-project-multimedia.git
$ cd final-project-multimedia
```

Run npm install 

```
$ npm install 
```

Next 

```
$ npm run build  
```
Finally, to run the client 

```
$ npm run start 
```

Go to http://localhost:8080/audio-video.html to start recording video from webcam or other external device. 

To run the server 

```
$ php -S localhost:8001  
```

- Note: Recored videos will be stored in folder /uploads 



To stream stored videos, run 

```
node webm.js 9001 uploads/name-of-file.webm
```

Then go to http://localhost:9001/ to watch video 