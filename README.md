## Set up an node-express instance using docker
- git clone this repo
```git clone https://github.com/beesheer/node-express-scylla-server```

- npm install
```npm install```

- Build a docker file
```docker build -t beesheer/node-express:1.0.2 .```

- Push to remote docker hub
```docker login```
```docker push beesheer/node-express```
OR with a version number: 
```docker push beesheer/node-express:1.0.2```

- Spawn it in docker on a server
```docker run -d -p 3000:3000 --name node-express beesheer/node-express:1.0.2```

- Test with wrk using a docker container
```docker run --rm williamyeh/wrk -c20 -d30 -t12 http://192.168.99.100:3000/api/comment```
