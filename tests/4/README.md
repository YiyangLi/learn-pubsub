# Test 4
Create 2 normal consumers on the same topic and publish messages on the topic, the traffic should be shared by the two. 

Each message is processed once only. 

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
info: topic - foo contains 6 msg
info: There are 6 messages and 2 workers for topic foo
info: There are 4 messages and 2 workers for topic foo
info: There are 2 messages and 2 workers for topic foo
```

### 1st consumer
```
pubsubyy consume foo
info: A client is started at localhost:61770, consuming topic "foo"
info: [foo]: printing db51cf65-87f7-4674-8a14-44e0cffc3b10, which takes 460 ms
info: [foo]: printing f5805ccc-3a17-408f-b91d-c0fe6bb64393, which takes 288 ms
info: [foo]: printing f98de39b-f5db-420e-8c29-396d93d5470d, which takes 494 ms
info: [foo]: printing ba678455-60d5-42bd-bc28-ba95c3aaae32, which takes 302 ms
info: [foo]: printing 34bd50ad-6b9b-415d-b9c2-7868b009fdb4, which takes 229 ms
```

### 2nd Consumer
```
pubsubyy consume foo     
info: A client is started at localhost:61774, consuming topic "foo"
info: [foo]: printing bcb45257-32d8-480b-91d4-0821feb00e0e, which takes 221 ms
info: [foo]: printing 6809cab7-ea33-4317-abfc-0bccda9ba7c9, which takes 381 ms
info: [foo]: printing 69750793-5e60-4dac-bb4f-4334add4f0bf, which takes 109 ms
info: [foo]: printing b394fb68-ad0e-42bc-aeb1-5fb17bde4618, which takes 107 ms
info: [foo]: printing 834bcf82-8dc5-4356-bf77-54811bfdadad, which takes 472 ms
```

### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"db51cf65-87f7-4674-8a14-44e0cffc3b10","topic":"foo"}
info: status: 201; body: {"message":"bcb45257-32d8-480b-91d4-0821feb00e0e","topic":"foo"}
info: status: 201; body: {"message":"f5805ccc-3a17-408f-b91d-c0fe6bb64393","topic":"foo"}
info: status: 201; body: {"message":"6809cab7-ea33-4317-abfc-0bccda9ba7c9","topic":"foo"}
info: status: 201; body: {"message":"f98de39b-f5db-420e-8c29-396d93d5470d","topic":"foo"}
info: status: 201; body: {"message":"69750793-5e60-4dac-bb4f-4334add4f0bf","topic":"foo"}
info: status: 201; body: {"message":"ba678455-60d5-42bd-bc28-ba95c3aaae32","topic":"foo"}
info: status: 201; body: {"message":"b394fb68-ad0e-42bc-aeb1-5fb17bde4618","topic":"foo"}
info: status: 201; body: {"message":"34bd50ad-6b9b-415d-b9c2-7868b009fdb4","topic":"foo"}
info: status: 201; body: {"message":"834bcf82-8dc5-4356-bf77-54811bfdadad","topic":"foo"}
```
