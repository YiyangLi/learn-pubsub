# Test 6
Similar to the test4, but here we publish messages firstly, then create 2 normal consumers on the same topic, the traffic should be shared by the two. And one message is processed once only. 

## Environments
| Name | value | Description|
| --- | ----| --------- |
| LOG_LEVEL | `info` | 
| PORT | 3000 |  |
| DELAY_IN_MS | 500 | |
| PUSH_SCHEDULE_IN_MS | 500 | The pubsub will push messages every .5 second |

## Results
### Pubsub Server
```
pubsubyy start
info: A Pubsub Server is started at localhost:3000
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: There are 5 messages and 0 workers for topic foo
info: topic - foo contains 6 msg
info: topic - foo contains 7 msg
info: topic - foo contains 8 msg
info: topic - foo contains 9 msg
info: There are 9 messages and 0 workers for topic foo
info: topic - foo contains 10 msg
info: topic - foo contains 1 subscribers
info: There are 10 messages and 1 workers for topic foo
info: There are 9 messages and 1 workers for topic foo
info: topic - foo contains 2 subscribers
info: There are 8 messages and 2 workers for topic foo
info: There are 6 messages and 2 workers for topic foo
info: There are 4 messages and 2 workers for topic foo
info: There are 2 messages and 2 workers for topic foo
```

### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"62902a41-71e1-49af-a3cd-ed091be692da","topic":"foo"}
info: status: 201; body: {"message":"1108b3a3-63c3-47fe-9633-4f99e4910802","topic":"foo"}
info: status: 201; body: {"message":"7302c9c9-f91b-4632-bc20-538a00291955","topic":"foo"}
info: status: 201; body: {"message":"933e34c1-9c63-4895-9e3a-440df16914c9","topic":"foo"}
info: status: 201; body: {"message":"40448198-a554-42a1-8bb9-bf998507efd2","topic":"foo"}
info: status: 201; body: {"message":"54d1a168-7864-4778-8039-243375989c8a","topic":"foo"}
info: status: 201; body: {"message":"c4b9799b-4a78-445a-af79-c4902ad2f9a3","topic":"foo"}
info: status: 201; body: {"message":"1eff9feb-6a50-4654-9577-3c3e70266625","topic":"foo"}
info: status: 201; body: {"message":"b8a46dcc-bccb-4cb3-b474-597f97185274","topic":"foo"}
info: status: 201; body: {"message":"4aa083d7-4cfb-4181-a593-b9e25a85d7f6","topic":"foo"}
```

### 1st consumer
```
pubsubyy consume foo
info: A client is started at localhost:61865, consuming topic "foo"
info: [foo]: printing 62902a41-71e1-49af-a3cd-ed091be692da, which takes 130 ms
info: [foo]: printing 1108b3a3-63c3-47fe-9633-4f99e4910802, which takes 448 ms
info: [foo]: printing 7302c9c9-f91b-4632-bc20-538a00291955, which takes 159 ms
info: [foo]: printing 40448198-a554-42a1-8bb9-bf998507efd2, which takes 235 ms
info: [foo]: printing c4b9799b-4a78-445a-af79-c4902ad2f9a3, which takes 272 ms
info: [foo]: printing b8a46dcc-bccb-4cb3-b474-597f97185274, which takes 88 ms
```

### 2nd Consumer
```
pubsubyy consume foo
info: A client is started at localhost:61870, consuming topic "foo"
info: [foo]: printing 933e34c1-9c63-4895-9e3a-440df16914c9, which takes 187 ms
info: [foo]: printing 54d1a168-7864-4778-8039-243375989c8a, which takes 392 ms
info: [foo]: printing 1eff9feb-6a50-4654-9577-3c3e70266625, which takes 17 ms
info: [foo]: printing 4aa083d7-4cfb-4181-a593-b9e25a85d7f6, which takes 428 ms
```
