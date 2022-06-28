# Test 10
Are you still reading? Thank you for reviewing!

The 1st consumer starts before the publisher, consuming 48 messages in total. 
The 2nd consumer, though slow, joins when there are 20 messages in queue, and the publisher is still publishing messages. It consumes 21 messages in total.
The 3rd consumer joins when there are 49 messages in queue, it's a normal consumer. 

In total, there are 100 messages published, the size of message queue reaches 61, and they are all consumed at the end. 

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
### 1st consumer
<details>
<summary>Starts before the 1st message published, consuming 48 messages </summary>

```shell
$ pubsubyy consume foo
info: A client is started at localhost:62342, consuming topic "foo"
info: [foo]: printing 85e7634c-2a08-4045-9b7b-7a01ef0b6746, which takes 106 ms
info: [foo]: printing 0052a80f-107c-4893-a900-04e7a1b9cd62, which takes 9 ms
info: [foo]: printing 6f1ef037-90bf-42d1-90fc-084caa5002a6, which takes 49 ms
info: [foo]: printing 999c1038-0f4f-4d0f-b916-122169e21ba5, which takes 126 ms
info: [foo]: printing 533fa2a5-5172-4570-919e-665e547b9415, which takes 50 ms
info: [foo]: printing 39241868-5a9e-47b1-86fb-88cd004f65e7, which takes 264 ms
info: [foo]: printing d88cb51e-afe8-426a-bf0c-84cc76eb9064, which takes 214 ms
info: [foo]: printing fea1f67d-b3f5-4158-9af0-441b7b82f3e9, which takes 101 ms
info: [foo]: printing 7f82cece-6bf5-4cd8-9316-e2156a9aed32, which takes 35 ms
info: [foo]: printing 07ab844e-7f18-4c61-9299-846c54c15476, which takes 440 ms
info: [foo]: printing 60dc9e6d-d76f-4e87-91bf-7a6af022bfe9, which takes 136 ms
info: [foo]: printing 1709aa72-7bf0-42ec-8902-fa9e51c3b719, which takes 246 ms
info: [foo]: printing 5df7a315-a2bb-4348-9370-1d6393adf6b1, which takes 45 ms
info: [foo]: printing f748c1fa-c284-45c3-ad0b-cddf28340554, which takes 147 ms
info: [foo]: printing 38064bdf-f8ae-4b93-be55-528056678ff2, which takes 235 ms
info: [foo]: printing 6fc1e072-c0e1-441f-b2fa-de0c465d2630, which takes 86 ms
info: [foo]: printing a1d8a173-fcb8-4dae-8c6c-d4b8fdc6da81, which takes 462 ms
info: [foo]: printing a19b132f-d86a-41f6-acdc-5e92a0a916d2, which takes 236 ms
info: [foo]: printing da29dcfe-74e8-41b5-a1f7-59027edcb8ad, which takes 52 ms
info: [foo]: printing 7f0cafa4-9cfe-409a-9c34-d6aa73f36d37, which takes 187 ms
info: [foo]: printing 9f2bc74a-7bee-483a-9c14-89c25eb9ac6f, which takes 429 ms
info: [foo]: printing ebe04b37-c1d8-412d-8bd7-6a201b7c3fb4, which takes 327 ms
info: [foo]: printing 4850e9fb-0523-451f-ac4f-0741d792e032, which takes 220 ms
info: [foo]: printing 54b99499-3ee6-4e37-b2a3-0af446ea089d, which takes 493 ms
info: [foo]: printing 970ff58f-dcf0-4f15-aabb-27ff85c0caa2, which takes 148 ms
info: [foo]: printing db19021f-c597-4135-a1f8-8f0f5eda7b20, which takes 233 ms
info: [foo]: printing 35d44df1-1145-4590-8b28-db9d50d02b45, which takes 75 ms
info: [foo]: printing 66f6c3a6-5f15-406e-a5a2-81a1d86bfd0f, which takes 451 ms
info: [foo]: printing f4f3ec42-1c41-4d22-95f8-8dc407920113, which takes 299 ms
info: [foo]: printing 9625d7ea-38b6-4e18-ab02-5dfaefd0d2e3, which takes 418 ms
info: [foo]: printing 85203a8f-4d01-4c50-8fac-51fe61ba7d57, which takes 119 ms
info: [foo]: printing 28506907-430e-4703-89ac-511d4962d746, which takes 104 ms
info: [foo]: printing 59b220c3-f53a-48d5-a4ea-f5e6f91fb7f2, which takes 5 ms
info: [foo]: printing 8d9753ff-fec0-46e5-ba8e-9eb8dbda4bf3, which takes 164 ms
info: [foo]: printing 4786ea1c-15ee-4964-984c-6c5a61784e43, which takes 94 ms
info: [foo]: printing 31396c05-76d8-4447-8e57-acec31c33e01, which takes 408 ms
info: [foo]: printing d687bed4-ccca-48d3-aed6-1a79fc8803dd, which takes 400 ms
info: [foo]: printing c8a68ad0-b0bd-40c5-8a36-b0ae1e25ff60, which takes 329 ms
info: [foo]: printing 78f28e63-ff07-4dfd-a60c-3be35180c73a, which takes 351 ms
info: [foo]: printing 71079033-3923-494d-8369-4d5c06869ba3, which takes 468 ms
info: [foo]: printing be409632-769d-40ba-8e76-d550b588abce, which takes 389 ms
info: [foo]: printing 0e510930-4ded-4ee4-a1a9-6d34682dd745, which takes 340 ms
info: [foo]: printing e4161603-78ba-4787-b6f6-3b6f0151bb83, which takes 446 ms
info: [foo]: printing 56fb8f6d-09f9-4587-afcd-ba714bfc6b59, which takes 498 ms
info: [foo]: printing ce1d2dbf-bfbd-41b6-a893-244c918e3be1, which takes 377 ms
info: [foo]: printing 117b4ccb-3902-4148-96fb-209376b0fac1, which takes 12 ms
info: [foo]: printing b30b7e4d-9565-4c26-905d-913bacb70e8a, which takes 196 ms
info: [foo]: printing 85952fe9-1d48-4fb2-8300-cbae816a1b19, which takes 298 ms
```
</details>


