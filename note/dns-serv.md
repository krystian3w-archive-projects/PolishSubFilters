## Stubby (using DNS-over-TLS)

```
https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Daemon+-+Stubby
```

### Resolv

```
https://gist.github.com/ookangzheng/c8fba46fe1dbcc8152e3231f53f91e86
```

### Check hash

```
echo | openssl s_client -connect 'IP HERE' 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

##

### Config

```
upstream_recursive_servers:
  - address_data: 146.185.167.43
    tls_auth_name: "dot.securedns.eu"
    tls_pubkey_pinset:
      - digest: "sha256"
        value: h3mufC43MEqRD6uE4lz6gAgULZ5/riqH/E+U+jE3H8g=
  - address_data: 94.130.110.185
    tls_auth_name: "ns1.dnsprivacy.at"
    tls_pubkey_pinset:
      - digest: "sha256"
        value: vqVQ9TcoR9RDY3TpO0MTXw1YQLjF44zdN3/4PkLwtEY=
  - address_data: 94.130.110.178
    tls_auth_name: "ns2.dnsprivacy.at"
    tls_pubkey_pinset:
      - digest: "sha256"
        value: s5Em89o0kigwfBF1gcXWd8zlATSWVXsJ6ecZfmBDTKg=
```

##


### Windows

#### download
```
https://dnsprivacy.org/wiki/display/DP/Windows+installer+for+Stubby
```


#### unpack and copy stubby.bat.lnk from
```
C:\Program Files\Stubby
```

#### click win+r and paste
```
shell:startup
```

##

### Linux

```
apt install stubby
```

```
nano /etc/resolv.conf
cp /etc/resolv.conf /etc/resolv.conf.save
```

#### create start.sh

```
sudo screen -s stubby -dm stubby sudo stubby
cp /etc/resolv.conf.save /etc/resolv.conf
```

##

### Local DNS

ipv4
```
127.0.0.1
```

ipv6
```
::1
```

### Test it

```
https://www.dnsleaktest.com/
```
