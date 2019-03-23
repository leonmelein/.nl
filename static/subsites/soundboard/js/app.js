$(function() {
    console.log("Page ready!");
    // Define sounds
    const sounds = {
        "Claim the Stairs": "claimthestairs.mp3",
        "Geen woning, geen opening": "geenwoning.mp3",
        "Academic Freedom" : "academic-freedom.mp3",
        "Asscher Asscher" : "asscher.mp3",
        "Baudet-latijn" : "baudet-latijn.mp3",
        "BEHALVE JIJ" : "behalve-jij.mp3",
        "Bel" : "bel.mp3",
        "Breek het partijkartel" : "breek-het-partijkartel.mp3",
        "Build a wall" : "build-a-wall.mp3",
        "Calimerogedrag" : "calimerogedrag.mp3",
        "China" : "china.mp3",
        "China China China": "chinachinachina.mp3",
        "Christendemocraat" : "christendemocraat.mp3",
        "Denk 't niet, Job!" : "denk-het-niet-job.mp3",
        "Diploma's" : "diplomas.mp3",
        "Doe eens normaal man" : "doe-eens-normaal-man.mp3",
        "Doe lekker zelf normaal" : "doe-lekker-zelf-normaal.mp3",
        "Dat is niet te geloven, dat is echt erg" : "echt-erg.mp3",
        "Echt iets mee doen" : "echt-iets-mee-doen.mp3",
        "Fake News" : "fake-news.mp3",
        "Grab 'em by the Pussy" : "grab-em-by-the-pussy.mp3",
        "I smell like beef" : "i-smell-like-beef.mp3",
        "I take a nap here" : "i-take-a-nap.mp3",
        "Jij ook" : "jij-ook.mp3",
        "Law & Order" : "law-and-order.mp3",
        "LieuwLieuwLieuw" : "lieuwlieuwlieuw.mp3",
        "Lingo: leader" : "lingo-leader.mp3",
        "Lingo: letter fout" : "lingo-letter-fout.mp3",
        "Lingo: letter erin" : "lingo-letter-goed-verkeerde-plek.mp3",
        "Lingo: letter goed" : "lingo-letter-goed.mp3",
        "Lingo: woord goed" : "lingo-woord-goed.mp3",
        "Lingo: nadenken" : "lingo-nadenken.mp3",
        "Lingo: einde" : "lingo-outro.mp3",
        "Meeste over weten" : "meeste-over-weten.mp3",
        "Minder, minder, minder" : "minder-minder-minder.mp3",
        "Nietje doorheen slaan" : "nietje.mp3",
        "Nooit je idealen verloochenen" : "nooit-idealen-verloochenen.mp3",
        "Nou... Nee!" : "nou-nee.mp3",
        "NOS Journaal" : "nos-journaal.mp3",
        "NFL" : "nfl.mp3",
        "NS Omroep" : "ns-omroep.mp3",
        "Nu doet u het weer" : "nu-doet-u-het-weer.mp3",
        "Om ons kapot te maken" : "kapot-te-maken.mp3",
        "ONVOLDOENDE" : "onvoldoende.mp3",
        "Opportunities" : "opportunities.mp3",
        "Owen WOWson" : "owen-wowson.mp3",
        "Partijkartel" : "partijkartel.mp3",
        "Regelen" : "regelen.mp3",
        "Sombrero Eierdop" : "sombrero.mp3",
        "Stekker Erin" : "stekker-erin.mp3",
        "Stekker Eruit" : "stekker-eruit.mp3",
        "Substantieel" : "subtantieel.mp3",
        "Trap er niet in!" : "trap-er-niet-in.mp3",
        "U draait en u bent niet eerlijk" : "u-draait-niet-eerlijk.mp3",
        "U kijkt zo lief" : "u-kijkt-zo-lief.mp3",
        "Van de media" : "van-de-media.mp3",
        "Voldoende" : "voldoende.mp3",
        "Wie ben jij?" : "wie-ben-jij.mp3",
        "Wie is de mol?: Leader" : "wie-is-de-mol-leader.mp3",
        "Wizzout" : "wizzout.mp3",
        "Yantai" : "yantai.mp3",
        "SAD" : "sad.mp3",
        "BAKKEN VOUWEN!!!" : "bakken-vouwen.mp3",
        "NOOUUU" : "noouuu.mp3",
        "Volumebraakje" : "volumebraakje.mp3",
        "Matige Mandarijn" : "matigemandarijn.mp3",
        "Oh shitjes!" : "ohshitjes.mp3",
        "Pearl Pearl Pearl": "pearlpearlpearl.mp3",
        "Jinek":"jinek.mp3",
        "Billions and Billions":"billions.mp3",
        "Star Wars": "starwars.mp3",
        "The Last Post": "lastpost.mp3",
        "Repressed": "repressed.mp3",
        "DSM: Opening": "generiek.mp3",
        "DSM: Leader": "snd_bumper.mp3",
        "DSM: Klok": "klok2.mp3",
        "DSM: Klok eind": "klokeind.mp3",
        "DSM: Goed": "goed.mp3",
        "DSM: Fout": "fout.mp3",
        "DSM: Winst": "finale.mp3"
    };

    const sounds_div = $("#sounds");
    // Generate buttons
    for(let key in sounds) {
        let value = sounds[key];
        let soundbtn = `<button class="btn btn-default sound" data-file="${value}" data-title="${key}">${key}</button>`;
        sounds_div.append(soundbtn);
    }


    // Play/Pause Button
    $('#play').click(function(){
        var audio = $('#player')[0];

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Monitor Player
    $('#player').on('play', function(){
        console.log("Audio started");
        $('#isPlaying').removeClass("glyphicon-play").addClass("glyphicon-pause");
    });
    $('#player').on('pause', function(){
        console.log("Audio paused")
        $('#isPlaying').removeClass("glyphicon-pause").addClass("glyphicon-play");
    });
    $('#player').on('ended', function(){
        console.log("Audio ended");
        $('#isPlaying').removeClass("glyphicon-pause").addClass("glyphicon-play");
    })

    // Generic on-click handler
    $('.sound').on('click', function(){
        var player = $('#player')[0];
        $('#track').text($(this).attr('data-title'));
        player.src = 'audio/' + $(this).attr('data-file');
        player.play();
    })
});


// Add service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('js/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}