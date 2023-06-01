# E2Eテスト

E2EテストはCypressとCucumberを用いて行う。

## Cypressのインストール

UbuntuでCypressを実行するためには、以下の依存ライブラリのインストールが必要である。

```bash
$ apt install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

## Cypressに利用するテスト実行環境について

Cypressは起動時にテスト実行環境を選択できる。
通常はElectronがCypressに同梱されているのでそれを使えばよいが、Chromeなど別の実行環境でテストを実施したければそれらのインストールが必要である。
ここではChromeブラウザのインストール方法を示しておく。

https://astherier.com/blog/2020/08/install-google-chrome-on-wsl2/

