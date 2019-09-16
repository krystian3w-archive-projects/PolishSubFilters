## Stubby (using DNS-over-TLS)

```
https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Daemon+-+Stubby
```

### Resolv

```
https://gist.github.com/ookangzheng/c8fba46fe1dbcc8152e3231f53f91e86
```

#### check hash

```
echo | openssl s_client -connect 'IP HERE' 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```