### 2nd consumer
<details>
<summary>
A, however slow, consumer joins when the publishing is not finished, and there are unprocessed messages in the queue. 
</summary>

```shell
pubsubyy consume foo slow
info: A slow client is started at localhost:62373, consuming topic "foo"
info: [foo]: printing 3a3bd0ef-e941-4381-8001-815a677f583b, which takes 619 ms
info: [foo]: printing d18ecb15-0503-4c0d-9d99-96f37388c6c6, which takes 810 ms
info: [foo]: printing 9ea74d55-0d02-4270-acd9-ab056e671075, which takes 671 ms
info: [foo]: printing 04f190b3-49a5-49ec-9352-ccebf41f83d3, which takes 724 ms
info: [foo]: printing e86e2cd4-eba1-4d4b-9f35-16a347665117, which takes 822 ms
info: [foo]: printing 04405640-7946-48c4-9738-c4e6506c7ad1, which takes 869 ms
info: [foo]: printing ea1b5984-3ecb-4b9a-8a7b-013e3a9b830c, which takes 745 ms
info: [foo]: printing fe8faf66-51a7-49c4-abd1-0dda4e845a5c, which takes 959 ms
info: [foo]: printing 851a9de4-d0fe-4463-8017-936b05180282, which takes 634 ms
info: [foo]: printing 2e5960c9-8799-488d-b000-7fff669a2880, which takes 637 ms
info: [foo]: printing 4a048500-5cc2-4861-a514-0cd1b717e456, which takes 642 ms
info: [foo]: printing 74761ddd-5ab9-47da-8468-11ad57b9a4ff, which takes 844 ms
info: [foo]: printing 1d8a4abd-ddfe-4208-a24d-2ac59e088ef3, which takes 773 ms
info: [foo]: printing e82d8535-0f7d-44c5-a57d-bb3b2cef41b3, which takes 537 ms
info: [foo]: printing 7818b8e9-041a-4255-b88e-fb1dc4cbc88b, which takes 812 ms
info: [foo]: printing 95d23771-ad85-4c95-a0f6-a1f4a90a687d, which takes 950 ms
info: [foo]: printing 539e8d18-775f-4040-bb0e-2e249f4f5b20, which takes 652 ms
info: [foo]: printing 4b5c6b66-9a62-4cab-9fbb-2f0f48b71911, which takes 602 ms
info: [foo]: printing b34c6f7b-dddf-4ee0-ae79-3bc57a4c0741, which takes 872 ms
info: [foo]: printing c8f9d760-7e16-4e35-b3af-a926f8b7bd2c, which takes 862 ms
info: [foo]: printing edf2ad2a-7e72-4c9d-b06e-72e941380e54, which takes 964 ms
```
</details>

