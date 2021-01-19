const quiz = [
    {
      question: '【問1】SHURE/SM58は次のうちどれ？',
      answers: [ 'コンデンサーマイク', 'バウンダリーマイク', 'ダイナミックマイク', 'ピンマイク'],
      correct: 'ダイナミックマイク'
    }, {
      question: '【問2】ハイパスフィルター(HPF)とは？',
      answers: [ 'ローの音域を減衰する', '残響音を加える', 'ハイの音域を減衰する', '花粉をキャッチするフィルター'],
      correct: 'ローの音域を減衰する'
    }, {
      question: '【問3】Excelと互換性のあるGoogleアプリは？',
      answers: [ 'スライド', 'スプレッドシート', 'ドキュメント', 'マップス'],
      correct: 'スプレッドシート'
    }, {
      question: '【問4】通信システム「4G、5G」この”G"とは何の略称？',
      answers: [ 'グレード', 'ジェネレーション', 'ゲート', 'グーグル'],
      correct: 'ジェネレーション'
    }, {
      question: '【問5】音響の"PA"は何の略？',
      answers: [ 'パブリック・アドレス', 'ポピュラー・アカウント', 'ピープル・アクセス', 'パラダイス・アカデミー'],
      correct: 'パブリック・アドレス'
    }, {
      question: '【問6】ビートルズのベース担当は？',
      answers: [ 'ジョン・レノン', 'ポール・マッカートニー', 'リンゴ・スター', 'ジョージ・ハリスン'],
      correct: 'ポール・マッカートニー'
    }, {
      question: '【問7】次のうち一番"低音域"が出る楽器はどれ？',
      answers: [ 'ヴァイオリン', 'ヴィオラ', 'チェロ', 'コントラバス'],
      correct: 'コントラバス'
    }, {
      question: '【問8】電気で言う"V(ボルト)"は？',
      answers: [ '電流', '電圧', '電力', 'ウサイン'],
      correct: '電圧'
    }, {
      question: '【問9】音の大きさ"110db"はどのくらいの音？',
      answers: [ '電車の車内', '普通の会話', '車のクラクション', '図書館'],
      correct: '車のクラクション'
    }, {
      question: '【最終問題】サウンドハウスのプライベートブランドは？',
      answers: [ 'タスカム', 'マランツ', 'ラムサ', 'クラシックプロ'],
      correct: 'クラシックプロ'
    } 
  ];
  
  //定義
  const $window = window;
  const $doc = document;
  //定義-タイトル
  const $question = $doc.getElementById('js-question');
  //定義-ボタン
  const $buttons = $doc.querySelectorAll('.btn');
  
  //定義-全体
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  //タイトルを問題文に変更する
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    //ボタンを回答文に変更する
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    //ボタンの回答分を更新していく
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;

    }
  };
  
  //問題を次に進めて行く関数
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      showEnd();
    }
  };
  
  //正誤判定の関数
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('◯正解!');
      score++;
    } else {
      $window.alert('✕残念!');
    }
    goToNext();
  };

  
  //最終画面-成績発表
  const showEnd = () => {
    $question.textContent = 'あなたのスコアは' + score + '/' + quizLen + 'です';
    
    const $items = $doc.getElementById('js-items');
    $items.textContent = 'お疲れさまでした！！';

    document.getElementById("kaito").onclick = function() {
      // ここに#buttonをクリックしたら発生させる処理を記述する
      location.href = "https://docs.google.com/document/d/1BD0MsMY-cyNbU-DiErLLDtY4TODhcKadokbjJLYa3Y0/edit?usp=sharing";
    };

    if (score === quizLen){
      $window.alert('素晴らしい!!'); 
    }else{
      $window.alert('結果発表!!');
    }
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }
