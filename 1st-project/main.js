window.addEventListener("DOMContentLoaded",()=>{
    //
    //送信ボタン取得
    const submitBtn = document.getElementById('submit');
    //
    //キャンバス
    const canvas = document.getElementById('cvs');
    const ctx = canvas.getContext('2d');
    //
    //const
    const WIDTH = 640;
    const HEIGHT = 32;
    //
    //let
    //
    //
    //送信ボタンのイベントリスナー
    submitBtn.addEventListener('click',()=>{
        //
        //入力情報取得
        const comment_text_box = document.getElementById('commentIn');
        const comment = comment_text_box.value;
        //
        //送信した直後の処理を
        comment_text_box.value = "";
        if(comment === ""){
            alert("入力してください");
            return;
        }
        //
        let length = comment.split("");
        const text_length = WIDTH + 32*length.length;
        let animation;
        let count = 0;
        function animate()
        {
            clr();
            ctx.font = '32px serif';
            ctx.fillText(comment, WIDTH - count, HEIGHT - 4);
            count += 2;
            animation = requestAnimationFrame(animate);
            if(count >= text_length){
                animate = cancelAnimationFrame;
            }
        }
        animate();
    });
    //
    function clr()
    {
        ctx.beginPath();
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.stroke();
        ctx.closePath();
    }
});