### 3rd consumer
<details>
<summary>
A consumer joins to catch up, when there are 50 messages in queue. 
</summary>

```shell
pubsubyy consume foo     
info: A client is started at localhost:62444, consuming topic "foo"
info: [foo]: printing 4cd32d22-70a7-41cf-9bb4-3fc82b4369d6, which takes 166 ms
info: [foo]: printing 998a1497-3168-42a2-9919-f94a146fafef, which takes 11 ms
info: [foo]: printing 35716c1a-b4cd-41a5-b7e4-7b0834ba440a, which takes 119 ms
info: [foo]: printing 81e67789-3619-43e3-a71d-68e4fcb6155f, which takes 261 ms
info: [foo]: printing 280b4b38-44a7-461f-9e9c-516077645858, which takes 2 ms
info: [foo]: printing 68238beb-23f8-496c-8b95-2e2cf717c833, which takes 167 ms
info: [foo]: printing 8183dc40-6454-401d-8660-b3343c94e0b3, which takes 414 ms
info: [foo]: printing 13f09a00-c218-4dd2-8e78-637db495c40a, which takes 463 ms
info: [foo]: printing 9e5cbbec-a091-47ac-9104-d0efa8476ee6, which takes 406 ms
info: [foo]: printing 62d7db07-8112-4825-848a-32a6d788df18, which takes 101 ms
info: [foo]: printing d8117457-bc2b-44d1-a793-82079e13bf60, which takes 197 ms
info: [foo]: printing a8271705-e4ec-43b1-9219-4c403bb7ced1, which takes 475 ms
info: [foo]: printing f20c4da0-0cce-4e13-a251-993b480de02c, which takes 89 ms
info: [foo]: printing 147e9d4c-d34b-42fe-bd88-6a799da2df3a, which takes 57 ms
info: [foo]: printing adc4980d-22ae-45dd-9478-ae280771ca7d, which takes 346 ms
info: [foo]: printing 9ecab50e-42ea-4051-aa32-edc756cda10f, which takes 182 ms
info: [foo]: printing 264fa3b6-a00d-46c1-8945-d53d55b309ca, which takes 449 ms
info: [foo]: printing 4e6aa9f4-1a50-4256-b061-62c2f905abdf, which takes 402 ms
info: [foo]: printing 7bf32fa4-d404-4836-a1ab-71e3c64008dc, which takes 372 ms
info: [foo]: printing 9dd79b20-1934-4a27-9b7a-37b2a3658b44, which takes 21 ms
info: [foo]: printing 01a81334-a199-4a07-a5dc-db056ad3c042, which takes 234 ms
info: [foo]: printing fc34af9b-d49b-4111-a7d2-620f3a917a09, which takes 12 ms
info: [foo]: printing 5aed6794-0f3b-4d1a-ab55-846d554ad1ab, which takes 91 ms
info: [foo]: printing 6dcc7906-c0c7-49c4-8e91-3d5eb85eab37, which takes 329 ms
info: [foo]: printing 36906b92-1ef7-42f0-8c5d-00c893e904b7, which takes 446 ms
info: [foo]: printing 4cbef0dc-0de7-45fd-bc97-141f8e00e598, which takes 176 ms
info: [foo]: printing 5f764802-12df-4a72-b5c4-14f0e52b0b4f, which takes 4 ms
info: [foo]: printing c490b8f6-6906-45d9-ad77-f9c3bf318660, which takes 128 ms
info: [foo]: printing f5aaabc0-2cb6-48b6-ad17-16ec864e781d, which takes 296 ms
info: [foo]: printing 660b4470-6d40-4732-976e-545dd00bb8f5, which takes 134 ms
info: [foo]: printing 5b2979ea-73e9-476d-9ad2-33f8623a2e65, which takes 472 ms
```
</details>


### Publisher

