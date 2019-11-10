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


### Windows
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

#### select new dns

```
nano /etc/stubby/stubby.yml
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
