build-img:
	git pull origin master
	docker build --no-cache -t salon-lew:latest .

run: stop
	docker run -d -p 80:80 --name=salon-lew --restart=always salon-lew:latest

stop:
	docker rm -f salon-lew|| true

dev-run: stop
	docker run -d -p 8080:80 --name=salon-lew --restart=always salon-lew:latest