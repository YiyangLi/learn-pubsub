# Test 2
Create 1 slow consumer on topic "foo". And publish 10 messages on "foo" only. 
The push schedule is agressive (every .3 sec), and the only consumer is mostly busy in processing the previous message, some scheduled messages will be pushed back and processed later. 

From the results, we know that the last message `655ce381-2e76-4a69-a5f0-cf1eb1b98f2c` is processed at the 5th. 

## Environments
| Name | value | Description|
| --- | ----| --------- |
| LOG_LEVEL | `info` | 
| PORT | 3000 |  |
| DELAY_IN_MS | 500 | The slow consumer on average takes 500ms more time to print and turn back to idle |
| PUSH_SCHEDULE_IN_MS | 300 | The pubsub will push messages every 0.3 sec |

## Results

### Pubsub server
```
pubsubyy start
info: A Pubsub Server is started at localhost:3000
info: topic - foo contains 1 subscribers
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: There are 3 messages and 1 workers for topic foo
info: topic - foo contains 3 msg
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: There are 5 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 6 msg
info: topic - foo contains 7 msg
info: There are 7 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 8 msg
info: topic - foo contains 9 msg
info: There are 9 messages and 1 workers for topic foo
info: There are 8 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 8 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 8 messages and 1 workers for topic foo
info: There are 7 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 7 messages and 1 workers for topic foo
info: There are 6 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 6 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 6 messages and 1 workers for topic foo
info: There are 5 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 5 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 5 messages and 1 workers for topic foo
info: There are 4 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 4 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 4 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 4 messages and 1 workers for topic foo
info: There are 3 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 3 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 3 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 3 messages and 1 workers for topic foo
info: There are 2 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 2 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 2 messages and 1 workers for topic foo
info: There are 1 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 1 messages and 1 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 1 messages and 1 workers for topic foo
```

### Slow Consumer 1 (foo)
```
info: [foo]: printing 47b91e67-0009-43d8-a4f7-e3f84d8b0715, which takes 873 ms
info: [foo]: printing 92254cda-e42c-4e8f-a9e0-039f94738b29, which takes 818 ms
info: [foo]: printing 5bd05699-1325-4797-8bf5-b6871016fa53, which takes 535 ms
info: [foo]: printing d301f2b2-0404-4e45-af92-a39d5d2b1cb6, which takes 777 ms
info: [foo]: printing 655ce381-2e76-4a69-a5f0-cf1eb1b98f2c, which takes 649 ms
info: [foo]: printing 9f04d00e-1277-4ec2-a950-7d63d6d10b93, which takes 970 ms
info: [foo]: printing 2aa2bcb6-227b-4438-8a94-13977e7f4c5b, which takes 979 ms
info: [foo]: printing 867a773b-1176-4811-9747-9d054771e5b0, which takes 636 ms
info: [foo]: printing 8afa68c5-1103-492b-862b-631f0813fe1c, which takes 813 ms
info: [foo]: printing a0d4b282-bffb-4a38-b6fa-cfa35d5ec40e, which takes 773 ms
```


### Publisher
```
for i in {1..10}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"47b91e67-0009-43d8-a4f7-e3f84d8b0715","topic":"foo"}
info: status: 201; body: {"message":"5bd05699-1325-4797-8bf5-b6871016fa53","topic":"foo"}
info: status: 201; body: {"message":"867a773b-1176-4811-9747-9d054771e5b0","topic":"foo"}
info: status: 201; body: {"message":"92254cda-e42c-4e8f-a9e0-039f94738b29","topic":"foo"}
info: status: 201; body: {"message":"a0d4b282-bffb-4a38-b6fa-cfa35d5ec40e","topic":"foo"}
info: status: 201; body: {"message":"2aa2bcb6-227b-4438-8a94-13977e7f4c5b","topic":"foo"}
info: status: 201; body: {"message":"9f04d00e-1277-4ec2-a950-7d63d6d10b93","topic":"foo"}
info: status: 201; body: {"message":"d301f2b2-0404-4e45-af92-a39d5d2b1cb6","topic":"foo"}
info: status: 201; body: {"message":"8afa68c5-1103-492b-862b-631f0813fe1c","topic":"foo"}
info: status: 201; body: {"message":"655ce381-2e76-4a69-a5f0-cf1eb1b98f2c","topic":"foo"}
```

