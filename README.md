## Set up an node-express instance using docker
- Build a docker file
```docker build -t beesheer/node-express:1.0.2 .```

- Push to remote
```docker login```
```docker push beesheer/node-express```
OR with a version number: 
```docker push beesheer/node-express:1.0.2```

- Spawn it in docker
```docker run -d -p 3000:3000 --name node-express beesheer/node-express:1.0.2```


- Test with wrk using a docker container
```docker run --rm williamyeh/wrk -c20 -d30 -t12 http://192.168.99.100:3000/api/comment```
