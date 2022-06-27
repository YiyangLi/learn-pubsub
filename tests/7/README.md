# Test 7
Similar to the test5, but here we publish messages firstly, then create 1 slow consumer and 1 normal consumer, 
A slow consumer takes at least .5 second to process, and a normal consumer takes at most .5 second to process.
The push schedule is aggressive. 

The traffic should be shared by the two. But the normal delivers more. 
From the result, the slow takes 4, and the normal takes 6. 
The 3rd message from the publisher is processed by the normal consumer at 5th. 

## Environments
| Name | value | Description|
| --- | ----| --------- |
| LOG_LEVEL | `info` | 
| PORT | 3000 |  |
| DELAY_IN_MS | 500 | |
| PUSH_SCHEDULE_IN_MS | 300 | The pubsub will push messages every .3 second |

## Results
### Pubsub Server
```
pubsubyy start
info: A Pubsub Server is started at localhost:3000
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: There are 3 messages and 0 workers for topic foo
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: topic - foo contains 6 msg
info: There are 6 messages and 0 workers for topic foo
info: topic - foo contains 7 msg
info: topic - foo contains 8 msg
info: There are 8 messages and 0 workers for topic foo
info: topic - foo contains 9 msg
info: topic - foo contains 10 msg
info: There are 10 messages and 0 workers for topic foo
info: There are 10 messages and 0 workers for topic foo
info: There are 10 messages and 0 workers for topic foo
info: There are 10 messages and 0 workers for topic foo
info: There are 10 messages and 0 workers for topic foo
info: There are 10 messages and 0 workers for topic foo
info: topic - foo contains 1 subscribers
info: There are 10 messages and 1 workers for topic foo
info: There are 9 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 2 subscribers
info: There are 9 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 8 messages and 2 workers for topic foo
info: There are 6 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 5 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 4 messages and 2 workers for topic foo
info: There are 2 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 2 messages and 2 workers for topic foo
```

### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"458d7e41-fdfa-4df9-86ac-e78199abc980","topic":"foo"}
info: status: 201; body: {"message":"db1a6255-f516-475c-9ca7-cd6279037034","topic":"foo"}
info: status: 201; body: {"message":"cbe4d961-5cfd-4e37-a2c2-c4134c721c03","topic":"foo"}
info: status: 201; body: {"message":"ab661772-9c1b-4e97-88ce-fac10fefe0de","topic":"foo"}
info: status: 201; body: {"message":"b3dcaa29-2bed-42bf-b4ae-6399f71fdb6d","topic":"foo"}
info: status: 201; body: {"message":"d831f83e-14a3-42e2-bebd-b771c967dac7","topic":"foo"}
info: status: 201; body: {"message":"0e83939d-97a6-418b-86f4-391698c03a2d","topic":"foo"}
info: status: 201; body: {"message":"60d68510-a624-4c98-aaeb-a3cb67007bbf","topic":"foo"}
info: status: 201; body: {"message":"215f3a6b-313c-46af-869b-3dba25e65106","topic":"foo"}
info: status: 201; body: {"message":"7ffb827b-38b1-4437-9787-fac579fb8052","topic":"foo"}
```

### 1st consumer(slow)
```
pubsubyy consume foo true
info: A slow client is started at localhost:61960, consuming topic "foo"
info: [foo]: printing 458d7e41-fdfa-4df9-86ac-e78199abc980, which takes 787 ms
info: [foo]: printing b3dcaa29-2bed-42bf-b4ae-6399f71fdb6d, which takes 929 ms
info: [foo]: printing db1a6255-f516-475c-9ca7-cd6279037034, which takes 517 ms
info: [foo]: printing 0e83939d-97a6-418b-86f4-391698c03a2d, which takes 546 ms
```

### 2nd Consumer
```
info: A client is started at localhost:61964, consuming topic "foo"
info: [foo]: printing ab661772-9c1b-4e97-88ce-fac10fefe0de, which takes 141 ms
info: [foo]: printing d831f83e-14a3-42e2-bebd-b771c967dac7, which takes 204 ms
info: [foo]: printing 60d68510-a624-4c98-aaeb-a3cb67007bbf, which takes 60 ms
info: [foo]: printing 7ffb827b-38b1-4437-9787-fac579fb8052, which takes 232 ms
info: [foo]: printing cbe4d961-5cfd-4e37-a2c2-c4134c721c03, which takes 324 ms
info: [foo]: printing 215f3a6b-313c-46af-869b-3dba25e65106, which takes 475 ms
```
