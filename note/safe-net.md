# WireGuard
```
https://github.com/angristan/wireguard-install#readme
```

run
```
sudo curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh
chmod +x wireguard-install.sh

sudo ./wireguard-install.sh
```

# Yggdrasil
```
https://yggdrasil-network.github.io/about.html
```

run
```
sudo curl -so- "https://circleci.com/api/v1.1/project/github/yggdrasil-network/yggdrasil-go/latest/artifacts?branch=master&filter=successful" | \
egrep -o "https.*yggdrasil\-.*$(sudo dpkg --print-architecture).deb" | \
while read line; do curl -O $line && sudo dpkg -i $(basename $line); done
```
```
sudo nano /etc/yggdrasil.conf
```

peers
```
https://github.com/yggdrasil-network/public-peers#public-peers
```

run
```
systemctl restart yggdrasil
```

# TigerVNC
```
https://github.com/TigerVNC/tigervnc
```

run
```
useradd vnc
sudo -u vnc vncserver :1 -geometry 800x480 -depth 24 -localhost
```

add to putty at `Connection/SSH/Tunnels`
```
5901
localhost:5901
```
save
