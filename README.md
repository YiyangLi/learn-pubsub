# Learn Pubsub
A push-based Pubsub API server developed in TypeScript / Express.js. The module consists of 3 parts. 
- The Pubsub Server scheduled to send messages to consumers.
- The send-and-forget publisher that publishes a message to the pubsub server.
- A long-running consumer that waits for messages from the pubsub server. 

Regardless of the size of consumers, each message will be processed once by one consumer only. 

## Install
### Prerequesite 
[npm > 7.0](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[node > 12.9.0](https://nodejs.org/en/download/)

### Environment variables
[dotenv](https://www.npmjs.com/package/dotenv) is used in the project to read the environment variables. You can either set them globally or set them via the file `.env` in the same folder. 

| Name | type | Description | Default |
| --- | ----| ----------- | --------- |
| LOG_LEVEL | enum | the log level for the logger | info |
| PORT | number | Specify the port for the Pubsub server | 3000 |
| DELAY_IN_MS | number | To create a slow consumer, you may setup an extra waiting time, the unit is millisecond | 1000 |
| PUSH_SCHEDULE_IN_MS | number | the frequency to check the messages size and send messages to consumers if not empty, the unit is millisecond | 500 |
| CLOSE_AFTER_IDLE_IN_MS | number | timeout for consumers, if there is no messages delivered for a while, it will be closed | 60000 |

### To install
Developed in node, but you could run it from cli after the installation. 

```shell
$ git clone git@github.com:YiyangLi/learn-pubsub.git
$ cd learn-pubsub
$ npm install
$ npm link
```

You could get the help menu to verify the installation. 
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



## How to run it
If you install it successfully, the command will be added to your path. 
It's recommended to setup environment variables via an `.env` file. 
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

The pubsub server guarantees a message is delivered successfully. Once a message delivered, it will be dropped. The server doesn't, however, guarantee the message is processed the consumer successfully. 

### To publish a message
Follow the format `pubsubyy publish <topic> [message]`, where `message` is optional. If it's not defined, a random-generated UUID will be the message. 
```shell
$ pubsubyy publish complex "a message with spaces"
$ pubsubyy publish simple
```
Use double quotes `"` if the topic or the message contains spaces.

### To initiate a consumer
Each consumer is an express server, you don't need to specify the port, it will automatically assign one for you. And the pubsub server knows the port after it successfully subscribes the topic. 

Follow the format `pubsubyy consume <topic> [slow]`, slow is an optional boolean value. If it's `true`, it will spin up a slow consumer that takes a longer time to process the message. If it's `false` or undefined, it will be a normal consumer. 


```shell
$ pubsubyy consume simple
$ pubsubyy consume "complex" true
```

Once a message is received, the consumer will respond the pubsub server by a 201 status code. To simulate a message task, the consumer prints the message in the console after a wait time. Each consumer processes one message at a time only. During the wait time, the consumer changes to busy and returns a 503 status code for a new request. The consumer becomes available after the current message is processed.  

## Test
It's not easy to build automated tests. All tests here are scenarios based. In total, I prepared 10 sets of tests, 3 easy, 4 normal, and 3 complex. 

Since each involves multiple tabs / processes under the CLI, and the environment variables matter a lot, I will include the `.env` and print the output to the corresponding README.md

### Simple
- [1 consumer, 1 topic](tests/1/README.md)
- [an aggressive push schedule but a slow consumer](tests/2/README.md)
- [2 consumers, 2 topics](tests/3/README.md)

### Medium
- [2 consumers on the same topic](tests/4/README.md)
- [2 consumers, but one of them is slow](tests/5/README.md)
- [Publish messages firstly, then start consumers](tests/6/README.md)
- [Publish messages firstly, then start a slow and a normal consumer](tests/7/README.md)

### Complex
- [8 out of 10 consumers are unavailable](tests/8/README.md)
- [8 out of 10 consumers are unavailable, less messages](tests/9/README.md)
- [100 messages, 3 random consumers](tests/10/README.md)

## Uninstall
`pubsubyy` instead of `pubsub` is added to your path, to remove it, you need to unlink it globally from the project folder, not the process folder. 
```shell
$ cd learn-pubsub
$ npm unlink -g learn-pubsub  
```

To confirm it's removed, run the following
```
npm ls -g --depth=0 --link=true
```

## API

### Pubsub Server
#### POST /publish
Publish a message to the message queue. 
sample body
```json
{
  "message": "123",
  "topic": "foo"
}
```

#### POST /subscribe
Subscribe a consumer, the port is the identifier and also the endpoint used to send messages to. 
sample body
```json
{
  "port": 50481,
  "topic": "foo"
}
```

### Consumer
#### POST /work
Send a message to consumer to process, the topic is used for validation. 
sample body
```json
{
  "topic": "foo",
  "message": "123"
}
```

## Limitation
### The pubsub server
Normally, you may press `cmd + c` or `ctrl + c` to terminate the consumer. The brute force won't unsubscribe the consumer from the pubsub server. The pubsub server will consequently accumulate a list of unhealthy consumers, and try to push messages to all consumers, including unhealthy, in every iteration. It's a waste of resources. 

The pubsub server drops a message from the queue once it's delivered to consumer. The pubsub server doesn't know the state or status of the message task.

### The consumer
The consumer, an express server, will close if there are no messages received in a period. Unlike a brute force termination, the express server is closed programmatically. However, the unsubscribe endpoint is not implemented in the pubsub server, the consumer is not removed from the pubsub server when it's being closed.

The port is randomly allocated when a consumer starts, there is a rare case where a new consumer starts at the port recycled from an old consumer, and their topics are different. And because the old consumer, identified by the port, is not unsubscribed. The message under the old topic will be wrongly sent to the new consumer. The short-term fix is to validate the request and reject it if the topic is different. The long-term fix is to use a identifier other than a networking port, or even better, unsubscribe the old consumer gracefully and maintain the list of subscriptions correctly. 

## Todo list
(if I have time)
- Draft the doc for API (OpenAPI 3)
- Implement unsubscribe endpoint in the Pubsub Server and unsubscribe it after the consumer is closed.
- use an UUID instead of the port number to identify an consumer.
- Learn how to run automated tests and find a CI tool for it. 
- Learn the long polling version, and learn the golang from [this repo](https://github.com/teris-io/longpoll/tree/master)


## The Caveat
Looks like [channels from the golang](https://go.dev/tour/concurrency/2) is designed to solve this problem. 
JavaScript, however, is also convenient here because it is a single-threaded language. The language that comes with an event-loop brings you the concurrency, but allow you to skip the brain-teasing Mutex or Lock. However, there are some tricks in dealing with a collection. 
1. concat 2 arrays using push and rest arguments
```
arr.push(...anotherArray);
```
vs
```
arr = arr.concat(anotherArray);
```
2. [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) dequeues multiple elements from an array, and the return is elements dequeued. 
[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) however gives you a shallow COPY of the array, but doesn't modify the original array. 
3. To process messages concurrently, you can use Promise.all or Promise.allSettled. 
```
const asyncRes = await Promise.all(arr.map(async (i) => {
	await sleep(10);
	return i + 1;
}));
```
However, if you worry about the rate limit, you could lower the concurrency by grouping them to chunks firstly, process the big group concurrently, but process each item in the group sequentially. 
```
const arr = [30, 10, 20, 20, 15, 20, 10];

console.log(
	_.groupBy(arr, (_v, i) => Math.floor(i / 3))
);
// {
// 	0: [30, 10, 20],
// 	1: [20, 15, 20],
// 	2: [10]
// }

return Object.values(groups)
	.reduce(async (memo, group) => [
		...(await memo),
		...(await Promise.all(group.map(iteratee)))
	], []);
```
This is a [good read](https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/).
