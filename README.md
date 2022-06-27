# Learn Pubsub
A push-based Pubsub API server developed in TypeScript / Express.js. The module consists of 3 parts. 
- The Pubsub Server scheduled to send messages to consumers.
- The send-and-forget publisher that publishes a message to the pubsub server.
- A long-running consumer that waits for messages from the pubsub server. 

Regardless of size of consumers, each message will be printed by one consumer only. 

## Install
### Prerequesite 
[npm > 7.0](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
[node > 12.9.0](https://nodejs.org/en/download/)

### Environment variables
[dotenv](https://www.npmjs.com/package/dotenv) is used in the project to read the environment variables. You can either set them globally or set them via the file `.env` in the same folder. 

| Name | type | Description | Default |
| --- | ----| ----------- | --------- |
| LOG_LEVEL | `info` or `debug` | the log level for the logger | info |
| PORT | number | Specify the port for the Pubsub server | 3000 |
| DELAY_IN_MS | number | To create a slow consumer, you may setup an extra waiting time, the unit is millisecond | 1000 |
| PUSH_SCHEDULE_IN_MS | number | the frequency to check the messages size and send messages to consumers if not empty, the unit is millisecond | 500 |

### To install
Developed in node, but you could run it from cli after the installation. 

```shell
$ git clone git@github.com:YiyangLi/learn-pubsub.git
$ cd learn-pubsub
$ npm install
$ npm link
```

You could get the help menu to verify it. 
```
$ pubsubyy --help
pubsubyy [command]

Commands:
  pubsubyy start                      start a pubsub API server
  pubsubyy publish <topic> [message]  publish a message to the topic
  pubsubyy consume <topic> [slow]     consume messages on a topic

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -d, --debug    Run with debug logging                [boolean] [default: true]
  -p, --port     start the server at a port different than the one in .env: 3001
                                                      [number] [default: "3001"]
```

### To uninstall
`pubsubyy` instead of `pubsub` is added to your path, to remove it, you need to unlink it globally from the project folder, not the process folder. 
```shell
$ cd learn-pubsub
$ npm unlink -g learn-pubsub  
```

## How to run it
Assuming you have installed it successfully, you can run it from any folder under the command line. 
It's recommended to setup environment variables via the `.env` file where you run the process. 
```shell
$ touch .env
$ cat > .env << EOF
LOG_LEVEL=info
PORT=3000
DELAY_IN_MS=500
PUSH_SCHEDULE_IN_MS=3000

EOF
```

### To run the Pubsub server
```shell
$ pubsubyy start
info: A Pubsub Server is started at localhost:3000
```

The push-based pubsub server is responsible to distribute messages to consumers. If a message is not delivered because the consumer is busy or unavailable, the message will be pushed back to end of the queue. They will be distributed again in the next round. That is to say, the order of delivery may be different than the order of arrival. Each message is independent to each other. 

Once the pubsub server can guarantee a message is delivered successfully, it will no longer process the message. It can't, however, guarantee the message is processed successfully. I will cover it more under the limitation section. 

### To publish a message
Follow the format `pubsubyy publish <topic> [message]`, where `message` is optional. If it's not defined, a random UUID will be the message. 
```shell
$ pubsubyy publish complex "a message with spaces"
$ pubsubyy publish simple
```
Use double quotes `"` if you the topic or the message contains spaces.

### To initiate a consumer
Each consumer is an express server, you don't need to specify the port, it will automatically assign one for you. And the pubsub server knows the port after it successfully subscribes the topic. 

Follow the format `pubsubyy consume <topic> [slow]`, slow is an optional boolean value. If it's `true`, it will spin up a slow consumer that takes a longer time to process the message. If it's `false` or undefined, it will be a normal consumer. 


```shell
$ pubsubyy consume simple
$ pubsubyy consume "complex" true
```

Once a message is received, the pubsub will respond the pubsub server by a 201 status code. After that, the consumer will print the message in the console after a wait time. The consumer is busy and return a 503 status code. It can't no longer accept a message until the current one is printed. 


## API
```
todo: change the section to an open api. 
```
### Pubsub Server
POST /


## Limitation
### The pubsub server
Normally, you may press `cmd + c` or `ctrl + c` to terminate the consumer. The brute force won't unsubscribe the consumer from the pubsub server. The pubsub server will consequently accumulate a list of unhealthy consumers, and try to push messages in every iteration. 

### The consumer
The consumer, an express server, will close if there are no messages received in a period. However, the unsubscribe is not implemented in the pubsub server, the consumer is not removed from the pubsub server when it's being closed.

The port is randomly allocated, there is a rare case where a new consumer starts at the port recycled from an old consumer, and their topics are different. And because the old consumer, identified by the port, is not unsubscribed. The message under the wrong topic will be sent to the new consumer. The short-term fix is to block the request if the topic is different. The long-term fix is to use a different identifier, or unsubscribe the old consumer correctly. 


## Test
In total, I prepared 10 sets of tests
### Test1

### Test2

## Uninstall
```
$ npm unlink -g
```

To confirm it's removed, run the following
```
npm ls -g --depth=0 --link=true
```