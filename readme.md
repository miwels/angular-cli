# Readme

To deploy and run the application:

    git clone git@github.com:miwels/angular-cli.git
    cd angular-cli
    npm install
    ./bin/www  # runs the node webserver
    mongod     # runs the mongo server
    npm start  # alias to 'ng serve'
    npm test   # runs the tests
    
The application will run on port 4200 and the node server on por 3000. Requests are proxied' using the config file **proxy.conf.json**

This app has been created using the latest version of **Angular 2** and the command line tool **angular-cli**

You might need to install karma globally in order to make the tests work:

    npm install karma-cli -g
