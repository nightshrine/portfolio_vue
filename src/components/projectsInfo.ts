import type { IProjectsInfo } from "@/type/projects";

export const getProjectsInfoList = (): IProjectsInfo[] => {
    const projectsInfoList = [
        {
            title: "見積管理・支援システム",
            detail: "株式会社スプーキーズの業務で、開発に携わりました。複数商品の積算を行うシステムで、新規機能開発や拡張機能、バグ修正などを行っております。",
            tech: "Vue3、TS、SpringBoot、Oracle、AWS etc...",
            result: "幅広い技術に触れることができたことはもちろんですが、可読性の高いコードを書くことや、既存のコードと設計を合わせる、シソーラスに一貫性を持たせるなど、エンジニアとして開発していく上で重要な考え方を現役のエンジニアから学ばせていただいております。他の開発者やPMの方にとって質の高いコードを記述することを日々心がけ、今後私が他の開発者のサポートや機能追加の提案を行えるようなエンジニアになりたいと考えております。",
        },
        {
            title: "LINEブラウザでできるゲームアプリ",
            detail: "株式会社スプーキーズの業務で、開発に携わりました。LINEブラウザ上で動作するゲームアプリを作成しております。",
            tech: "Docker、Nginx、TS、Laravel、MySQL etc...",
            result: "会社内でゲームの案件が決まったとお聞きした時に、もう一人別のアルバイトの方と一緒に声をあげ、参加させていただくことができました。もう一人の方と仕様や設計について認識合わせをしながら、開発を行いました。また、SNS認証を用いてバックエンドを構築することが初めてだったので、とても貴重な経験となりました。",
        },
        {
            title: "イベント設定・予約サイト",
            detail: "株式会社プログメイトの業務で作成しました。Froalaを用いたイベント設定や、FullCalendarを用いた予約が可能で、FullCalendarはgoogleカレンダーと連携することができます。",
            tech: "Laravel、PHP、JS、MySQL、Froala、FullCalendar etc...",
            result: "開発の過程で幅広い技術を習得し、それらを組み合わせて効果的なイベント設定および予約システムを構築できました。特に、FullCalendarとGoogleカレンダーを連携させるということは初めての経験だったため、とても有意義な経験をさせていただきました。",
        },
        {
            title: "rythearch",
            imgPath: "../assets/image/rythearch.png",
            urlItems: [
                {
                    urlName: "Github:rythearch",
                    url: "https://github.com/nightshrine/rhythearch",
                },
                {
                    urlName: "rythearch・サンプル動画",
                    url: "https://drive.google.com/file/d/1Zzp7TDC10bonOIRIb-554KS-upPecvOF/view?usp=drive_link",
                }
            ],
            detail: "一部分しか知らない曲を調べたい時に、リズムで検索できるアプリを開発しています。音が出せない環境で鼻歌検索などが使えない場合においても、リズムだけで検索ができればどこでも調べられます。(開発途中)",
            tech: "Flutter, Laravel, SQLite etc...",
            result: "私は、歌詞がなく、一部しか聞き取れなかった音楽を検索したいと思う時が多々あります。そこでもしリズムで検索することができればとても助かると思い、本アプリを開発しています。しかし、リズムだけで検索することは実際かなり難しいので、音の特徴や種類を絞ったり、楽曲データの自動生成など、さまざまな工夫が必要だと思っています。とはいえ、Flutterを用いたアプリ開発は初めてだったのでとても楽しく開発を行っております。"
        },
        {
            title: "軽音日程調整アプリ",
            imgPath: "../assets/image/kon_schedule.png",
            urlItems: [
                {
                    urlName: "軽音日程調整アプリ・サンプル動画",
                    url: "https://drive.google.com/file/d/1EGelWqp2bNM2vqmo63zj8lZVFNtPFqyZ/view?usp=sharing",
                },
            ],
            detail: "所属している軽音楽サークルでは、コマごとに予約することで学内の練習室を使用できます。本アプリでは、コマごとに日程を調整することができます。",
            tech: "React、Node.js、MySQL、Material-UI etc...",
            result: "Web開発の技術力向上のために、企画、開発、運用を1人で行ってみたいと思ったことが目的です。herokuがサービス終了してしまったことや、私自身の実力不足もあって、長期間に渡って使ってもらうことはできませんでした。しかし、企画、開発を行った経験から、フロントエンドとバックエンドの知識、個人開発を行う難しさと楽しさを学びました。",
        },
        {
            title: "ゼロから始めるPHP：チャットアプリ開発入門",
            imgPath: "../assets/image/chatapp_php.png",
            urlItems: [
                {
                    urlName: "Qiita:ゼロから始めるPHP：チャットアプリ開発入門",
                    url: "https://qiita.com/fwzis/items/5fa0e33da3484b5fde70",
                },
            ],
            detail: "PHPを用いてチャットアプリを開発しました。この記事では、PHPの基本的な使い方から、チャットアプリの開発までを解説しています。また、CSRF対策や、XSS対策などのセキュリティ対策も行っています。",
            tech: "PHP etc...",
            result: "PHPの基本的な使い方から、チャットアプリの開発までを解説することで、PHPの基本的な使い方を理解することができました。",
        },
        {
            title: "ブラウザゲーム制作",
            imgPath: "../assets/image/red_blue.gif",
            urlItems: [
                {
                    urlName: "赤と青のブロックを選べ！",
                    url: "https://nightshrine.github.io/red_or_blue/",
                },
                {
                    urlName: "パラレルフラッシュ暗算",
                    url: "https://nightshrine.github.io/parallel_mental_math/game.html",
                },
            ],
            detail: "HTML、CSS、JavaScriptを用いたゲームを作成しながら、JavaScriptを学んでいきました。例えば「赤と青のブロックを選べ！」は、赤と青のブロックが動き回っており、時間内に数の多い色を選ぶ単純なゲームです。",
            tech: "HTML、CSS、JS etc...",
            result: "動きのある表示を使ってゲームを作成することを通して、JSの基本的な使い方を理解することができました。",
        },
        {
            title: "beatmania IIDXをブラウザで練習できるようにした",
            imgPath: "../assets/image/beatmania.gif",
            urlItems: [
                {
                    urlName: "beatmania IIDXをブラウザシミュレーションサイト",
                    url: "https://nightshrine.github.io/iidx_browser/",
                },
                {
                    urlName: "beatmania IIDXの譜面認識練習サイト",
                    url: "https://nightshrine.github.io/iidx_training/",
                },
                {
                    urlName:
                        "Qiita:beatmania IIDXをブラウザで練習できるようにした",
                    url: "https://qiita.com/fwzis/items/b98c1db15beb5534f5f0",
                },
            ],
            detail: "アーケード音楽ゲームであるbeatmania IIDXを、ブラウザでシミュレーションができるようにしました。Qiita記事ではこのサイトの作り方を紹介するものです。また、実際にボタンを押して譜面を認識する練習ができるサイトも作成しました。",
            tech: "TS、Vue、HTML、CSS、JS etc...",
            result: "ブラウザで練習できるサイトが存在しなかったので、作成しました。友人と自分のために作成しましたが、見た目や操作感をなるべく本家に近づけて作成することができたと思います。その間、友人にもフィードバックをもらいながら作成することで、自分では気づかない問題点を自覚しながら開発を行うことができました。",
        },
    ];

    return projectsInfoList;
};
