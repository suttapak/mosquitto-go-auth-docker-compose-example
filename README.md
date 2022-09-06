# Mosquitto go auth docker compose example for nodejs HTTP.

Mosquitto mqtt broker authorization and authentication with [mosquitto-go-auth#http](https://github.com/iegomez/mosquitto-go-auth#http) a backend http create by nodejs express.

## Requirements

- Docker.

### can subscript and publish.

```python
    { username: 'test', password: 'test', canSub: 'test/*', canpub: 'test/*' },
    { username: 'suttapak', password: 'password', canSub: 'suttapak/*', canpub: 'suttapak/*' },
    { username: 'hello', password: 'world', canSub: 'hello/*', canpub: 'hello/*' },
    { username: 'admin', password: 'admin', canSub: 'admin/*', canpub: 'admin/*' },
    { username: 'student', password: '1234', canSub: 'testudentst/*', canpub: 'student/*' },
```