<details>
<summary>
It publishes 100 messages in total. From the first glance, the 1-6 messages are processed by the 1st consumer, the 7th is processed by the 2nd, and  the 8th is processed by the 3rd. 
</summary>

```
for i in {1..100}
do
   pubsubyy publish foo
done
info: status: 201; body: {"message":"85e7634c-2a08-4045-9b7b-7a01ef0b6746","topic":"foo"}
info: status: 201; body: {"message":"0052a80f-107c-4893-a900-04e7a1b9cd62","topic":"foo"}
info: status: 201; body: {"message":"6f1ef037-90bf-42d1-90fc-084caa5002a6","topic":"foo"}
info: status: 201; body: {"message":"999c1038-0f4f-4d0f-b916-122169e21ba5","topic":"foo"}
info: status: 201; body: {"message":"533fa2a5-5172-4570-919e-665e547b9415","topic":"foo"}
info: status: 201; body: {"message":"39241868-5a9e-47b1-86fb-88cd004f65e7","topic":"foo"}
info: status: 201; body: {"message":"3a3bd0ef-e941-4381-8001-815a677f583b","topic":"foo"}
info: status: 201; body: {"message":"d88cb51e-afe8-426a-bf0c-84cc76eb9064","topic":"foo"}
info: status: 201; body: {"message":"4cd32d22-70a7-41cf-9bb4-3fc82b4369d6","topic":"foo"}
info: status: 201; body: {"message":"fea1f67d-b3f5-4158-9af0-441b7b82f3e9","topic":"foo"}
info: status: 201; body: {"message":"d18ecb15-0503-4c0d-9d99-96f37388c6c6","topic":"foo"}
info: status: 201; body: {"message":"7f82cece-6bf5-4cd8-9316-e2156a9aed32","topic":"foo"}
info: status: 201; body: {"message":"9f2bc74a-7bee-483a-9c14-89c25eb9ac6f","topic":"foo"}
info: status: 201; body: {"message":"07ab844e-7f18-4c61-9299-846c54c15476","topic":"foo"}
info: status: 201; body: {"message":"9ea74d55-0d02-4270-acd9-ab056e671075","topic":"foo"}
info: status: 201; body: {"message":"60dc9e6d-d76f-4e87-91bf-7a6af022bfe9","topic":"foo"}
info: status: 201; body: {"message":"54b99499-3ee6-4e37-b2a3-0af446ea089d","topic":"foo"}
info: status: 201; body: {"message":"1709aa72-7bf0-42ec-8902-fa9e51c3b719","topic":"foo"}
info: status: 201; body: {"message":"04f190b3-49a5-49ec-9352-ccebf41f83d3","topic":"foo"}
info: status: 201; body: {"message":"5df7a315-a2bb-4348-9370-1d6393adf6b1","topic":"foo"}
info: status: 201; body: {"message":"35d44df1-1145-4590-8b28-db9d50d02b45","topic":"foo"}
info: status: 201; body: {"message":"f748c1fa-c284-45c3-ad0b-cddf28340554","topic":"foo"}
info: status: 201; body: {"message":"e86e2cd4-eba1-4d4b-9f35-16a347665117","topic":"foo"}
info: status: 201; body: {"message":"38064bdf-f8ae-4b93-be55-528056678ff2","topic":"foo"}
info: status: 201; body: {"message":"1d8a4abd-ddfe-4208-a24d-2ac59e088ef3","topic":"foo"}
info: status: 201; body: {"message":"6fc1e072-c0e1-441f-b2fa-de0c465d2630","topic":"foo"}
info: status: 201; body: {"message":"04405640-7946-48c4-9738-c4e6506c7ad1","topic":"foo"}
info: status: 201; body: {"message":"a1d8a173-fcb8-4dae-8c6c-d4b8fdc6da81","topic":"foo"}
info: status: 201; body: {"message":"f5aaabc0-2cb6-48b6-ad17-16ec864e781d","topic":"foo"}
info: status: 201; body: {"message":"a19b132f-d86a-41f6-acdc-5e92a0a916d2","topic":"foo"}
info: status: 201; body: {"message":"ea1b5984-3ecb-4b9a-8a7b-013e3a9b830c","topic":"foo"}
info: status: 201; body: {"message":"998a1497-3168-42a2-9919-f94a146fafef","topic":"foo"}
info: status: 201; body: {"message":"da29dcfe-74e8-41b5-a1f7-59027edcb8ad","topic":"foo"}
info: status: 201; body: {"message":"95d23771-ad85-4c95-a0f6-a1f4a90a687d","topic":"foo"}
info: status: 201; body: {"message":"35716c1a-b4cd-41a5-b7e4-7b0834ba440a","topic":"foo"}
info: status: 201; body: {"message":"7f0cafa4-9cfe-409a-9c34-d6aa73f36d37","topic":"foo"}
info: status: 201; body: {"message":"fe8faf66-51a7-49c4-abd1-0dda4e845a5c","topic":"foo"}
info: status: 201; body: {"message":"81e67789-3619-43e3-a71d-68e4fcb6155f","topic":"foo"}
info: status: 201; body: {"message":"5aed6794-0f3b-4d1a-ab55-846d554ad1ab","topic":"foo"}
info: status: 201; body: {"message":"280b4b38-44a7-461f-9e9c-516077645858","topic":"foo"}
info: status: 201; body: {"message":"ebe04b37-c1d8-412d-8bd7-6a201b7c3fb4","topic":"foo"}
info: status: 201; body: {"message":"851a9de4-d0fe-4463-8017-936b05180282","topic":"foo"}
info: status: 201; body: {"message":"68238beb-23f8-496c-8b95-2e2cf717c833","topic":"foo"}
info: status: 201; body: {"message":"4850e9fb-0523-451f-ac4f-0741d792e032","topic":"foo"}
info: status: 201; body: {"message":"4cbef0dc-0de7-45fd-bc97-141f8e00e598","topic":"foo"}
info: status: 201; body: {"message":"8183dc40-6454-401d-8660-b3343c94e0b3","topic":"foo"}
info: status: 201; body: {"message":"2e5960c9-8799-488d-b000-7fff669a2880","topic":"foo"}
info: status: 201; body: {"message":"13f09a00-c218-4dd2-8e78-637db495c40a","topic":"foo"}
info: status: 201; body: {"message":"970ff58f-dcf0-4f15-aabb-27ff85c0caa2","topic":"foo"}
info: status: 201; body: {"message":"c8f9d760-7e16-4e35-b3af-a926f8b7bd2c","topic":"foo"}
info: status: 201; body: {"message":"9e5cbbec-a091-47ac-9104-d0efa8476ee6","topic":"foo"}
info: status: 201; body: {"message":"db19021f-c597-4135-a1f8-8f0f5eda7b20","topic":"foo"}
info: status: 201; body: {"message":"4a048500-5cc2-4861-a514-0cd1b717e456","topic":"foo"}
info: status: 201; body: {"message":"62d7db07-8112-4825-848a-32a6d788df18","topic":"foo"}
info: status: 201; body: {"message":"c490b8f6-6906-45d9-ad77-f9c3bf318660","topic":"foo"}
info: status: 201; body: {"message":"d8117457-bc2b-44d1-a793-82079e13bf60","topic":"foo"}
info: status: 201; body: {"message":"66f6c3a6-5f15-406e-a5a2-81a1d86bfd0f","topic":"foo"}
info: status: 201; body: {"message":"74761ddd-5ab9-47da-8468-11ad57b9a4ff","topic":"foo"}
info: status: 201; body: {"message":"a8271705-e4ec-43b1-9219-4c403bb7ced1","topic":"foo"}
info: status: 201; body: {"message":"f4f3ec42-1c41-4d22-95f8-8dc407920113","topic":"foo"}
info: status: 201; body: {"message":"ce1d2dbf-bfbd-41b6-a893-244c918e3be1","topic":"foo"}
info: status: 201; body: {"message":"f20c4da0-0cce-4e13-a251-993b480de02c","topic":"foo"}
info: status: 201; body: {"message":"9625d7ea-38b6-4e18-ab02-5dfaefd0d2e3","topic":"foo"}
info: status: 201; body: {"message":"147e9d4c-d34b-42fe-bd88-6a799da2df3a","topic":"foo"}
info: status: 201; body: {"message":"85203a8f-4d01-4c50-8fac-51fe61ba7d57","topic":"foo"}
info: status: 201; body: {"message":"5b2979ea-73e9-476d-9ad2-33f8623a2e65","topic":"foo"}
info: status: 201; body: {"message":"adc4980d-22ae-45dd-9478-ae280771ca7d","topic":"foo"}
info: status: 201; body: {"message":"28506907-430e-4703-89ac-511d4962d746","topic":"foo"}
info: status: 201; body: {"message":"e82d8535-0f7d-44c5-a57d-bb3b2cef41b3","topic":"foo"}
info: status: 201; body: {"message":"9ecab50e-42ea-4051-aa32-edc756cda10f","topic":"foo"}
info: status: 201; body: {"message":"59b220c3-f53a-48d5-a4ea-f5e6f91fb7f2","topic":"foo"}
info: status: 201; body: {"message":"264fa3b6-a00d-46c1-8945-d53d55b309ca","topic":"foo"}
info: status: 201; body: {"message":"8d9753ff-fec0-46e5-ba8e-9eb8dbda4bf3","topic":"foo"}
info: status: 201; body: {"message":"7818b8e9-041a-4255-b88e-fb1dc4cbc88b","topic":"foo"}
info: status: 201; body: {"message":"4e6aa9f4-1a50-4256-b061-62c2f905abdf","topic":"foo"}
info: status: 201; body: {"message":"4786ea1c-15ee-4964-984c-6c5a61784e43","topic":"foo"}
info: status: 201; body: {"message":"117b4ccb-3902-4148-96fb-209376b0fac1","topic":"foo"}
info: status: 201; body: {"message":"7bf32fa4-d404-4836-a1ab-71e3c64008dc","topic":"foo"}
info: status: 201; body: {"message":"31396c05-76d8-4447-8e57-acec31c33e01","topic":"foo"}
info: status: 201; body: {"message":"9dd79b20-1934-4a27-9b7a-37b2a3658b44","topic":"foo"}
info: status: 201; body: {"message":"d687bed4-ccca-48d3-aed6-1a79fc8803dd","topic":"foo"}
info: status: 201; body: {"message":"edf2ad2a-7e72-4c9d-b06e-72e941380e54","topic":"foo"}
info: status: 201; body: {"message":"01a81334-a199-4a07-a5dc-db056ad3c042","topic":"foo"}
info: status: 201; body: {"message":"c8a68ad0-b0bd-40c5-8a36-b0ae1e25ff60","topic":"foo"}
info: status: 201; body: {"message":"539e8d18-775f-4040-bb0e-2e249f4f5b20","topic":"foo"}
info: status: 201; body: {"message":"fc34af9b-d49b-4111-a7d2-620f3a917a09","topic":"foo"}
info: status: 201; body: {"message":"78f28e63-ff07-4dfd-a60c-3be35180c73a","topic":"foo"}
info: status: 201; body: {"message":"660b4470-6d40-4732-976e-545dd00bb8f5","topic":"foo"}
info: status: 201; body: {"message":"71079033-3923-494d-8369-4d5c06869ba3","topic":"foo"}
info: status: 201; body: {"message":"4b5c6b66-9a62-4cab-9fbb-2f0f48b71911","topic":"foo"}
info: status: 201; body: {"message":"6dcc7906-c0c7-49c4-8e91-3d5eb85eab37","topic":"foo"}
info: status: 201; body: {"message":"be409632-769d-40ba-8e76-d550b588abce","topic":"foo"}
info: status: 201; body: {"message":"b30b7e4d-9565-4c26-905d-913bacb70e8a","topic":"foo"}
info: status: 201; body: {"message":"36906b92-1ef7-42f0-8c5d-00c893e904b7","topic":"foo"}
info: status: 201; body: {"message":"0e510930-4ded-4ee4-a1a9-6d34682dd745","topic":"foo"}
info: status: 201; body: {"message":"b34c6f7b-dddf-4ee0-ae79-3bc57a4c0741","topic":"foo"}
info: status: 201; body: {"message":"e4161603-78ba-4787-b6f6-3b6f0151bb83","topic":"foo"}
info: status: 201; body: {"message":"85952fe9-1d48-4fb2-8300-cbae816a1b19","topic":"foo"}
info: status: 201; body: {"message":"5f764802-12df-4a72-b5c4-14f0e52b0b4f","topic":"foo"}
info: status: 201; body: {"message":"56fb8f6d-09f9-4587-afcd-ba714bfc6b59","topic":"foo"}
```
</details>
