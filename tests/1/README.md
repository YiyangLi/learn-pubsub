# Test 1
Create one normal consumer on topic "foo". And publish 10 messages on "foo" only. 

This is the most simple test. A normal consumer takes less than 500 ms to process a message. So, all messages are processed in a sequential order. 

## Environments
| Name | value | Description|
| --- | ----| --------- |
| LOG_LEVEL | `info` | 
| PORT | 3000 |  |
| DELAY_IN_MS | 500 | |
| PUSH_SCHEDULE_IN_MS | 1000 | The pubsub will push messages every 0.3 sec |

## Results

### Pubsub server
```
pubsubyy start
info: A Pubsub Server is started at localhost:3000
info: topic - foo contains 1 subscribers
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: topic - foo contains 6 msg
info: topic - foo contains 7 msg
info: topic - foo contains 8 msg
info: There are 8 messages and 1 workers for topic foo
info: topic - foo contains 8 msg
info: topic - foo contains 9 msg
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
pubsubyy consume foo
info: A client is started at localhost:61584, consuming topic "foo"
info: [foo]: printing 9db9a6d0-7f82-410f-9625-aa9e5a43b3cc, which takes 132 ms
info: [foo]: printing e1b22a43-48a6-41b0-9638-4e00cab1d7df, which takes 206 ms
info: [foo]: printing cd633379-850a-4da8-a9a7-6efd6aa54439, which takes 298 ms
info: [foo]: printing 99d25046-cdd1-4d13-a2ab-03918fb3d304, which takes 412 ms
info: [foo]: printing 3dbd3375-1a2a-45d0-bb90-0a9d645a5b21, which takes 17 ms
info: [foo]: printing b9dfe0f0-1e1f-4ce5-aeb1-a2212f950776, which takes 247 ms
info: [foo]: printing 358417d0-baa6-4eaf-9fad-2fc38c622c27, which takes 31 ms
info: [foo]: printing 3f433b4c-e68f-4e8b-95c7-ee56db5d8c15, which takes 198 ms
info: [foo]: printing 49db2e92-96f3-4cb3-a3a9-94930a2454e5, which takes 304 ms
info: [foo]: printing 5e7663f9-cbc9-40d9-9034-9fc8d6d9a17f, which takes 394 ms
```

### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"9db9a6d0-7f82-410f-9625-aa9e5a43b3cc","topic":"foo"}
info: status: 201; body: {"message":"e1b22a43-48a6-41b0-9638-4e00cab1d7df","topic":"foo"}
info: status: 201; body: {"message":"cd633379-850a-4da8-a9a7-6efd6aa54439","topic":"foo"}
info: status: 201; body: {"message":"99d25046-cdd1-4d13-a2ab-03918fb3d304","topic":"foo"}
info: status: 201; body: {"message":"3dbd3375-1a2a-45d0-bb90-0a9d645a5b21","topic":"foo"}
info: status: 201; body: {"message":"b9dfe0f0-1e1f-4ce5-aeb1-a2212f950776","topic":"foo"}
info: status: 201; body: {"message":"358417d0-baa6-4eaf-9fad-2fc38c622c27","topic":"foo"}
info: status: 201; body: {"message":"3f433b4c-e68f-4e8b-95c7-ee56db5d8c15","topic":"foo"}
info: status: 201; body: {"message":"49db2e92-96f3-4cb3-a3a9-94930a2454e5","topic":"foo"}
info: status: 201; body: {"message":"5e7663f9-cbc9-40d9-9034-9fc8d6d9a17f","topic":"foo"}
```