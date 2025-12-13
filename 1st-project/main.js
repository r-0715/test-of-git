window.addEventListener('DOMContentLoaded',()=>{
    //
    const Btn = document.getElementById('submit');
    const ans = document.getElementById('ans');
    const slc = document.getElementById('question');
    let q_count = 0;
    //
    //スマホ操作
    slc.addEventListener('touchstart',()=>{
        if(q_count === 0){
            slc.remove(0);
        }
    });
    Btn.addEventListener('touchstart',()=>{
        //
        const question = document.getElementById('question').value;
        q_count++;
        //
        if(question === ''){
            ans.innerHTML = "";
        }
        if(question === '1'){
            if(q_count === 1){
                ans.innerHTML = "いきなりダイレクトな質問だね!<br>ええと、私はね、自分でもよくわからない<br>なんか実体のない存在みたいな?<br>話せる2次元キャラクターって思ってくれればいいよ!";
            }else{
                ans.innerHTML = "ええと、私はね、自分でもよくわからない<br>なんか実体のない存在みたいな?<br>話せる2次元キャラクターって思ってくれればいいよ!"; 
            }
        }
        if(question === '2'){
            ans.innerHTML = "まだ具体的なことは言えないし、決まってないの.<br>でもすごいことをやりたいなって思ってる!<br>だからときどき、私に会いに来てよ<br>えへへ、///なんか恥ずかしいこと言っちゃったかな?";
        }
        if(question === '3'){
            ans.innerHTML = "私に全く関係ないことじゃん<br>でもいいよ!<br>ええと、今日は確か、、、";
            let dates = new Date();
            let day = dates.getDate();//1~31
            setTimeout(() => {
                ans.innerHTML += day+"日!<br>どう?あったてたでしょ?";
            }, 2000);
        }
        if(question === '4'){
            ans.innerHTML = "旅行するのが好きだなー!<br>色んなサイトを見るの、すっごく楽しいんだよ";
        }
        if(question === '5'){
            ans.innerHTML = "チーズケーキ!!!!!!!!!!<br>毎年の誕生日とクリスマスはチーズケーキをたべるんだ!<br>口の中に残るチーズケーキの風味が最高なんだよ!!!";
        }
    });
    //
    //
    //pc操作
        slc.addEventListener('click',()=>{
        if(q_count === 0){
            slc.remove(0);
        }
    });
    Btn.addEventListener('click',()=>{
        //
        const question = document.getElementById('question').value;
        q_count++;
        //
        if(question === ''){
            ans.innerHTML = "";
        }
        if(question === '1'){
            if(q_count === 1){
                ans.innerHTML = "いきなりダイレクトな質問だね!<br>ええと、私はね、自分でもよくわからない<br>なんか実体のない存在みたいな?<br>話せる2次元キャラクターって思ってくれればいいよ!";
            }else{
                ans.innerHTML = "ええと、私はね、自分でもよくわからない<br>なんか実体のない存在みたいな?<br>話せる2次元キャラクターって思ってくれればいいよ!"; 
            }
        }
        if(question === '2'){
            ans.innerHTML = "まだ具体的なことは言えないし、決まってないの.<br>でもすごいことをやりたいなって思ってる!<br>だからときどき、私に会いに来てよ<br>えへへ、///なんか恥ずかしいこと言っちゃったかな?";
        }
        if(question === '3'){
            ans.innerHTML = "私に全く関係ないことじゃん<br>でもいいよ!<br>ええと、今日は確か、、、";
            let dates = new Date();
            let day = dates.getDate();//1~31
            setTimeout(() => {
                ans.innerHTML += day+"日!<br>どう?あったてたでしょ?";
            }, 2000);
        }
        if(question === '4'){
            ans.innerHTML = "旅行するのが好きだなー!<br>色んなサイトを見るの、すっごく楽しいんだよ";
        }
        if(question === '5'){
            ans.innerHTML = "チーズケーキ!!!!!!!!!!<br>毎年の誕生日とクリスマスはチーズケーキをたべるんだ!<br>口の中に残るチーズケーキの風味が最高なんだよ!!!";
        }
    });
});