//페이지에 데이터 넘기는 용도

//album page

let album = [
    {
        song:'Mercurial',
        singer: '실리카겔',
        date:'2023.03.15',
        genre:'록/메탈, 인디음악',
        release: '카카오엔터테인먼트',
        company:'매직스트로베리사운드',
        intro:`2022년 실리카겔은 싱글 [NO PAIN] 발매로 새로운 리스너들의 유입에 성공 가도를 올리며 밴드신에서의 입지가 그 어느 때보다 단단해진 해였다. 이에 제20회 2023 한국대중음악상 ‘최우수 모던록 노래’로 선정되며 2년 연속 수상의 영예를 안았다. 각종 뮤직 페스티벌, 장르의 경계를 허무는 브랜드 협업 등 활발한 행보에 힘입어 2023년 4월, EP 발매와 최대 규모의 단독 공연을 앞두고 있다. 앞서 EP 선공개 타이틀 [Mercurial]을 공개하며 새로운 활동에 포문을 연다.`,
        cover:'BG1.jpg',
        cover_mo:'BG1_mo.jpg',
        theme : 'black',
        songs : ['Mercurial', 'Mercurial(Inst.)']
    },
    {
        song:'Dive Baby, Dive (Machinedrum Remix)',
        singer: 'Glen Check, Machinedrum',
        date:'2023.03.14', 
        genre:'일렉트로니카',
        release: 'The Orchard Enterprises',
        company:'EMA Recordings',
        intro:`Composed by June One, Machinedrum
        Lyrics by June One
        Arranged by Machinedrum
        Mixed by Machinedrum @ Machinedrum Studio
        Mastered by Shawn Hatfield @ Audible Oddities`,
        cover:'BG2.jpg',
        cover_mo:'BG2_mo.jpg',
        theme : 'white',
        songs : [' Dive Baby, Dive (Machinedrum Remix)']

    },
    {
        song:'NOT ALONE',
        singer: 'Q',
        date:'2023.03.31',
        genre:'R&B/Soul',
        release: 'Sony Music',
        company:'Columbia',
        intro:``,
        cover:'BG3.jpg',
        cover_mo:'BG3_mo.jpg',
        theme : 'white',
        songs : ['NOT ALONE']

    },
    {
        song:'Just a Feeling',
        singer: 'Jane & The Boy',
        date:'2023.03.30',
        genre:'POP',
        release: 'POVU Collective',
        company:'Artlist Original',
        intro:`듣는 이들을 들썩거리게 하는 일렉트로닉 팝 듀오 Jane & The Boy의 신보 컴백, [Just a Feeling] 
        섹시하고 힘 있는 보컬의 뉴디스코 댄스 팝 "Just a Feeling"으로 시작해, 드럼의 리듬감이 돋보이는 청량한 곡 "Strawberry Rush", 상대적으로 레이드백 느낌의 그루비한 곡 "Slow"까지, 귀에 쏙쏙 박히는 매력적인 사운드의 곡들로 채운 EP!`,
        cover:'BG4.jpg',
        cover_mo:'BG4_mo.jpg',
        theme : 'white',
        songs : ['Just a Feeling','Strawberry Rush','Slow','Just a Feeling (Instrumental Version)',
                'Strawberry Rush (Instrumental Version)','Slow (Instrumental Version)']
    },
    {
        song:'Episode1 : Love',
        singer: 'So!YoON!',
        date:'2023.03.14',
        genre:'R&B/Soul',
        release: '카카오엔터테인먼트',
        company:'매직스트로베리사운드',
        intro:`가상과 현실의 모호한 경계를 허물게 될 스토리
            So!YoON!의 두 번째 정규앨범 ‘Episode1 : Love’`,
        cover:'BG5.jpg',
        cover_mo:'BG5_mo.jpg',
        theme : 'black',
        songs : ['IN (Void)','Smoke Sprite (feat. RM of BTS)','Till the sun goes up',' Bad',
        'why don’t you take me out? (skit)','Gave you all my love (feat. jibin of Y2K92)',
        'zone out; (skit)','EXIT','	LOVE (a secret visitor) (feat. parkjiyoon)',
        'CANADA','OUT (to be continued… :)']
    },
    
];

let albumKEY = 'ALBUM'


let banner ={
    song:'Endless Summer Vacation',
    singer: 'Miley Cyrus',
    date:'2023.03.10',
    genre:'POP',
    release: 'Sony Music',
    company:'Columbia',
    intro:``,
    cover:'bnBg.jpg',
    cover_mo:'bnBg_mo.jpg',
    theme : 'white',
    songs : ['Flowers','Jaded','Rose Colored Lenses',
    'Thousand Miles (Feat. Brandi Carlile)','You','Handstand',
    'River','Violet Chemistry',' Muddy Feet (Feat. Sia)',
    'Wildcard','Island','Wonder Woman','Flowers (Demo)']
};


$('.album').children('div').click(function(){
    let i = $(this).index();
    let data = JSON.stringify(album[i]);

    localStorage.setItem(albumKEY,data);

});


$('.bnCon').click(function(){

    let data = banner;
         data = JSON.stringify(data);

    localStorage.setItem(albumKEY,data);
});








