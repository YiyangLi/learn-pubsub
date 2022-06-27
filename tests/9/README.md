# Test 9
Similar to the Test 8, but the message size is smaller than the subscriptions. 
There are in total 10 consumers, only the 5th and 10th are healthy.

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
info: There are 4 messages and 10 workers for topic foo
info: topic - foo contains 1 msg
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62244
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62246
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62248
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62250
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62259
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62255
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62261
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62263
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:80
info: There are 3 messages and 10 workers for topic foo
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62246
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62244
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62248
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62250
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62255
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62259
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62261
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62263
info: There are 0 messages and 10 workers for topic foo
info: There are 1 messages and 10 workers for topic foo
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62244
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62246
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62248
error: consumer busy or unavailable, Error: connect ECONNREFUSED 127.0.0.1:62250
```

### 1st tab
create and kill 4 consumers and keep the last one (62252) live. 
```
$ pubsubyy consume foo
info: A client is started at localhost:62244, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62246, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62248, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62250, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62252, consuming topic "foo"
info: [foo]: printing cdab7b00-3f7d-471c-a76c-f8c0d8dfb319, which takes 91 ms
info: [foo]: printing 6fb80db1-2ab8-4992-9623-51b84cc2930d, which takes 67 ms
info: [foo]: printing 71746904-98e3-4d72-b7f5-596c022e80d9, which takes 350 ms
```

### 2nd tab
create and kill 4 consumers and keep the last one (62265) live. 
```
$ pubsubyy consume foo
info: A client is started at localhost:62255, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62259, consuming topic "foo"
^C  
$ pubsubyy consume foo
info: A client is started at localhost:62261, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62263, consuming topic "foo"
^C
$ pubsubyy consume foo
info: A client is started at localhost:62265, consuming topic "foo"
info: [foo]: printing d5602e8f-0394-4bcc-ba42-d0021eb7272b, which takes 270 ms
info: [foo]: printing 859aec3e-a3ab-4568-8a7b-18f7eebcefac, which takes 301 ms
```

### Publisher
```
for i in {1..5} 
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"cdab7b00-3f7d-471c-a76c-f8c0d8dfb319","topic":"foo"}
info: status: 201; body: {"message":"d5602e8f-0394-4bcc-ba42-d0021eb7272b","topic":"foo"}
info: status: 201; body: {"message":"71746904-98e3-4d72-b7f5-596c022e80d9","topic":"foo"}
info: status: 201; body: {"message":"859aec3e-a3ab-4568-8a7b-18f7eebcefac","topic":"foo"}
info: status: 201; body: {"message":"6fb80db1-2ab8-4992-9623-51b84cc2930d","topic":"foo"}
```
