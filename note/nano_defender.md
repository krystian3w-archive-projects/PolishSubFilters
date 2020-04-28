## [Nano Defender](https://github.com/jspenguin2017/uBlockProtector/releases) to połączenie skryptu [AAK](https://github.com/reek/anti-adblock-killer/wiki/AAK-Dead-and-Discontinued) z dodatkiem [uBlock Origin Extra](https://github.com/gorhill/uBO-Extra). Korzystając z Nano Defendera i [uBlocka Origin](https://github.com/gorhill/uBlock/releases) lub [Nano Adblockera](https://github.com/NanoAdblocker/NanoCore/releases) nie będziesz musiał przejmować się skryptami anty-adblock które uniemożliwiają dostępu do stron.

### aby zainstalować nano adblocker z nano defenderem

#### na Chrome

1. wejdź w poniższe linki

<ul>

<code>https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo</code>

<code>https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb</code>

</ul>

2. zainstaluj podane dodatki

#### na Operze

1. wejdź w poniższe linki

<ul>

<code>https://addons.opera.com/pl/extensions/details/install-chrome-extensions/</code>

<code>https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo</code>

<code>https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb</code>

</ul>

2. zainstaluj podane dodatki zgodnie z kolejnością

#### na Firefox Quantum ( [działa z ublockiem origin](https://github.com/konoromihimaries/polishsubfilters/blob/master/note/nano_defender.md#aby-zainstalowa%C4%87-nano-defender-z-ublockiem-origin) )

1. wejdź w poniższe linki

<ul>

<code>https://addons.mozilla.org/pl/firefox/addon/ublock-origin/</code>

<code>https://github.com/LiCybora/NanoDefenderFirefox/releases/</code>

</ul>

2. zainstaluj podane dodatki

#### na Firefox Quantum w wersji **mobilnej** ( [działa z ublockiem origin](https://github.com/konoromihimaries/polishsubfilters/blob/master/note/nano_defender.md#aby-zainstalowa%C4%87-nano-defender-z-ublockiem-origin) )

1. wejdź w poniższe linki

<ul>

<code>https://addons.mozilla.org/pl/android/addon/ublock-origin/</code>

<code>https://github.com/LiCybora/NanoDefenderFirefox/releases/</code>

</ul>

2. zainstaluj podane dodatki

#### na Yandex w wersji **mobilnej** ( [działa z Nano Adblockerem](https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo) )

1. wejdź w poniższe linki

<ul>

<code>https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo</code>

<code>https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb</code>

</ul>

2. zainstaluj podane dodatki

#### na Kiwi Browser w wersji **mobilnej** ( [działa z ublockiem origin](https://github.com/konoromihimaries/polishsubfilters/blob/master/note/nano_defender.md#aby-zainstalowa%C4%87-nano-defender-z-ublockiem-origin) )

1. wejdź w poniższe linki

<ul>

<code>https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo</code>

<code>https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb</code>

</ul>

2. zainstaluj podane dodatki

### aby zainstalować nano defender z ublockiem origin

1. zainstaluj ublock origin wraz z nano defenderem

2. wejdź w [opcje](https://user-images.githubusercontent.com/22258847/39938362-37c58cf4-5542-11e8-8203-57fc5a78a3d7.png) dodatku ublock origin

3. wejdź w zakładkę "Ustawienia"

4. zaznacz opcje "Jestem zaawansowanym użytkownikiem"

5. kliknij w ikonkę trzech trybików
![img-0](https://i.postimg.cc/0jnSS2yx/img-0.png)

6. zmień wartość `userResourcesLocation unset` na 
```
userResourcesLocation https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt
```
###### `** zwróć uwagę że to nie jest lista filtrów i dodanie tego źródła do panelu zwykłych list filtrów nie jest sugerowane. **`

![img-1](https://i.postimg.cc/qBxySQXY/img-1.png)

7. kliknij przycisk "Zastosuj zmiany"

8. zasubskrubuj poniższe listy filtrów

<ul>

([Subskrybuj][NanoDefender]) <code>https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt</code>

([Subskrybuj][NanoBase]) <code>https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt</code>

([Subskrybuj][NanoWhitelist]) <code>https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt</code>

([Subskrybuj][NanoAnnoyance]) <code>https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt</code>

([Subskrybuj][AdblockWarningRemovalList]) <code>https://easylist-downloads.adblockplus.org/antiadblockfilters.txt</code>

</ul>

### aby subskrybować dodatkowe listy wejdź tutaj

<code>https://polishannoyancefilters.netlify.com/otherfiltersforadblockers/</code>

<code>https://majkiit.github.io/polish-ads-filter/</code>

<code>https://filterlists.com/</code>

[NanoDefender]: https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration
[NanoBase]: https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20filters
[NanoWhitelist]: https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist
[NanoAnnoyance]: https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt&title=Nano%20filters%20-%20Annoyance
[AdblockWarningRemovalList]: https://subscribe.adblockplus.org/?location=https://easylist-downloads.adblockplus.org/antiadblockfilters.txt&title=Adblock%20Warning%20Removal%20List

##

###### oryginany poradnik `https://jspenguin2017.github.io/uBlockProtector/#extra-installation-steps-for-ublock-origin`
