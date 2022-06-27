# Test 3
Create a normal consumer on topic "foo", and a normal consumer on topic "bar". And publish 10 messages on "foo" only. 

## Environments
| Name | value | Description|
| --- | ----| --------- |
| LOG_LEVEL | `info` | 
| PORT | 3000 |  |
| DELAY_IN_MS | 500 | The slow consumer on average takes 500ms more time to print and turn back to idle |
| PUSH_SCHEDULE_IN_MS | 500 | The pubsub will push messages every 0.5 seconds |

## Results

### Pubsub server
```
$ pubsubyy start
info: A Pubsub Server is started at localhost:3000
info: topic - foo contains 1 subscribers
info: topic - bar contains 1 subscribers
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: topic - foo contains 6 msg
info: topic - foo contains 7 msg
info: topic - foo contains 8 msg
info: topic - foo contains 9 msg
info: topic - foo contains 10 msg
info: There are 10 messages and 1 workers for topic foo
info: There are 9 messages and 1 workers for topic foo
info: There are 8 messages and 1 workers for topic foo
info: There are 7 messages and 1 workers for topic foo
info: There are 6 messages and 1 workers for topic foo
info: There are 5 messages and 1 workers for topic foo
info: There are 4 messages and 1 workers for topic foo
info: There are 3 messages and 1 workers for topic foo
info: There are 2 messages and 1 workers for topic foo
info: There are 1 messages and 1 workers for topic foo
```

### Consumer 1 (foo)
```
$ pubsubyy consume foo
info: A client is started at localhost:59739, consuming topic "foo"
info: [foo]: printing e1428e65-f305-4043-b439-0d8965abf7aa, which takes 268 ms
info: [foo]: printing 075071c1-9874-4310-b280-5a8b82679c28, which takes 104 ms
info: [foo]: printing b2a19705-eaef-4a10-9e49-729f7ef99f31, which takes 276 ms
info: [foo]: printing 0b12e3fc-100e-4cd8-bba8-5b94ce2e3c54, which takes 291 ms
info: [foo]: printing 3a5aae3a-560f-4b1a-a908-23aa90a71e2b, which takes 414 ms
info: [foo]: printing 14524781-43b8-4eb9-bf9b-6d352d361847, which takes 221 ms
info: [foo]: printing ffafb22f-9a74-432d-9e45-41facc6405d3, which takes 384 ms
info: [foo]: printing 6eee30b0-c22b-417f-89d3-1e528654a332, which takes 188 ms
info: [foo]: printing a621f2dd-e9c6-426e-af4b-29dcf11c1b11, which takes 439 ms
info: [foo]: printing 8f29b356-f4b7-49b2-b1f7-ef3ec616b6ff, which takes 281 ms
```

### Consumer 2 (bar)
```
$ pubsubyy consume bar     
info: A client is started at localhost:59743, consuming topic "bar"
```

### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"e1428e65-f305-4043-b439-0d8965abf7aa","topic":"foo"}
info: status: 201; body: {"message":"075071c1-9874-4310-b280-5a8b82679c28","topic":"foo"}
info: status: 201; body: {"message":"b2a19705-eaef-4a10-9e49-729f7ef99f31","topic":"foo"}
info: status: 201; body: {"message":"0b12e3fc-100e-4cd8-bba8-5b94ce2e3c54","topic":"foo"}
info: status: 201; body: {"message":"3a5aae3a-560f-4b1a-a908-23aa90a71e2b","topic":"foo"}
info: status: 201; body: {"message":"14524781-43b8-4eb9-bf9b-6d352d361847","topic":"foo"}
info: status: 201; body: {"message":"ffafb22f-9a74-432d-9e45-41facc6405d3","topic":"foo"}
info: status: 201; body: {"message":"6eee30b0-c22b-417f-89d3-1e528654a332","topic":"foo"}
info: status: 201; body: {"message":"a621f2dd-e9c6-426e-af4b-29dcf11c1b11","topic":"foo"}
info: status: 201; body: {"message":"8f29b356-f4b7-49b2-b1f7-ef3ec616b6ff","topic":"foo"}
```