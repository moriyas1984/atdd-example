# E2Eテスト

E2EテストはCypressとCucumberを用いて行う。

## Cypressのインストール

UbuntuでCypressを実行するためには、以下の依存ライブラリのインストールが必要である。

```bash
$ apt install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

## 環境構築

ローカルPC上での実行時にE2Eテストの対象となるURLはlocalhostとしたいが、CI上では実際のドメインとしたい。
そのように実行環境で切り替えたい値は、本テストスイートでは環境変数を使って切り替えている。
テスト実行前に以下の環境変数を設定されたい。

CYPRESS_SITE_URL='http://localhost:3000/'


## Cypressに利用するテスト実行環境について

Cypressは起動時にテスト実行環境を選択できる。
通常はElectronがCypressに同梱されているのでそれを使えばよいが、Chromeなど別の実行環境でテストを実施したければそれらのインストールが必要である。
ここではChromeブラウザのインストール方法を示しておく。

https://astherier.com/blog/2020/08/install-google-chrome-on-wsl2/

