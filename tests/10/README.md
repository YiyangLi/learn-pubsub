# Test 10
Are you still reading? Well, thank you!

The last test, just to have fun, randomly publish messages and create consumers, they are all on the same topic. 

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
info: topic - foo contains 1 msg
info: topic - foo contains 2 msg
info: topic - foo contains 3 msg
info: topic - foo contains 4 msg
info: There are 4 messages and 1 workers for topic foo
info: topic - foo contains 4 msg
info: topic - foo contains 5 msg
info: topic - foo contains 6 msg
info: topic - foo contains 7 msg
info: topic - foo contains 8 msg
info: There are 8 messages and 1 workers for topic foo
info: topic - foo contains 8 msg
info: topic - foo contains 9 msg
info: topic - foo contains 10 msg
info: topic - foo contains 11 msg
info: There are 11 messages and 1 workers for topic foo
info: topic - foo contains 11 msg
info: topic - foo contains 12 msg
info: topic - foo contains 13 msg
info: topic - foo contains 14 msg
info: There are 14 messages and 1 workers for topic foo
info: topic - foo contains 14 msg
info: topic - foo contains 15 msg
info: topic - foo contains 16 msg
info: topic - foo contains 17 msg
info: There are 17 messages and 1 workers for topic foo
info: topic - foo contains 17 msg
info: topic - foo contains 18 msg
info: topic - foo contains 2 subscribers
info: topic - foo contains 19 msg
info: topic - foo contains 20 msg
info: There are 20 messages and 2 workers for topic foo
info: topic - foo contains 19 msg
info: topic - foo contains 20 msg
info: topic - foo contains 21 msg
info: topic - foo contains 22 msg
info: There are 22 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 22 msg
info: topic - foo contains 23 msg
info: topic - foo contains 24 msg
info: topic - foo contains 25 msg
info: There are 25 messages and 2 workers for topic foo
info: topic - foo contains 24 msg
info: topic - foo contains 25 msg
info: topic - foo contains 26 msg
info: topic - foo contains 27 msg
info: There are 27 messages and 2 workers for topic foo
info: topic - foo contains 26 msg
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 28 msg
info: topic - foo contains 29 msg
info: topic - foo contains 30 msg
info: topic - foo contains 31 msg
info: There are 31 messages and 2 workers for topic foo
info: topic - foo contains 30 msg
info: topic - foo contains 31 msg
info: topic - foo contains 32 msg
info: topic - foo contains 33 msg
info: There are 33 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 33 msg
info: topic - foo contains 34 msg
info: topic - foo contains 35 msg
info: topic - foo contains 36 msg
info: There are 36 messages and 2 workers for topic foo
info: topic - foo contains 35 msg
info: topic - foo contains 36 msg
info: topic - foo contains 37 msg
info: topic - foo contains 38 msg
info: There are 38 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 38 msg
info: topic - foo contains 39 msg
info: topic - foo contains 40 msg
info: topic - foo contains 41 msg
info: There are 41 messages and 2 workers for topic foo
info: topic - foo contains 40 msg
info: topic - foo contains 41 msg
info: topic - foo contains 42 msg
info: topic - foo contains 43 msg
info: topic - foo contains 44 msg
info: There are 44 messages and 2 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 44 msg
info: topic - foo contains 45 msg
info: topic - foo contains 46 msg
info: topic - foo contains 47 msg
info: There are 47 messages and 2 workers for topic foo
info: topic - foo contains 46 msg
info: topic - foo contains 47 msg
info: topic - foo contains 48 msg
info: topic - foo contains 3 subscribers
info: topic - foo contains 49 msg
info: There are 49 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 48 msg
info: topic - foo contains 49 msg
info: topic - foo contains 50 msg
info: topic - foo contains 51 msg
info: There are 51 messages and 3 workers for topic foo
info: topic - foo contains 49 msg
info: topic - foo contains 50 msg
info: topic - foo contains 51 msg
info: topic - foo contains 52 msg
info: There are 52 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 51 msg
info: topic - foo contains 52 msg
info: topic - foo contains 53 msg
info: topic - foo contains 54 msg
info: There are 54 messages and 3 workers for topic foo
info: topic - foo contains 52 msg
info: topic - foo contains 53 msg
info: topic - foo contains 54 msg
info: topic - foo contains 55 msg
info: topic - foo contains 56 msg
info: There are 56 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 55 msg
info: topic - foo contains 56 msg
info: topic - foo contains 57 msg
info: topic - foo contains 58 msg
info: There are 58 messages and 3 workers for topic foo
info: topic - foo contains 56 msg
info: topic - foo contains 57 msg
info: topic - foo contains 58 msg
info: topic - foo contains 59 msg
info: There are 59 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: topic - foo contains 58 msg
info: topic - foo contains 59 msg
info: topic - foo contains 60 msg
info: topic - foo contains 61 msg
info: There are 61 messages and 3 workers for topic foo
info: There are 58 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 56 messages and 3 workers for topic foo
info: There are 53 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 51 messages and 3 workers for topic foo
info: There are 48 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 46 messages and 3 workers for topic foo
info: There are 43 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 41 messages and 3 workers for topic foo
info: There are 38 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 36 messages and 3 workers for topic foo
info: There are 33 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 31 messages and 3 workers for topic foo
info: There are 28 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 26 messages and 3 workers for topic foo
info: There are 23 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 21 messages and 3 workers for topic foo
info: There are 18 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 16 messages and 3 workers for topic foo
info: There are 13 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 11 messages and 3 workers for topic foo
info: There are 8 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 6 messages and 3 workers for topic foo
info: There are 3 messages and 3 workers for topic foo
error: consumer busy or unavailable, AxiosError: Request failed with status code 503
info: There are 1 messages and 3 workers for topic foo
```
