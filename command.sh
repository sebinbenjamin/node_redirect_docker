docker run -it --rm --name url_redirect -p 9000:9000 -v "$PWD/":/usr/src/ -w /usr/src/app node node server.js
