# Test 8
Create 10 consumers on the same topic, but kill the process by `cmd + c`. The 5th and the 10th are healthy. 
The unhealthy consumers are NOT unsubscribed from the pubsub server. 
Now, messages come in, the two healthy one should take care of the messages correctly. 

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
info: topic - foo contains 3 subscribers
info: topic - foo contains 4 subscribers
info: topic - foo contains 5 subscribers
info: topic - foo contains 6 subscribers
info: topic - foo contains 7 subscribers
info: topic - foo contains 8 subscribers
info: topic - foo contains 9 subscribers
info: topic - foo contains 10 subscribers
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: There are 5 messages and 10 workers for topic foo
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62098
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62102
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62105
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62107
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62112
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62114
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62116
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62118
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: topic - foo contains 6 msg
info: topic - foo contains 7 msg
info: There are 7 messages and 10 workers for topic foo
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62098
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62102
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62105
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62107
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62112
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62114
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62116
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62118
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
info: topic - foo contains 6 msg
info: There are 6 messages and 10 workers for topic foo
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62098
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62102
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62105
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62107
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62112
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62114
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62116
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62118
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
info: There are 4 messages and 10 workers for topic foo
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62102
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62098
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62105
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62107
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62112
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62114
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62116
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62118
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
info: There are 2 messages and 10 workers for topic foo
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62098
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62102
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62105
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62107
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62112
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62114
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62116
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62118
```

### 1st tab
create and kill 4 consumers and keep the last one (62110) live. 

```
$ pubsubyy consume foo
info: A client is started at localhost:62098, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62102, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62105, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62107, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62110, consuming topic "foo"
info: [foo]: printing ceb2c414-18ef-4d09-8f5e-f1a17329235a, which takes 367 ms
info: [foo]: printing c9098b91-b08f-48ab-9c9d-b5f93107b082, which takes 28 ms
info: [foo]: printing 50819a29-912d-4c22-9de5-3a21194cb4d1, which takes 39 ms
info: [foo]: printing 693be9d0-46e0-41a5-971e-bcdae747ffe0, which takes 158 ms
info: [foo]: printing d498f122-000f-490e-9b7e-0c4f9ec511c9, which takes 391 ms
```

### 2nd tab
create and kill 4 consumers and keep the last one (62120) live. 
```
$ pubsubyy consume foo
info: A client is started at localhost:62112, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62114, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62116, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62118, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62120, consuming topic "foo"
info: [foo]: printing 2fc58e75-b637-4ca1-9157-91e2b4a475e4, which takes 360 ms
info: [foo]: printing e2314cc9-0157-49c0-8b2a-393eb07de8ac, which takes 13 ms
info: [foo]: printing 2d7250b0-fc65-408c-baab-761a2e59f029, which takes 243 ms
info: [foo]: printing 35d3b267-e3a5-4721-87d7-faa9ff3525b8, which takes 250 ms
info: [foo]: printing 606540a4-16b0-411a-bc6d-566f349f7cdb, which takes 300 ms
```

### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"2fc58e75-b637-4ca1-9157-91e2b4a475e4","topic":"foo"}
info: status: 201; body: {"message":"d498f122-000f-490e-9b7e-0c4f9ec511c9","topic":"foo"}
info: status: 201; body: {"message":"693be9d0-46e0-41a5-971e-bcdae747ffe0","topic":"foo"}
info: status: 201; body: {"message":"e2314cc9-0157-49c0-8b2a-393eb07de8ac","topic":"foo"}
info: status: 201; body: {"message":"ceb2c414-18ef-4d09-8f5e-f1a17329235a","topic":"foo"}
info: status: 201; body: {"message":"35d3b267-e3a5-4721-87d7-faa9ff3525b8","topic":"foo"}
info: status: 201; body: {"message":"c9098b91-b08f-48ab-9c9d-b5f93107b082","topic":"foo"}
info: status: 201; body: {"message":"2d7250b0-fc65-408c-baab-761a2e59f029","topic":"foo"}
info: status: 201; body: {"message":"50819a29-912d-4c22-9de5-3a21194cb4d1","topic":"foo"}
info: status: 201; body: {"message":"606540a4-16b0-411a-bc6d-566f349f7cdb","topic":"foo"}
```

