# Test 5
Create a slow consumer on topic "foo" firstly, and a normal consumer on the same topic "foo". 
The normal consumer takes less than .5 second to process a message, and the slow consumer takes more than .5 second to process a message. 
The push is scheduled to run every .5 second, we are expecting the normal consumer delivers more messages. 

## Environments
| Name | value | Description|
| --- | ----| --------- |
| LOG_LEVEL | `info` | 
| PORT | 3000 |  |
| DELAY_IN_MS | 500 | The slow consumer on average takes .5 sec more to process and turn back to idle |
| PUSH_SCHEDULE_IN_MS | 500 | The pubsub will push messages every .5 second |

## Results
### Pubsub Server
```
pubsubyy start
info: A Pubsub Server is started at localhost:3000
info: topic - foo contains 1 subscribers
info: topic - foo contains 2 subscribers
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: There are 5 messages and 2 workers for topic foo
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: topic - foo contains 6 msg
info: topic - foo contains 7 msg
info: There are 7 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 7 msg
info: There are 7 messages and 2 workers for topic foo
info: There are 5 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 4 messages and 2 workers for topic foo
info: There are 2 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 1 messages and 2 workers for topic foo
```

### Slow Consumer starts first
```
pubsubyy consume foo slow
info: A slow client is started at localhost:61691, consuming topic "foo"
info: [foo]: printing 9d7f0c0f-9bc1-4f3a-8821-76a6f962780c, which takes 627 ms
info: [foo]: printing 5dccdb3c-fff3-49cc-8a8e-0fec9c8591aa, which takes 562 ms
info: [foo]: printing 3c0d728c-0bb7-474d-835d-8e45a6c5ae9f, which takes 624 ms
info: [foo]: printing a576e378-4809-487f-99a0-c4fd0b0e8c6d, which takes 831 ms
```

### Normal Consumer
```
pubsubyy consume foo
info: A client is started at localhost:61694, consuming topic "foo"
info: [foo]: printing 66951295-ebb6-428d-95df-31fc68d9ba19, which takes 411 ms
info: [foo]: printing 83ffea5a-4912-424e-8aac-ea087bdd97a4, which takes 327 ms
info: [foo]: printing 1cd1ac8c-3d8b-4289-a98a-7540c235a466, which takes 260 ms
info: [foo]: printing 23547066-c07d-47da-9a24-2369868f3d9b, which takes 212 ms
info: [foo]: printing ba189fdb-2869-4b1f-81c2-8a4de230a975, which takes 216 ms
info: [foo]: printing 81e2b9c7-dc3e-4e84-96ff-b3fcfd63ac13, which takes 470 ms
```

### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"9d7f0c0f-9bc1-4f3a-8821-76a6f962780c","topic":"foo"}
info: status: 201; body: {"message":"66951295-ebb6-428d-95df-31fc68d9ba19","topic":"foo"}
info: status: 201; body: {"message":"ba189fdb-2869-4b1f-81c2-8a4de230a975","topic":"foo"}
info: status: 201; body: {"message":"83ffea5a-4912-424e-8aac-ea087bdd97a4","topic":"foo"}
info: status: 201; body: {"message":"5dccdb3c-fff3-49cc-8a8e-0fec9c8591aa","topic":"foo"}
info: status: 201; body: {"message":"1cd1ac8c-3d8b-4289-a98a-7540c235a466","topic":"foo"}
info: status: 201; body: {"message":"81e2b9c7-dc3e-4e84-96ff-b3fcfd63ac13","topic":"foo"}
info: status: 201; body: {"message":"23547066-c07d-47da-9a24-2369868f3d9b","topic":"foo"}
info: status: 201; body: {"message":"3c0d728c-0bb7-474d-835d-8e45a6c5ae9f","topic":"foo"}
info: status: 201; body: {"message":"a576e378-4809-487f-99a0-c4fd0b0e8c6d","topic":"foo"}
```
